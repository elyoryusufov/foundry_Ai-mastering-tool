import { createFileRoute, Link } from "@tanstack/react-router";
import { PHASES, WEEKS, phaseForWeek } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/roadmap")({ component: Roadmap });

function Roadmap() {
  const progress = useProgress();
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.18em] text-primary">96 weeks · 480 sessions</p>
        <h1 className="mt-2 font-display text-4xl">Roadmap</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Do university in the day. Do Foundry in the evening. Skip Saturday stacking. Every Friday a push.
        </p>
      </header>
      {PHASES.map((phase) => {
        const weeks = WEEKS.filter((w) => w.phaseId === phase.id);
        const done = weeks.reduce((n, w) => n + progress.weekDoneCount(w.id), 0);
        const total = weeks.length * 5;
        return (
          <section key={phase.id} className="rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl">
                <span className="text-primary">Phase {phase.number}</span> {phase.name}
              </h2>
              <span className="text-xs tabular-nums text-muted">
                {done}/{total} · {phase.months}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{phase.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-fg">
              {phase.outcomes.map((o) => (
                <li key={o} className="rounded-md bg-raised px-2 py-1">
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {weeks.map((w) => {
                const c = progress.weekDoneCount(w.id);
                return (
                  <Link
                    key={w.id}
                    to="/week/$weekId"
                    params={{ weekId: String(w.id) }}
                    className="flex min-h-14 items-center justify-between rounded-lg bg-raised px-3 py-2 text-sm transition-colors hover:bg-line/20"
                  >
                    <span>
                      <span className="tabular-nums text-muted">W{w.id}</span> {w.title}
                    </span>
                    <span className="tabular-nums text-xs text-primary">{c}/5</span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
      <p className="hidden">{phaseForWeek(1)?.id}</p>
    </div>
  );
}
