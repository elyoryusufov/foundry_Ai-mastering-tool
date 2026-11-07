import { WEEKDAYS, type WeekPlan } from "./types";

export function W(
  id: number,
  month: number,
  phaseId: string,
  title: string,
  goal: string,
  rows: Array<{ l: string; href: string; label?: string; extraHref?: string; extraLabel?: string; b: string; t: string }>,
  projectHint?: string,
): WeekPlan {
  return {
    id,
    month,
    phaseId,
    title,
    goal,
    projectHint,
    days: rows.map((r, i) => {
      const links = [{ label: r.label ?? "Open lesson", href: r.href }];
      if (r.extraHref) links.push({ label: r.extraLabel ?? "Also", href: r.extraHref });
      return {
        weekday: WEEKDAYS[i],
        learnMins: i === 4 ? 50 : 70,
        buildMins: i === 4 ? 120 : 100,
        learnTitle: r.l,
        learnLinks: links,
        buildTitle: r.b,
        tasks: r.t.split("|"),
      };
    }),
  };
}
