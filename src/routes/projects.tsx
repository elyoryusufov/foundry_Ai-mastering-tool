import { createFileRoute, Link } from "@tanstack/react-router";
import { PROJECTS, PHASES } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
  const progress = useProgress();
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.18em] text-primary">Portfolio bar</p>
        <h1 className="mt-2 font-display text-4xl">Projects that get interviews</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Notebooks are homework. These are evidence. Ship the bar in the card — not a larger scope.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((p) => {
          const phase = PHASES.find((x) => x.id === p.phaseId);
          const done = progress.projects[p.id];
          return (
            <article key={p.id} className="rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    After week {p.afterWeek} · Phase {phase?.number}
                  </p>
                  <h2 className="mt-1 font-display text-2xl">{p.title}</h2>
                </div>
                <Button size="sm" variant={done ? "copper" : "outline"} onClick={() => progress.toggleProject(p.id)}>
                  {done ? "Shipped" : "Mark shipped"}
                </Button>
              </div>
              <p className="mt-3 text-sm text-fg">{p.brief}</p>
              <p className="mt-2 text-sm text-muted">Bar: {p.bar}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-raised px-2 py-1 text-xs text-muted">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                to="/week/$weekId"
                params={{ weekId: String(p.afterWeek) }}
                className="mt-4 inline-flex min-h-11 items-center text-sm text-primary hover:underline"
              >
                Open week {p.afterWeek}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
