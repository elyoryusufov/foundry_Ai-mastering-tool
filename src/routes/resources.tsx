import { createFileRoute } from "@tanstack/react-router";
import { L } from "@/lib/curriculum";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resources")({ component: Resources });

const GROUPS: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Software",
    items: [
      { label: "Python tutorial", href: L.pyTut },
      { label: "Real Python first steps", href: L.pyFirst },
      { label: "FastAPI tutorial", href: L.fastapi },
      { label: "GitHub Git basics", href: L.gitHubGit },
      { label: "Pro Git book", href: L.gitBook },
      { label: "Docker get started", href: L.docker },
      { label: "pytest", href: L.pytest },
      { label: "uv", href: L.uv },
    ],
  },
  {
    title: "Classical ML",
    items: [
      { label: "Andrew Ng ML Specialization (Coursera)", href: L.ng },
      { label: "DeepLearning.AI page", href: L.ngDlai },
      { label: "Kaggle intro ML", href: L.kaggleMl },
      { label: "sklearn user guide", href: L.sklearn },
      { label: "NumPy", href: L.numpy },
      { label: "Pandas", href: L.pandas },
    ],
  },
  {
    title: "Deep learning",
    items: [
      { label: "fast.ai", href: L.fastai },
      { label: "PyTorch basics", href: L.pytorch },
      { label: "Karpathy Zero to Hero", href: L.karpathy },
      { label: "micrograd lecture", href: L.micrograd },
      { label: "3Blue1Brown nets", href: L.b1bnn },
      { label: "Dive into Deep Learning", href: L.d2l },
      { label: "CS231n notes", href: L.cs231n },
    ],
  },
  {
    title: "LLM engineering",
    items: [
      { label: "Hugging Face LLM course", href: L.hfCourse },
      { label: "Prompt engineering for developers", href: L.peDev },
      { label: "Building systems with ChatGPT API", href: L.sysChat },
      { label: "LangChain course", href: L.lcDev },
      { label: "Advanced RAG eval course", href: L.ragEval },
      { label: "AI agents in LangGraph", href: L.langgraph },
      { label: "LLM Zoomcamp", href: L.zoomcamp },
      { label: "Prompting guide", href: L.prompt },
      { label: "Chroma", href: L.chroma },
      { label: "RAGAS", href: L.ragas },
    ],
  },
  {
    title: "Production & security",
    items: [
      { label: "MLOps specialization", href: L.mlops },
      { label: "ml-ops.org", href: L.mlopsOrg },
      { label: "MLflow", href: L.mlflow },
      { label: "vLLM", href: L.vllm },
      { label: "PEFT / LoRA", href: L.peft },
      { label: "OWASP LLM Top 10", href: L.owaspLlm },
      { label: "System design primer", href: L.systemDesign },
      { label: "Neetcode", href: L.leetcode },
    ],
  },
];

function Resources() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.18em] text-primary">Do not wander</p>
        <h1 className="mt-2 font-display text-4xl">Every link used in the 2-year plan</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          These are the lessons. Daily sessions already point at the right chapter. Use this page when you are lost.
        </p>
      </header>
      {GROUPS.map((g) => (
        <section key={g.title}>
          <h2 className="font-display text-2xl">{g.title}</h2>
          <ul className="mt-3 divide-y divide-border rounded-2xl bg-surface shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
            {g.items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-12 items-center justify-between gap-3 px-4 text-sm hover:bg-raised"
                >
                  {it.label}
                  <ExternalLink className="size-3.5 shrink-0 text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
