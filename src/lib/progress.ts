import { useEffect, useState } from "react";
import { TOTAL_DAYS, WEEKS, dayKey, type Weekday } from "@/lib/curriculum";

const KEY = "foundry-progress-v1";

export type Progress = {
  startDate: string | null;
  completed: Record<string, boolean>;
  projects: Record<string, boolean>;
  notes: Record<string, string>;
};

const empty: Progress = { startDate: null, completed: {}, projects: {}, notes: {} };

function load(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

function save(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function addWeekdays(start: Date, n: number) {
  const d = new Date(start);
  d.setHours(12, 0, 0, 0);
  let left = n;
  while (left > 0) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) left -= 1;
  }
  return d;
}

export function weekdayFromDate(d: Date): Weekday | null {
  const map: Record<number, Weekday> = { 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri" };
  return map[d.getDay()] ?? null;
}

export function sessionFor(startIso: string | null, now = new Date()) {
  if (!startIso) return null;
  const start = new Date(startIso);
  start.setHours(12, 0, 0, 0);
  const cur = new Date(now);
  cur.setHours(12, 0, 0, 0);
  if (cur < start) {
    return { weekId: 1, weekday: "Mon" as Weekday, beforeStart: true };
  }
  let weekdays = 0;
  const t = new Date(start);
  while (t < cur) {
    const day = t.getDay();
    if (day !== 0 && day !== 6) weekdays += 1;
    t.setDate(t.getDate() + 1);
  }
  const todayIsWeekday = cur.getDay() !== 0 && cur.getDay() !== 6;
  const index = todayIsWeekday ? weekdays : weekdays - 1;
  const clamped = Math.max(0, Math.min(TOTAL_DAYS - 1, index));
  const weekId = Math.floor(clamped / 5) + 1;
  const weekday = (["Mon", "Tue", "Wed", "Thu", "Fri"] as Weekday[])[clamped % 5];
  const weekend = !todayIsWeekday;
  return { weekId, weekday, weekend, beforeStart: false };
}

export function useProgress() {
  const [p, setP] = useState<Progress>(empty);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setP(load());
    setReady(true);
  }, []);

  function update(fn: (prev: Progress) => Progress) {
    setP((prev) => {
      const next = fn(prev);
      save(next);
      return next;
    });
  }

  const completedCount = Object.values(p.completed).filter(Boolean).length;

  return {
    ready,
    ...p,
    completedCount,
    totalDays: TOTAL_DAYS,
    setStartDate: (iso: string) => update((s) => ({ ...s, startDate: iso })),
    toggleDay: (weekId: number, weekday: string) =>
      update((s) => {
        const k = dayKey(weekId, weekday);
        return { ...s, completed: { ...s.completed, [k]: !s.completed[k] } };
      }),
    toggleProject: (id: string) =>
      update((s) => ({ ...s, projects: { ...s.projects, [id]: !s.projects[id] } })),
    setNote: (k: string, v: string) => update((s) => ({ ...s, notes: { ...s.notes, [k]: v } })),
    isDone: (weekId: number, weekday: string) => !!p.completed[dayKey(weekId, weekday)],
    weekDoneCount: (weekId: number) =>
      WEEKS[weekId - 1]?.days.filter((d) => p.completed[dayKey(weekId, d.weekday)]).length ?? 0,
  };
}
