import type { Phase, PortfolioProject, UniCourse } from "./types";

export const PHASES: Phase[] = [
  {
    id: "craft",
    number: "0",
    name: "Software craft",
    months: "Months 1–2",
    weekStart: 1,
    weekEnd: 8,
    summary:
      "Become a Python engineer who can ship an API. University theory does not replace this. Top labs hire builders first.",
    outcomes: [
      "Fluent Python, Git, testing",
      "FastAPI services with docs",
      "Dockerize and run locally",
      "Public GitHub with clean READMEs",
    ],
  },
  {
    id: "ml",
    number: "1",
    name: "Classical ML",
    months: "Months 3–5",
    weekStart: 9,
    weekEnd: 20,
    summary:
      "Learn how models actually learn. Andrew Ng plus sklearn projects. Your math background is an advantage — use it.",
    outcomes: [
      "Train, evaluate, and debug tabular models",
      "Bias/variance, metrics, leakage",
      "End-to-end Kaggle-style pipeline",
    ],
  },
  {
    id: "dl",
    number: "2",
    name: "Deep learning",
    months: "Months 6–8",
    weekStart: 21,
    weekEnd: 32,
    summary:
      "Backprop from scratch, then PyTorch and fast.ai. You will train real networks, not only watch lectures.",
    outcomes: [
      "Write a training loop without a tutorial open",
      "Transfer-learn an image model",
      "Fine-tune a text classifier",
    ],
  },
  {
    id: "llm",
    number: "3",
    name: "LLM engineering",
    months: "Months 9–13",
    weekStart: 33,
    weekEnd: 52,
    summary:
      "This is the job. Prompts, RAG, agents, evals, chatbots. Build systems around models, not just call an API.",
    outcomes: [
      "Production-shaped RAG with evaluation",
      "Tool-using and multi-agent graphs",
      "Shipped chatbot with memory",
    ],
  },
  {
    id: "prod",
    number: "4",
    name: "Production & systems",
    months: "Months 14–18",
    weekStart: 53,
    weekEnd: 72,
    summary:
      "MLOps, serving, LoRA, vLLM, security. The four in-demand tracks: MLOps, LLM infra, agent orchestration, AI security.",
    outcomes: [
      "Serve and monitor a model",
      "Fine-tune with PEFT/LoRA",
      "Red-team prompt injection",
    ],
  },
  {
    id: "capstone",
    number: "5",
    name: "Capstone & offers",
    months: "Months 19–24",
    weekStart: 73,
    weekEnd: 96,
    summary:
      "Ship two flagship projects, write like an engineer, interview. Target xAI / OpenAI / Tesla-level bars with evidence, not hope.",
    outcomes: [
      "Two public flagship systems",
      "Interview loop ready",
      "Clear story from farm to foundry",
    ],
  },
];

export const PROJECTS: PortfolioProject[] = [
  {
    id: "api-journal",
    title: "Personal API journal",
    phaseId: "craft",
    afterWeek: 8,
    stack: ["Python", "FastAPI", "Docker", "GitHub"],
    brief: "CRUD notes API with validation, tests, Dockerfile, and a README a stranger can run in 5 minutes.",
    bar: "Clean code, OpenAPI docs, pytest, tagged release.",
  },
  {
    id: "tabular",
    title: "Tabular decision model",
    phaseId: "ml",
    afterWeek: 20,
    stack: ["pandas", "sklearn", "FastAPI"],
    brief: "Predict a real outcome (credit, churn, or crop yield). Serve the model behind an API with metrics in the README.",
    bar: "Baseline vs model, leakage check, confusion matrix, live /predict.",
  },
  {
    id: "vision",
    title: "Transfer-learned vision app",
    phaseId: "dl",
    afterWeek: 32,
    stack: ["PyTorch", "fast.ai", "Gradio or FastAPI"],
    brief: "Fine-tune an image classifier on a niche dataset you care about. Deploy a demo.",
    bar: "Training curves, error analysis, working demo link or docker.",
  },
  {
    id: "rag",
    title: "Document RAG with evals",
    phaseId: "llm",
    afterWeek: 40,
    stack: ["Chroma", "FastAPI", "RAGAS"],
    brief: "Chat over a real corpus (your lecture notes or a public law/docs set). Measure faithfulness.",
    bar: "Citations, eval table, failing cases documented.",
  },
  {
    id: "agent",
    title: "Tool-using agent",
    phaseId: "llm",
    afterWeek: 52,
    stack: ["LangGraph", "tools", "memory"],
    brief: "An agent that searches, calculates, and writes files for a student workflow. Logs every tool call.",
    bar: "Graph diagram, traces, 10 golden tasks passed.",
  },
  {
    id: "serve",
    title: "Served LoRA + vLLM path",
    phaseId: "prod",
    afterWeek: 62,
    stack: ["PEFT", "vLLM or llama.cpp", "Docker"],
    brief: "Fine-tune a small open model on your domain. Document quantization and latency.",
    bar: "Before/after samples, tokens/sec, cost note.",
  },
  {
    id: "secure",
    title: "AI security lab",
    phaseId: "prod",
    afterWeek: 72,
    stack: ["OWASP LLM", "guardrails", "red team"],
    brief: "Attack your own chatbot (injection, data exfil). Then add filters and re-test.",
    bar: "Attack/defense table. Honest failures kept.",
  },
  {
    id: "flagship",
    title: "Flagship product",
    phaseId: "capstone",
    afterWeek: 80,
    stack: ["Full stack", "RAG or agents", "auth-optional"],
    brief: "One sharp product a hiring manager can use in two minutes. Not a toy notebook.",
    bar: "Demo video, architecture README, tests, deploy.",
  },
];

