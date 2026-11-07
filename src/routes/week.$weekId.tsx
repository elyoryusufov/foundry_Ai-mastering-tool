import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { WEEKS, phaseForWeek } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { DaySession } from "@/components/day-session";

export const Route = createFileRoute("/week/$weekId")({ component: WeekPage });

function WeekPage() {
  const { weekId } = Route.useParams();
  const id = Math.min(96, Math.max(1, Number(weekId) || 1));
  const week = WEEKS[id - 1];
  const progress = useProgress();
  const [wd, setWd] = useState(week.days[0].weekday);
  const day = week.days.find((d) => d.weekday === wd) ?? week.days[0];
  const phase = phaseForWeek(week.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <Link to="/roadmap" className="hover:text-fg">
          Roadmap
        </Link>
        <span>/</span>
        <span>
          Phase {phase?.number} · {phase?.name}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {week.days.map((d) => (
          <button
            key={d.weekday}
            type="button"
            onClick={() => setWd(d.weekday)}
            className={`min-h-11 rounded-lg px-3 text-sm ${
              d.weekday === wd ? "bg-primary text-primary-fg" : "bg-raised text-muted"
            }`}
          >
            {d.weekday}
            {progress.isDone(week.id, d.weekday) ? " ✓" : ""}
          </button>
        ))}
      </div>
      <DaySession
        week={week}
        day={day}
        done={progress.isDone(week.id, day.weekday)}
        onToggle={() => progress.toggleDay(week.id, day.weekday)}
      />
      <div className="flex justify-between text-sm">
        {week.id > 1 ? (
          <Link to="/week/$weekId" params={{ weekId: String(week.id - 1) }} className="text-muted hover:text-fg">
            ← Week {week.id - 1}
          </Link>
        ) : (
          <span />
        )}
        {week.id < 96 ? (
          <Link to="/week/$weekId" params={{ weekId: String(week.id + 1) }} className="text-muted hover:text-fg">
            Week {week.id + 1} →
          </Link>
        ) : null}
      </div>
    </div>
  );
}
