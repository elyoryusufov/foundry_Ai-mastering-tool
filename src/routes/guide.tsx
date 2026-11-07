import { createFileRoute } from "@tanstack/react-router";
import { SPECIALIZATIONS, RHYTHM } from "@/lib/curriculum";

export const Route = createFileRoute("/guide")({ component: Guide });

function Guide() {
  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.18em] text-primary">Playbook</p>
        <h1 className="mt-2 font-display text-4xl">How you become a professional AI engineer</h1>
      </header>
      <section className="space-y-3 text-pretty text-sm leading-relaxed text-fg">
        <p>
          A professional AI engineer is a software engineer who can train, evaluate, serve, and operate models —
          especially LLM systems — without lying about what they cannot do. Labs like xAI, OpenAI, and Tesla do not
          hire enthusiasm. They hire people who have shipped systems, can debug a training loop, and can explain a
          tradeoff on a whiteboard.
        </p>
        <p>
          You already have math. University will add logic, linear algebra, probability, neural nets, NLP, ethics. That
          is necessary and not sufficient. The missing half is the Friday push: APIs, RAG with evals, agents with traces,
          Docker, security labs, writing.
        </p>
        <p>
          Effortlessly is not the deal. Consistently is. Three hours, five days, two years is about 1,500 focused hours.
          That is enough to be dangerous in a good way — not enough to skip humility. You will not "know everything".
          You will have a public trail that proves you finish.
        </p>
      </section>
      <section>
        <h2 className="font-display text-2xl">Daily rhythm</h2>
        <p className="mt-2 text-sm text-muted">{RHYTHM.split}</p>
        <p className="mt-1 text-sm text-muted">{RHYTHM.days}</p>
        <p className="mt-1 text-sm text-muted">{RHYTHM.rule}</p>
      </section>
      <section>
        <h2 className="font-display text-2xl">Four tracks that stay employed</h2>
        <div className="mt-4 space-y-4">
          {SPECIALIZATIONS.map((s) => (
            <div key={s.id} className="rounded-2xl bg-surface p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
              <h3 className="font-display text-xl text-primary">{s.name}</h3>
              <p className="mt-2 text-sm">Now: {s.now}</p>
              <p className="mt-1 text-sm text-muted">10–20 years: {s.later}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-2 text-sm">
        <h2 className="font-display text-2xl">Priorities</h2>
        <ol className="list-decimal space-y-1 pl-5 text-muted">
          <li>Health, family, people you will not abandon — then the work.</li>
          <li>University exams when they land; Foundry flexes a week, does not die.</li>
          <li>Build > consume. If a video has no commit that day, it did not count.</li>
          <li>One flagship in public beats ten private notebooks.</li>
          <li>English writing is part of the job. Keep LEARNING.md.</li>
        </ol>
      </section>
      <section className="space-y-2 text-sm text-muted">
        <h2 className="font-display text-2xl text-fg">Will software disappear?</h2>
        <p>
          Programming as typing boilerplate will shrink. Programming as specifying, evaluating, and operating systems
          will not. AI engineering is that job. In 10–20 years the titles shift; the need for people who can make models
          behave in the world does not vanish.
        </p>
        <p>
          Money: yes, if you finish this and can talk about the repos. Survival is not a certificate. It is shipped
          systems plus a network. Start in Riga, intern, contribute, then apply wider. The farm background is a story of
          work ethic — use it; do not hide it.
        </p>
      </section>
    </article>
  );
}
