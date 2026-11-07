import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { sessionFor, useProgress } from "@/lib/progress";
import { WEEKS, PHASES, TOTAL_DAYS, phaseForWeek } from "@/lib/curriculum";
import { DaySession } from "@/components/day-session";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const progress = useProgress();
  const [override, setOverride] = useState<{ weekId: number; weekday: string } | null>(null);

  const session = useMemo(
    () => (override ? override : sessionFor(progress.startDate)),
    [progress.startDate, override],
  );

  if (!progress.ready) {
    return <p className="text-muted">Loading your bench…</p>;
  }

  const pct = Math.round((progress.completedCount / TOTAL_DAYS) * 100);

  if (!progress.startDate) {
    const today = new Date().toISOString().slice(0, 10);
    return (
      <div className="mx-auto max-w-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">From zero · 96 weeks</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Light the foundry.</h1>
        <p className="mt-4 text-pretty text-muted">
          You are 21, you know math, you are in software at EKA. This is the other half: 3 hours, Monday to Friday,
          until you can train, serve, and explain systems well enough for serious labs. University gives theory.
          Foundry makes you a builder.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={() => {
              progress.setStartDate(today);
            }}
          >
            Start today
            <ArrowRight className="size-4" />
          </Button>
          <label className="flex min-h-11 items-center gap-2 text-sm text-muted">
            Or pick a Monday
            <input
              type="date"
              className="min-h-11 rounded-lg bg-raised px-3 text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              onChange={(e) => {
                if (e.target.value) progress.setStartDate(e.target.value);
              }}
            />
          </label>
        </div>
        <ul className="mt-10 space-y-2 text-sm text-muted">
          {PHASES.map((p) => (
            <li key={p.id}>
              <span className="text-primary">Phase {p.number}</span> {p.name} · {p.months}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const week = WEEKS[(session?.weekId ?? 1) - 1] ?? WEEKS[0];
  const weekday = session?.weekday ?? "Mon";
  const day = week.days.find((d) => d.weekday === weekday) ?? week.days[0];
  const phase = phaseForWeek(week.id);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-surface px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            Phase {phase?.number} · {phase?.name}
          </p>
          <p className="mt-1 text-sm">
            <span className="tabular-nums text-primary">{progress.completedCount}</span>
            <span className="text-muted"> / {TOTAL_DAYS} sessions · {pct}%</span>
          </p>
        </div>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-raised">
          <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {"weekend" in (session ?? {}) && session && "weekend" in session && session.weekend ? (
        <p className="rounded-xl bg-raised px-4 py-3 text-sm text-muted">
          Weekend — rest. Showing Friday's session. Family first. Optional: reread LEARNING.md.
        </p>
      ) : null}

      <DaySession
        week={week}
        day={day}
        done={progress.isDone(week.id, day.weekday)}
        onToggle={() => progress.toggleDay(week.id, day.weekday)}
      />

      <div className="flex flex-wrap gap-2">
        {week.days.map((d) => (
          <button
            key={d.weekday}
            type="button"
            onClick={() => setOverride({ weekId: week.id, weekday: d.weekday })}
            className={`min-h-11 rounded-lg px-3 text-sm ${
              d.weekday === day.weekday ? "bg-primary text-primary-fg" : "bg-raised text-muted"
            }`}
          >
            {d.weekday}
            {progress.isDone(week.id, d.weekday) ? " ✓" : ""}
          </button>
        ))}
        {week.id < 96 ? (
          <Link
            to="/week/$weekId"
            params={{ weekId: String(week.id + 1) }}
            className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-muted hover:text-fg"
          >
            Next week
          </Link>
        ) : null}
      </div>
    </div>
  );
}
