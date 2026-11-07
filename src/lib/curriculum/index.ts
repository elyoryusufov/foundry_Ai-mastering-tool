export * from "./types";
export * from "./phases";
export * from "./weeks";
export { L } from "./links";

import { PHASES } from "./phases";
import { WEEKS } from "./weeks";

export function phaseForWeek(id: number) {
  return PHASES.find((p) => id >= p.weekStart && id <= p.weekEnd);
}

export function weeksForPhase(phaseId: string) {
  return WEEKS.filter((w) => w.phaseId === phaseId);
}

export function dayKey(weekId: number, weekday: string) {
  return `${weekId}-${weekday}`;
}
