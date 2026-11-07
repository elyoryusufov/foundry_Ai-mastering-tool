import { createFileRoute } from "@tanstack/react-router";
import { UNIVERSITY } from "@/lib/curriculum";

export const Route = createFileRoute("/university")({ component: University });

function University() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.18em] text-primary">Your lectures × this path</p>
        <h1 className="mt-2 font-display text-4xl">University map</h1>
        <p className="mt-2 max-w-2xl text-pretty text-sm text-muted">
          The screenshots you sent (logic, calculus, LA, ML/NN/DL, NLP, ethics, tracks) are a strong spine. Do not skip
          them. Foundry is the evening workshop so theory becomes systems.
        </p>
      </header>
      <div className="overflow-x-auto rounded-2xl bg-surface shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted">
            <tr className="border-b border-border">
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Sem</th>
              <th className="px-4 py-3">Foundry</th>
            </tr>
          </thead>
          <tbody>
            {UNIVERSITY.map((row) => (
              <tr key={row.course} className="border-b border-border/60">
                <td className="px-4 py-3 tabular-nums text-primary">{row.year}</td>
                <td className="px-4 py-3">{row.course}</td>
                <td className="px-4 py-3 text-muted">{row.semester}</td>
                <td className="px-4 py-3 text-muted">{row.foundry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted">
        Year-4-style capstone in the screenshots (thesis, labs, internship) should be your flagship repo. Do not invent
        a second thesis topic if this product already is one.
      </p>
    </div>
  );
}
