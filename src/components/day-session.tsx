import { ExternalLink, Check } from "lucide-react";
import type { DayPlan, WeekPlan } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DaySession({
  week,
  day,
  done,
  onToggle,
}: {
  week: WeekPlan;
  day: DayPlan;
  done: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Week {week.id} · {day.weekday} · Month {week.month}
          </p>
          <h1 className="mt-1 font-display text-3xl text-fg md:text-4xl">{week.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted">{week.goal}</p>
        </div>
        <Button variant={done ? "copper" : "default"} onClick={onToggle}>
          <Check className="size-4" />
          {done ? "Completed" : "Mark 3 hours done"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
          <p className="text-xs uppercase tracking-[0.16em] text-primary">{day.learnMins} min · learn</p>
          <h2 className="mt-2 font-display text-xl">{day.learnTitle}</h2>
          <ul className="mt-4 space-y-2">
            {day.learnLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center justify-between gap-2 rounded-lg bg-raised px-3 text-sm text-fg transition-colors hover:bg-line/30"
                >
                  <span className="truncate">{link.label}</span>
                  <ExternalLink className="size-3.5 shrink-0 text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
          <p className="text-xs uppercase tracking-[0.16em] text-primary">{day.buildMins} min · build</p>
          <h2 className="mt-2 font-display text-xl">{day.buildTitle}</h2>
          <ol className="mt-4 space-y-2">
            {day.tasks.map((t) => (
              <li key={t} className="flex gap-2 text-sm text-fg">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <p className="text-sm text-muted">
        End with a Git commit. Friday: push to GitHub and write five lines in LEARNING.md.
      </p>
      <div className={cn("h-1 rounded-full bg-raised", done && "bg-primary")} />
    </div>
  );
}