export const UNIVERSITY: UniCourse[] = [
  { year: "Y1", course: "Computer programming, algorithms and data structures", semester: "1–2", foundry: "Weeks 1–8 plus Neetcode in year 2" },
  { year: "Y1", course: "Calculus", semester: "1–2", foundry: "You know this — apply it in backprop weeks 21–24" },
  { year: "Y1", course: "Theoretical and computational linear algebra", semester: "2", foundry: "Week 13 + PyTorch tensor weeks" },
  { year: "Y1", course: "Computational logic / knowledge representation", semester: "1–2", foundry: "Later agents & tools; keep lecture notes for RAG corpus" },
  { year: "Y1", course: "Cognitive psychology", semester: "2", foundry: "UX of chatbots, eval of 'helpful' answers" },
  { year: "Y2", course: "Machine learning, ANNs and deep learning", semester: "1–2", foundry: "Phases 1–2. University = theory; Foundry = training loops" },
  { year: "Y2", course: "Probability and statistical inference", semester: "1–2", foundry: "Weeks 12, 15, metrics, uncertainty" },
  { year: "Y2", course: "Text mining and NLP", semester: "2", foundry: "Weeks 28–36, then RAG" },
  { year: "Y2", course: "Ethics, law and AI", semester: "1", foundry: "Weeks 65–66 and security lab" },
  { year: "Y3", course: "Statistical modeling / chosen track", semester: "1–2", foundry: "Capstone aligned to your track (NLP, agents, or MLOps)" },
  { year: "Y3", course: "Laboratories / stage / final exam", semester: "2", foundry: "Use flagship project as internship bait and thesis seed" },
];

export const SPECIALIZATIONS = [
  {
    id: "mlops",
    name: "MLOps",
    now: "Pipelines, registries, CI, monitoring, rollback. Still the backbone of real AI teams.",
    later:
      "In 10–20 years the name may change. The work — making models reliable in production — does not disappear.",
  },
  {
    id: "llm-infra",
    name: "LLM integration / infrastructure",
    now: "Serving, batching, KV cache, quantization, gateways, cost. Hottest IC track in 2026.",
    later:
      "Models get cheaper; traffic grows. Someone still has to run the factory. This ages well.",
  },
  {
    id: "agents",
    name: "AI-agent orchestration",
    now: "Tools, graphs, memory, evals, human-in-the-loop. Early and messy — good for a builder.",
    later:
      "Agents will be a layer, like web apps. Orchestrators and evaluators stay employed.",
  },
  {
    id: "security",
    name: "Security around AI systems",
    now: "Prompt injection, data leaks, supply chain, guardrails, red teams. Shortage of people.",
    later:
      "Security never dies. As AI touches money and medicine, this becomes a profession of its own.",
  },
] as const;

export const RHYTHM = {
  hours: 3,
  split: "70 min learn · 100 min build · 10 min Git (Fri: 50 / 120 / 10)",
  days: "Monday–Friday only. Saturday is for a walk, family, and one optional review. Sunday is off.",
  rule: "Every Friday ends with a GitHub push and five lines in your log. Miss a day? Do it next day, do not stack guilt.",
};
