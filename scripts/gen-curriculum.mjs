import { writeFileSync } from "node:fs";

const L = {
  pyTut: "L.pyTut",
  pyFirst: "L.pyFirst",
  pyGoogle: "L.pyGoogle",
  fastapi: "L.fastapi",
  fastapiFirst: "L.fastapiFirst",
  gitHubGit: "L.gitHubGit",
  gitBook: "L.gitBook",
  docker: "L.docker",
  ng: "L.ng",
  ngDlai: "L.ngDlai",
  fastai: "L.fastai",
  kaggleMl: "L.kaggleMl",
  kaggleInt: "L.kaggleInt",
  numpy: "L.numpy",
  pandas: "L.pandas",
  matplotlib: "L.matplotlib",
  sklearn: "L.sklearn",
  pytorch: "L.pytorch",
  torch60: "L.torch60",
  karpathy: "L.karpathy",
  micrograd: "L.micrograd",
  d2l: "L.d2l",
  b1bnn: "L.b1bnn",
  cs231n: "L.cs231n",
  cs224n: "L.cs224n",
  hfCourse: "L.hfCourse",
  hfNlp: "L.hfNlp",
  prompt: "L.prompt",
  peDev: "L.peDev",
  sysChat: "L.sysChat",
  lcDev: "L.lcDev",
  ragEval: "L.ragEval",
  langgraph: "L.langgraph",
  zoomcamp: "L.zoomcamp",
  langchain: "L.langchain",
  llamaindex: "L.llamaindex",
  peft: "L.peft",
  vllm: "L.vllm",
  mlops: "L.mlops",
  mlopsOrg: "L.mlopsOrg",
  mlflow: "L.mlflow",
  owaspLlm: "L.owaspLlm",
  scratchLlm: "L.scratchLlm",
  attention: "L.attention",
  sql: "L.sql",
  linux: "L.linux",
  rest: "L.rest",
  pydantic: "L.pydantic",
  pytest: "L.pytest",
  uv: "L.uv",
  hfHub: "L.hfHub",
  datasets: "L.datasets",
  transformers: "L.transformers",
  trl: "L.trl",
  evals: "L.evals",
  ragas: "L.ragas",
  chroma: "L.chroma",
  openaiApi: "L.openaiApi",
  systemDesign: "L.systemDesign",
  leetcode: "L.leetcode",
  papers: "L.papers",
};

function d(l, href, b, t, extra) {
  const o = { l, href, b, t };
  if (extra) {
    o.extraHref = extra[0];
    o.extraLabel = extra[1];
  }
  return o;
}

const weeks = [];

function add(id, month, phaseId, title, goal, days, projectHint) {
  weeks.push({ id, month, phaseId, title, goal, days, projectHint });
}

// ——— Phase 0: Software craft, weeks 1–8 ———
add(1, 1, "craft", "Interpreter and first scripts", "Install Python, write tiny programs, open a public repo.", [
  d("Python tutorial: appetite + interpreter + informal intro", L.pyTut, "Install Python 3.12+ and open ai-journey", "Install Python|Create GitHub repo ai-journey|Write calculator.py|Write hello_name.py|First commit", [L.pyFirst, "First steps"]),
  d("Control flow: if, for, while, range", L.pyTut, "To-do list that saves to a text file", "Read tutorial §4|Write todo.py with add/list/done|Handle bad input|Commit with a clear message"),
  d("Data structures: lists, dicts, tuples, sets", L.pyTut, "Word-count a local text file", "Download a public-domain text|Count words and top 20|Print a small report|Commit"),
  d("Functions, modules, and virtual environments", L.uv, "Package your scripts as a tiny module", "Install uv|Create a venv|Move helpers into lib.py|Add README how to run"),
  d("Git basics and GitHub flow", L.gitHubGit, "Friday ship: README + history", "Write a 15-line README|git log --oneline|Push to GitHub|Write 5 lines in LEARNING.md", [L.gitBook, "Pro Git"]),
]);
add(2, 1, "craft", "Clean Python", "Write readable functions, errors, and tests.", [
  d("Google's Python class — intro + strings", L.pyGoogle, "String clinic: parse a messy farm log", "Split messy lines|Normalize dates|Print a table|Tests for 3 cases"),
  d("Files, JSON, and pathlib", L.pyTut, "JSON journal CLI", "Append entries with timestamps|List last 5|Search by word|Commit"),
  d("Exceptions and debugging", L.pyTut, "Make the CLI never crash on bad input", "try/except on file IO|Validate empty input|Print useful errors"),
  d("pytest getting started", L.pytest, "Add tests for journal CLI", "Install pytest|Write 5 tests|Make them pass|Show pytest output in README"),
  d("Code review yourself", L.gitBook, "Friday polish", "Rename sloppy files|Delete dead code|Push|LEARNING.md 5 lines"),
]);
add(3, 1, "craft", "HTTP and FastAPI first app", "Expose a Python function as an API.", [
  d("HTTP overview (MDN)", L.rest, "Sketch 4 endpoints on paper then in comments", "GET/POST/PUT/DELETE notes|Status codes 200/400/404|Commit the sketch"),
  d("FastAPI first steps", L.fastapiFirst, "Hello API with / and /health", "Install fastapi[standard]|Run docs UI|/health returns {ok:true}|Commit", [L.fastapi, "Full tutorial"]),
  d("Path and query parameters", L.fastapi, "CRUD in memory for notes", "POST /notes|GET /notes/{id}|GET /notes?q=|Return 404 properly"),
  d("Pydantic models", L.pydantic, "Request/response models", "NoteIn and NoteOut|Validation errors|OpenAPI looks clean"),
  d("Friday: document the API", L.fastapi, "README with curl examples", "3 curl commands|Screenshot note of /docs|Push"),
]);
add(4, 1, "craft", "Deeper FastAPI", "Validation, errors, structure.", [
  d("FastAPI body and nested models", L.fastapi, "Notes with tags array", "Nested Tag model|Filter by tag|Commit"),
  d("Status codes and error handling", L.fastapi, "Consistent error JSON", "{error, detail}|404/409|Tests for errors"),
  d("Bigger applications — routers", L.fastapi, "Split routers/notes.py", "APIRouter|main.py stays tiny|Commit"),
  d("pytest + httpx for APIs", L.pytest, "Test client for all routes", "5+ API tests|CI-ready command in README"),
  d("Friday ship", L.gitHubGit, "Tag v0.1", "git tag v0.1|Push tag|LEARNING.md"),
]);
add(5, 2, "craft", "Git like a teammate", "Branches, PRs, history you are not ashamed of.", [
  d("Pro Git: branching", L.gitBook, "Feature branch workflow", "Create branch feat/search|Add search|Merge mentally via PR notes"),
  d("GitHub flow docs", L.gitHubGit, "Open a pull request on your own repo", "PR description with why/how/test|Merge"),
  d("Commit messages that age well", L.gitBook, "Rewrite last message if needed (local only)", "Use imperative mood|One idea per commit"),
  d("gitignore and secrets", L.gitHubGit, "Never commit .env", "Add .gitignore|Dummy .env.example|Commit"),
  d("Friday: history cleanup", L.gitBook, "Readable git log", "Squash if messy locally|Push|LEARNING.md"),
]);
add(6, 2, "craft", "Linux, SQL, and the terminal", "The floor of every backend job.", [
  d("Linux Journey — command line", L.linux, "Daily terminal drills", "ls/cd/grep/find/chmod|Write a one-page cheatsheet in repo"),
  d("SQL tutorial (Mode)", L.sql, "Query a small CSV via SQLite", "CREATE TABLE|SELECT WHERE GROUP BY|Save queries.sql"),
  d("Joins and aggregates", L.sql, "Farm sales toy DB", "2 tables|JOIN|SUM by month|Commit"),
  d("uv and project layout", L.uv, "pyproject.toml for the API", "uv init or add|Lock file|README install steps"),
  d("Friday: one-command run", L.docker, "Document make run or uv run", "Stranger can start API|Push"),
]);
add(7, 2, "craft", "Docker", "Your app runs the same on any machine.", [
  d("Docker get started", L.docker, "Dockerfile for the notes API", "python slim image|EXPOSE 8000|README docker run"),
  d("Compose mental model", L.docker, "docker-compose.yml with api", "Port map|Restart policy|Commit"),
  d("Multi-stage? Keep it simple", L.docker, "Smaller image: uv/pip freeze", "Pin versions|Rebuild from scratch"),
  d("Healthcheck and logs", L.docker, "Log requests to stdout", "Print method+path|docker logs works"),
  d("Friday: API journal v1", L.docker, "Ship project Personal API journal", "Dockerfile+tests+README+demo gif or clips in text|Push", [L.fastapi, "FastAPI"]),
]);
add(8, 2, "craft", "Portfolio hygiene", "A stranger can run everything.", [
  d("Writing READMEs that hire", L.gitHubGit, "Rewrite all READMEs", "Problem|Run|Test|Demo|Status"),
  d("REST review", L.rest, "Idempotency and status codes pass", "Fix any sloppy 200-on-error"),
  d("pytest coverage of happy + sad paths", L.pytest, "10 tests minimum", "Run in Docker too if you can"),
  d("Pin dependencies", L.uv, "lock file committed", "uv lock or requirements.txt freeze"),
  d("Phase 0 gate", L.gitHubGit, "Tag phase-0-done", "Checklist in LEARNING.md|Push", [L.fastapiFirst, "FastAPI"]),
]);

// ——— Phase 1: Classical ML, weeks 9–20 ———
add(9, 3, "ml", "NumPy as a language", "Stop fearing arrays. This is how models talk.", [
  d("NumPy absolute beginners", L.numpy, "Reproduce 15 array drills", "Indexing|Broadcasting|Sums|Save npy"),
  d("More NumPy: linalg crumbs", L.numpy, "Dot products and norms by hand vs numpy", "Match your math homework to code"),
  d("Pandas intro tutorials 1–4", L.pandas, "Load a CSV of anything local", "head/describe/missing|Commit notebook or script"),
  d("Pandas 5–8: reshape and joins", L.pandas, "Tidy a messy table", "melt/pivot|merge|Save clean parquet or csv"),
  d("Friday plot", L.matplotlib, "2 honest charts", "Histogram + scatter|Title axes|Push"),
]);
add(10, 3, "ml", "Data hygiene", "Garbage in, confident nonsense out.", [
  d("Pandas missing data", L.pandas, "Impute vs drop experiment", "Document which you chose and why"),
  d("Kaggle intro to ML — first lessons", L.kaggleMl, "Decision tree on a tiny set", "Train/valid split|MAE"),
  d("Categorical variables", L.kaggleInt, "One-hot vs ordinal", "Compare MAE|Write the lesson in LEARNING.md"),
  d("Pipelines in sklearn", L.sklearn, "Pipeline + ColumnTransformer", "No leakage from preprocess"),
  d("Friday: clean dataset card", L.kaggleMl, "DATA.md for your chosen tabular problem", "Source|License|Target|Leakage risks"),
]);
add(11, 3, "ml", "Andrew Ng course 1 kickoff", "Regression with eyes open.", [
  d("ML Specialization course 1 — regression start", L.ng, "Implement linear regression with NumPy", "Cost curve plot|Compare to sklearn", [L.ngDlai, "DeepLearning.AI page"]),
  d("Gradient descent intuition", L.ng, "Animate or log loss vs step", "Try 3 learning rates|Screenshot table"),
  d("Multiple features, feature scaling", L.ng, "Standardize features", "Before/after convergence speed"),
  d("sklearn LinearRegression vs yours", L.sklearn, "Match coefficients closely", "Write a test on a synthetic line"),
  d("Friday recap", L.ng, "One-page cheatsheet: cost, GD, scaling", "Push cheatsheet.md"),
]);
add(12, 3, "ml", "Classification", "Logits, thresholds, and honesty.", [
  d("Ng course 1 — classification", L.ng, "Logistic regression from NumPy", "Sigmoid|BCE loss|Accuracy vs logloss"),
  d("Metrics that lie", L.sklearn, "Precision, recall, F1, ROC", "Imbalanced toy set|Don't trust accuracy"),
  d("sklearn LogisticRegression", L.sklearn, "Compare to NumPy version", "Same data|Same metrics"),
  d("Threshold tuning", L.sklearn, "Pick threshold for a cost you invent", "Document the business cost"),
  d("Friday: classification report", L.ng, "README section with plots", "Push"),
]);
add(13, 4, "ml", "Linear algebra for models", "Connect university LA to code.", [
  d("NumPy linear algebra", L.numpy, "Eigen demo on 2x2", "Relate to PCA teaser"),
  d("PCA in sklearn", L.sklearn, "2D plot of high-D data", "Explained variance chart"),
  d("Train/valid/test discipline", L.sklearn, "Three-way split helper", "Never touch test until the end"),
  d("Kaggle intermediate — leakage", L.kaggleInt, "Find a leakage bug in a dummy pipeline", "Write the bug story"),
  d("Friday: LA ↔ ML map", L.numpy, "One page: matrix shapes in a model", "Push"),
]);
add(14, 4, "ml", "Trees and ensembles", "The workhorses of tabular data.", [
  d("Ng course 2 — trees (or sklearn trees doc)", L.ng, "Decision tree on your dataset", "Max depth experiment", [L.sklearn, "sklearn trees"]),
  d("Random forests", L.sklearn, "RF vs tree vs logistic", "Table of metrics"),
  d("Gradient boosting (sklearn HistGB)", L.sklearn, "Boosted model", "Learning curve"),
  d("Feature importance — with grain of salt", L.sklearn, "Permutation importance", "Don't overclaim"),
  d("Friday: model card v0", L.sklearn, "MODEL.md: data, metric, limits", "Push"),
]);
add(15, 4, "ml", "Probability you will actually use", "Calibration, not slogans.", [
  d("Ng advice on bias/variance", L.ng, "High bias vs high variance plots", "Regularize or add data — pick"),
  d("sklearn calibration", L.sklearn, "Reliability curve", "Brier score"),
  d("Cross-validation", L.sklearn, "K-fold on your pipeline", "Mean ± std of metric"),
  d("Error analysis sheet", L.kaggleInt, "20 misclassified rows studied", "Patterns written down"),
  d("Friday: CV numbers in README", L.ng, "No single-split bragging", "Push"),
]);
add(16, 4, "ml", "Unsupervised & recommenders teaser", "Clustering as a tool, not magic.", [
  d("Ng course 3 — unsupervised intro", L.ng, "K-means on 2D toy", "Elbow vs silhouette"),
  d("sklearn clustering", L.sklearn, "Cluster your tabular extras", "Describe clusters in English"),
  d("Anomaly isolation forest", L.sklearn, "Flag weird rows", "Manual check 10 flags"),
  d("Simple recommender (cosine)", L.sklearn, "Item similarity on fake ratings", "Top-N printout"),
  d("Friday notes", L.ng, "When NOT to cluster", "Push"),
]);
add(17, 5, "ml", "End-to-end tabular pipeline", "This becomes project 2.", [
  d("sklearn user guide — pipelines", L.sklearn, "Full pipeline script train.py", "Config at top|Seed set"),
  d("Persist model with joblib", L.sklearn, "Save / load roundtrip test", "Test file"),
  d("FastAPI /predict", L.fastapi, "JSON in, score out", "Pydantic features|Version field"),
  d("Baseline always first", L.sklearn, "DummyClassifier/Regressor in table", "Beat it or explain"),
  d("Friday: API + model talking", L.fastapi, "curl examples", "Push"),
]);
add(18, 5, "ml", "A real dataset", "Pick one and live with it.", [
  d("Kaggle learn wrap", L.kaggleMl, "Choose dataset (crops, credit, housing)", "License check|DATA.md"),
  d("EDA script", L.pandas, "10 plots that answer questions", "Not random histograms"),
  d("Model bake-off", L.sklearn, "3 models, same CV", "Table in README"),
  d("Error analysis 2", L.sklearn, "Slice metrics by a group", "Fairness note if relevant"),
  d("Friday: freeze the problem statement", L.kaggleInt, "One paragraph: user of this model", "Push"),
]);
add(19, 5, "ml", "Ship the tabular API", "Project 2 quality bar.", [
  d("FastAPI response model for predictions", L.fastapi, "proba + label + model_version", "Commit"),
  d("pytest for /predict", L.pytest, "Golden vectors", "CI command"),
  d("Docker again", L.docker, "Image runs the model", "README docker"),
  d("Write the honest README", L.gitHubGit, "Metrics, slices, limitations", "No hype"),
  d("Friday: tag tabular-v1", L.sklearn, "Project Tabular decision model done", "Push"),
]);
add(20, 5, "ml", "Phase 1 gate", "You can train and serve a classical model.", [
  d("Re-read Ng evaluation advice", L.ng, "Audit your project against it", "Fix 2 issues"),
  d("sklearn inspection", L.sklearn, "Partial dependence on 1 feature", "Plot"),
  d("Code cleanup", L.uv, "Dead notebooks out of main path", "scripts/ + README"),
  d("Record a 90-second demo script", L.gitHubGit, "Write DEMO.md steps", "Someone else could film it"),
  d("Gate checklist", L.ngDlai, "phase-1-done tag", "LEARNING.md summary of months 3–5"),
]);

// ——— Phase 2 Deep learning 21–32 ———
add(21, 6, "dl", "Neural nets in pictures", "Intuition before PyTorch sugar.", [
  d("3Blue1Brown neural networks", L.b1bnn, "Notes: what backprop is doing", "Hand sketch of a 2-layer net"),
  d("Karpathy micrograd video", L.micrograd, "Follow along, pause, type it", "Repo clone your own micrograd_min", [L.karpathy, "Zero to hero"]),
  d("Finish your tiny autograd", L.karpathy, "Train a 2-layer net on moons", "Loss plot"),
  d("d2l prelude / multilayer perceptrons skim", L.d2l, "Map terms: logit, softmax, epoch", "Glossary.md"),
  d("Friday: explain backprop in 12 lines", L.b1bnn, "No copied text", "Push"),
]);
add(22, 6, "dl", "PyTorch tensors", "The new NumPy.", [
  d("PyTorch basics intro", L.pytorch, "Tensor drills 20 exercises", "device cpu first"),
  d("60-min blitz — tensors & autograd", L.torch60, "grad examples", "requires_grad chain"),
  d("nn.Module first network", L.pytorch, "MLP on FashionMNIST subset", "Train 3 epochs"),
  d("Train/eval modes and dataloaders", L.pytorch, "Proper DataLoader", "Don't eval in train mode"),
  d("Friday: training loop you can recite", L.pytorch, "train.py without a notebook", "Push"),
]);
add(23, 6, "dl", "A training loop you own", "No magic Trainer yet.", [
  d("PyTorch tutorials — build the net", L.pytorch, "Log loss/acc each epoch", "CSV or print"),
  d("Overfit a tiny subset on purpose", L.torch60, "Prove the model can memorize", "Then regularize"),
  d("Checkpoints", L.pytorch, "Save best.pt by val acc", "Load and resume"),
  d("Reproducibility", L.pytorch, "Seed everything", "Two runs close enough"),
  d("Friday: LOOP.md", L.pytorch, "The 15 lines of a loop explained", "Push"),
]);
add(24, 6, "dl", "fast.ai practical start", "Speed with taste.", [
  d("fast.ai lesson 1", L.fastai, "Run the first notebook yourself", "Pets or similar|Notes in LEARNING.md"),
  d("fast.ai lesson 2 mindset", L.fastai, "Your own image download of a niche", "Farm insects, street signs, or tools"),
  d("DataBlock / dataloaders", L.fastai, "Clean labels", "Remove 10 bad images"),
  d("Interpretation", L.fastai, "Top losses plot", "Write 5 error stories"),
  d("Friday: domain dataset frozen", L.fastai, "DATA.md for images", "Push"),
]);
add(25, 7, "dl", "CNNs and transfer learning", "Don't train ImageNet from scratch.", [
  d("cs231n conv notes (read, don't drown)", L.cs231n, "Sketch conv, stride, pad", "One page"),
  d("PyTorch finetune a ResNet", L.pytorch, "Freeze then unfreeze", "Val acc table"),
  d("fast.ai transfer learning", L.fastai, "Beat your from-scratch MLP", "Compare params and time"),
  d("Augmentation", L.fastai, "Flip/rotate that make sense for your domain", "Don't flip digits if you had digits"),
  d("Friday: vision baseline locked", L.cs231n, "README metrics", "Push"),
]);
add(26, 7, "dl", "Regularization and debug", "When it doesn't learn.", [
  d("d2l dropout & weight decay", L.d2l, "Ablate dropout", "Table"),
  d("Learning rate finder idea (fast.ai)", L.fastai, "Pick LR with a plot", "Don't guess 3e-4 forever"),
  d("Overfit / underfit checklist", L.pytorch, "Debug a broken train (shuffle off etc.)", "Introduce and fix a bug"),
  d("Mixed mistakes: labels", L.fastai, "Find mislabels", "Fix and retrain"),
  d("Friday: DEBUG.md", L.d2l, "Your personal failure modes", "Push"),
]);
add(27, 7, "dl", "Text classifiers", "Bags to transformers teaser.", [
  d("Hugging Face NLP course ch.1–2", L.hfNlp, "Use a pipeline sentiment", "10 farm-life sentences"),
  d("Tokenization intuition", L.hfNlp, "Print tokens for 5 sentences", "Word vs subword"),
  d("Fine-tune a tiny encoder (HF)", L.transformers, "IMDB subset or your notes labels", "Trainer or hand loop"),
  d("Evaluate F1 not just acc", L.hfNlp, "Classification report", "Commit"),
  d("Friday: text model card", L.hfNlp, "Limits: sarcasm, Latvian, etc.", "Push"),
]);
add(28, 7, "dl", "Hugging Face as a workshop", "Hub, datasets, models.", [
  d("Hub docs", L.hfHub, "Create a model card draft", "Upload or local card"),
  d("datasets library", L.datasets, "Load + map + save to disk", "No giant RAM"),
  d("transformers overview", L.transformers, "AutoModelForSequenceClassification", "Forward pass print shapes"),
  d("Token classification skim", L.hfNlp, "NER pipeline on a news sentence", "Notes"),
  d("Friday: HF account tidy", L.hfHub, "One public space or repo link in README", "Push"),
]);
add(29, 8, "dl", "Attention, gently", "The paper exists. You need the picture.", [
  d("Attention is all you need — abstract + figures", L.attention, "Draw encoder stack", "8 boxes labeled"),
  d("Karpathy GPT from scratch (start)", L.karpathy, "nanoGPT or lecture notes", "Char-level bigram baseline"),
  d("Self-attention toy", L.scratchLlm, "One head in NumPy", "Shapes annotated"),
  d("d2l attention section skim", L.d2l, "Compare to your drawing", "Fix the drawing"),
  d("Friday: ATTENTION.md", L.attention, "Explain QKV to a friend", "Push"),
]);
add(30, 8, "dl", "Train a tiny GPT", "So APIs never feel like magic.", [
  d("Karpathy Zero to Hero GPT video", L.karpathy, "Train on a small text you like", "Loss curve"),
  d("LLMs from scratch book repo — tokenizer chapter", L.scratchLlm, "BPE playground", "Encode/decode roundtrip"),
  d("Generate samples", L.karpathy, "Temperature experiments", "Save samples.md"),
  d("Context length vs quality", L.scratchLlm, "Tiny ablation", "Table"),
  d("Friday: you trained a language model", L.karpathy, "Tag tinylm-v0", "Push"),
]);
add(31, 8, "dl", "Vision project finish", "Project 3 bar.", [
  d("fast.ai remaining useful lesson", L.fastai, "Export model.pkl or pt", "Inference script"),
  d("Gradio or FastAPI for images", L.fastapi, "Upload → label + conf", "Local demo"),
  d("Error analysis gallery", L.fastai, "6 images with commentary", "README"),
  d("Docker the demo", L.docker, "Someone else can run", "CPU is fine"),
  d("Friday: vision app tagged", L.fastai, "Project transfer-learned vision done", "Push"),
]);
add(32, 8, "dl", "Phase 2 gate", "You can train and serve a net.", [
  d("Re-read your LOOP.md", L.pytorch, "Rewrite training loop from memory", "Diff vs old"),
  d("cs231n training tricks skim", L.cs231n, "Steal 2 tricks", "Apply or reject with reason"),
  d("Paper with code — browse a baseline", L.papers, "Bookmark 3 papers in your area", "papers.md"),
  d("Clean repos", L.gitHubGit, "Pin 3 repos on GitHub profile", "API, tabular, vision"),
  d("phase-2-done", L.fastai, "LEARNING.md months 6–8", "Tag"),
]);

// ——— Phase 3 LLM engineering 33–52 ———
add(33, 9, "llm", "Prompt engineering as engineering", "Prompts are code. Version them.", [
  d("Prompting guide — intro + techniques", L.prompt, "Prompt library in yaml/md", "5 tasks: extract, classify, rewrite, plan, refuse"),
  d("DeepLearning.AI prompt engineering for developers", L.peDev, "Rebuild course exercises in a script", "prompts/ directory"),
  d("Evaluation of prompts", L.prompt, "10 golden inputs, expected traits", "Don't eyeball only"),
  d("System vs user vs tool messages", L.openaiApi, "Chat template notes", "One file chat_format.md"),
  d("Friday: prompt repo v0", L.peDev, "README how to run eval", "Push"),
]);
add(34, 9, "llm", "Building systems around an LLM", "Not a chatbot toy — a system.", [
  d("Building systems with ChatGPT API", L.sysChat, "Moderation → process → check chain", "Python modules"),
  d("JSON schemas / structured output", L.openaiApi, "Force JSON for a farm record", "Validate with Pydantic"),
  d("Idempotent pipelines", L.sysChat, "Retry + log every call", "logs/jsonl"),
  d("Cost and token counting", L.openaiApi, "Print tokens per call", "Budget.md"),
  d("Friday: system diagram", L.sysChat, "Boxes in README", "Push"),
]);
add(35, 9, "llm", "Hugging Face LLM course start", "Open models exist.", [
  d("HF LLM course unit 1", L.hfCourse, "Run a small local or API model", "Document hardware: CPU is OK with tiny models"),
  d("Decoder vs encoder vs seq2seq", L.hfCourse, "One page map", "When to use which"),
  d("Tokenizers for LLMs", L.hfCourse, "Compare 2 tokenizers on Latvian text", "Unknown token behavior"),
  d("Generation configs", L.transformers, "greedy vs sample vs beam", "samples.md"),
  d("Friday: gen playground CLI", L.hfCourse, "python generate.py --temp", "Push"),
]);
add(36, 9, "llm", "More HF course", "Fine-tune vs retrieve.", [
  d("HF LLM course — fine-tune chapter", L.hfCourse, "LoRA teaser even if PEFT later", "Notes"),
  d("Instruction vs base models", L.hfCourse, "Same prompt on both if possible", "Write the difference"),
  d("Chat templates", L.transformers, "apply_chat_template correctly", "Don't double BOS"),
  d("Safety: refusals", L.prompt, "Jailbreak your own prompt, then patch", "Keep it ethical — your model only"),
  d("Friday: model choice note", L.hfCourse, "What you will use for RAG (API vs local)", "Push"),
]);
add(37, 10, "llm", "LangChain as glue — carefully", "Learn it, don't drown in it.", [
  d("LangChain for LLM app development", L.lcDev, "Rebuild course in your repo", "Thin wrappers"),
  d("LangChain tutorials official", L.langchain, "LCEL chain: prompt | model | parser", "One file"),
  d("Tools: calculator + time", L.langchain, "Bind tools, print calls", "No hidden magic"),
  d("Memory — what to store", L.langchain, "Buffer vs summary", "Privacy note"),
  d("Friday: langchain-min repo", L.lcDev, "README with less magic", "Push"),
]);
add(38, 10, "llm", "RAG foundations", "Search then generate.", [
  d("LlamaIndex starter", L.llamaindex, "Index a folder of your lecture notes", "Query 5 questions"),
  d("Chroma introduction", L.chroma, "Same docs in Chroma", "Persist directory"),
  d("Chunking experiments", L.zoomcamp, "3 chunk sizes, 3 overlaps", "Which answers better?"),
  d("Citations", L.llamaindex, "Always return source paths", "Fail if missing"),
  d("Friday: rag-v0", L.chroma, "CLI rag.py \"question\"", "Push"),
]);
add(39, 10, "llm", "Better RAG", "Hybrid, rerank, fail closed.", [
  d("Building & evaluating advanced RAG", L.ragEval, "Sentence-window or auto-merge notes", "Implement one idea"),
  d("RAGAS docs", L.ragas, "Faithfulness + relevancy on 15 Qs", "Table"),
  d("Hybrid search notes (zoomcamp)", L.zoomcamp, "Keyword + vector", "Even a simple keyword prefilter"),
  d("Hard negatives / bad retrieval log", L.ragEval, "10 failed questions", "failures.md"),
  d("Friday: eval in CI mindset", L.ragas, "python eval.py writes csv", "Push"),
]);
add(40, 10, "llm", "Ship RAG API", "Project Document RAG with evals.", [
  d("FastAPI for RAG", L.fastapi, "/ask returns answer+sources+scores", "Pydantic"),
  d("LLM Zoomcamp relevant week", L.zoomcamp, "Steal one production idea", "Attribute it"),
  d("pytest golden questions", L.pytest, "5 questions must cite the right file", "CI"),
  d("README with eval table", L.ragas, "Honest scores", "Limitations: languages, stale docs"),
  d("Friday: tag rag-v1", L.zoomcamp, "Project RAG done", "Push"),
]);
add(41, 11, "llm", "Agents 1 — tools", "An LLM that can act.", [
  d("LangGraph short course start", L.langgraph, "One node graph: model", "Run it"),
  d("Tool node", L.langgraph, "Search or calculator tool", "Trace printed"),
  d("LangChain tools tutorial", L.langchain, "Custom tool: crop_price(mock)", "Typed args"),
  d("Guard: max steps", L.langgraph, "Loop protection", "Test infinite planner"),
  d("Friday: traces.md", L.langgraph, "3 successful traces", "Push"),
]);
add(42, 11, "llm", "Agents 2 — memory and state", "State is the product.", [
  d("LangGraph state and memory", L.langgraph, "Thread id per user", "local sqlite or json"),
  d("Human in the loop idea", L.langgraph, "Approve before a 'send email' mock", "interrupt"),
  d("Streaming tokens", L.fastapi, "SSE or chunked /ask", "Minimal UI later"),
  d("Eval agents with golden tasks", L.evals, "10 tasks pass/fail", "Don't demo-only"),
  d("Friday: agent-v0", L.langgraph, "README architecture", "Push"),
]);
add(43, 11, "llm", "Multi-agent", "Router, worker, critic.", [
  d("LangGraph multi-actor", L.langgraph, "Researcher + writer + critic", "Shared state"),
  d("When NOT to multi-agent", L.prompt, "Write a rant, then a rule", "Single agent first"),
  d("Critic prompts", L.prompt, "Checklist critic", "Reject empty citations"),
  d("Cost of multi-agent", L.openaiApi, "Log tokens per role", "Budget"),
  d("Friday: diagram of graph", L.langgraph, "mermaid in README (as text is fine)", "Push"),
]);
add(44, 11, "llm", "Chatbot product", "UX is part of AI engineering.", [
  d("Building systems course recap", L.sysChat, "Session, history, reset", "API"),
  d("FastAPI websocket or simple POST loop", L.fastapi, "chat.html minimal", "No framework maze"),
  d("Memory summary every N turns", L.langchain, "Store summary + last 6", "Privacy: local only"),
  d("Empty states and errors", L.fastapi, "Model down → honest message", "Never hang"),
  d("Friday: chatbot-v0 tagged", L.sysChat, "Usable by a friend", "Push"),
]);
add(45, 12, "llm", "Zoomcamp production patterns", "Steal from people who ship.", [
  d("LLM Zoomcamp repo overview", L.zoomcamp, "Replicate one homework", "Your data"),
  d("Monitoring idea", L.mlopsOrg, "Log latency, tokens, user feedback thumbs", "jsonl"),
  d("Offline vs online eval", L.ragas, "Weekly golden set", "script"),
  d("Prompt versioning", L.prompt, "prompts/v1 v2 with changelog", "Never edit silently"),
  d("Friday: ops notes", L.zoomcamp, "OPS.md", "Push"),
]);
add(46, 12, "llm", "Retrieval quality", "Most 'agent' failures are search.", [
  d("Chunking again with real notes", L.chroma, "Heading-aware chunks", "Don't split mid-table"),
  d("Metadata filters", L.chroma, "Filter by course year", "Query API"),
  d("Rerank conceptually", L.ragEval, "Score with a cross-encoder or LLM judge", "Top 20 → top 5"),
  d("Multilingual: Latvian + English", L.hfCourse, "Test both", "Document failure"),
  d("Friday: retrieval.md", L.chroma, "Before/after examples", "Push"),
]);
add(47, 12, "llm", "Structured extraction", "AI as intern data-entry.", [
  d("OpenAI structured outputs", L.openaiApi, "Extract farm records from prose", "Pydantic"),
  d("Validation loops", L.pydantic, "If invalid, repair once", "Then fail"),
  d("Batch extraction", L.openaiApi, "20 docs", "CSV out"),
  d("Human review queue mock", L.fastapi, "/review mismatches", "Simple list"),
  d("Friday: extractor-v0", L.pydantic, "README + sample csv", "Push"),
]);
add(48, 12, "llm", "Mid-year 1 exam of skill", "Build in 5 days without new tutorials.", [
  d("Pick a small app: lecture Q&A", L.zoomcamp, "Spec in SPEC.md", "Scope tiny"),
  d("Implement retrieval", L.chroma, "Working search", "No UI polish yet"),
  d("Implement generate + cite", L.fastapi, "API", "Tests"),
  d("Eval 15 questions", L.ragas, "Table", "Fix top issue"),
  d("Friday: freeze midyear app", L.gitHubGit, "Tag midyear", "Push"),
]);
add(49, 13, "llm", "Fine-tune vs RAG decision", "Most problems want RAG.", [
  d("PEFT conceptual intro", L.peft, "Write decision tree: RAG / FT / prompt", "DECISIONS.md"),
  d("HF course fine-tune recap", L.hfCourse, "Tiny LoRA on a toy intent set", "CPU or free colab — document"),
  d("Data for FT: 200 examples you wrote", L.datasets, "jsonl instructions", "Quality > size"),
  d("Eval FT vs base vs RAG", L.ragas, "Same 15 Qs", "Table — usually RAG wins for facts"),
  d("Friday: decision recorded", L.peft, "Don't FT trivia into weights", "Push"),
]);
add(50, 13, "llm", "Tool-using agent project", "Project bar: 10 golden tasks.", [
  d("LangGraph course remaining", L.langgraph, "Finalize graph", "Draw it"),
  d("Tools: files, calc, notes search", L.langchain, "Each tool unit-tested", "No silent fail"),
  d("Golden tasks 1–5", L.evals, "Must pass", "Record traces"),
  d("Golden tasks 6–10 + adversarial", L.evals, "2 expected failures documented", "Honesty"),
  d("Friday: tag agent-v1", L.langgraph, "Project tool-using agent done", "Push"),
]);
add(51, 13, "llm", "Product polish", "Hiring managers click once.", [
  d("README cinema", L.gitHubGit, "GIF or detailed DEMO.md", "2-minute path"),
  d("Architecture section", L.systemDesign, "Data flow, failure modes", "One diagram"),
  d("Tests you would not be ashamed of", L.pytest, "Unit + 3 API", "CI instruction"),
  d("License + credits for models", L.hfHub, "MODEL licenses listed", "Required"),
  d("Friday: profile README links", L.gitHubGit, "Pin RAG + agent", "Push"),
]);
add(52, 13, "llm", "Phase 3 gate", "You are an LLM engineer in training.", [
  d("Re-run RAG evals", L.ragas, "Catch rot", "Fix or document"),
  d("Re-run agent goldens", L.langgraph, "Catch rot", "Fix"),
  d("Write a 1-page 'what I build'", L.gitHubGit, "For applications later", "no buzzwords"),
  d("Read OWASP LLM top 10 once", L.owaspLlm, "Notes for phase 4", "Don't implement all yet"),
  d("phase-3-done", L.zoomcamp, "LEARNING.md months 9–13", "Tag"),
]);

// ——— Phase 4 production 53–72 ———
add(53, 14, "prod", "MLOps map", "The job behind the notebook.", [
  d("MLOps.org principles", L.mlopsOrg, "Map your RAG to the diagram", "What's missing"),
  d("ML Engineering for Production — course 1 start", L.mlops, "Notes: data/model/serving", "Don't binge — 1 module"),
  d("MLflow intro", L.mlflow, "Log params and metrics of a sklearn run", "UI locally"),
  d("Experiment vs production folders", L.mlopsOrg, "Repo layout rfc", "LAYOUT.md"),
  d("Friday: MLOps glossary", L.mlops, "20 terms in your words", "Push"),
]);
add(54, 14, "prod", "Data and model registries", "Names and versions.", [
  d("MLflow models", L.mlflow, "Register the tabular model", "Stage staging"),
  d("Dataset versioning idea", L.datasets, "Hash or date your RAG corpus", "versions.md"),
  d("Config as code", L.pydantic, "pydantic-settings for the API", "No scattered os.environ"),
  d("CI: test + eval smoke", L.pytest, "GitHub Actions yaml or just documented", "Keep it simple"),
  d("Friday: version everything", L.mlflow, "MODEL_VERSION in /health", "Push"),
]);
add(55, 14, "prod", "Serving", "Latency is a feature.", [
  d("FastAPI production notes", L.fastapi, "gunicorn/uvicorn workers notes", "Don't cargo-cult"),
  d("Docker health and limits", L.docker, "Healthcheck + memory note", "README"),
  d("Batch vs interactive", L.mlopsOrg, "Write when to batch", "Your agent is interactive"),
  d("Timeouts and cancellation", L.fastapi, "LLM client timeout", "Test it"),
  d("Friday: /metrics stub", L.fastapi, "count requests, errors, latency_ms", "Push"),
]);
add(56, 14, "prod", "Observability", "If you can't see it, you don't run it.", [
  d("MLOps monitoring chapter/notes", L.mlops, "Data drift vs concept drift in words", "For LLMs: prompt/output drift"),
  d("Log traces for agents", L.langgraph, "Structured jsonl", "request_id"),
  d("User feedback", L.fastapi, "POST /feedback thumbs", "Store"),
  d("Weekly eval job script", L.ragas, "cron documented", "Not necessarily scheduled yet"),
  d("Friday: OBS.md", L.mlopsOrg, "What you watch every week", "Push"),
]);
add(57, 15, "prod", "LLM infrastructure", "The factory.", [
  d("vLLM docs — what continuous batching is", L.vllm, "Notes even if you can't run GPU", "ARCHITECTURE-vllm.md"),
  d("Quantization intuition", L.hfCourse, "8-bit / 4-bit meaning", "Quality vs speed table from docs"),
  d("HF generation performance", L.transformers, "KV cache in one paragraph", "Write it"),
  d("API gateway pattern", L.fastapi, "One /v1/chat/completions-shaped endpoint", "Adapter over provider"),
  d("Friday: infra decision", L.vllm, "Local tiny vs hosted API for your budget", "Push"),
]);
add(58, 15, "prod", "LoRA fine-tune for real", "Small model, domain data.", [
  d("PEFT LoRA docs", L.peft, "Train LoRA on your 200+ examples", "CPU/colab/kaggle — document hardware"),
  d("TRL notes", L.trl, "SFTTrainer path or hand loop", "Loss curve"),
  d("Before/after samples", L.peft, "15 prompts", "samples.md"),
  d("Merge vs adapter at runtime", L.peft, "Document how you serve", "README"),
  d("Friday: lora-v0", L.peft, "Limitations listed", "Push"),
]);
add(59, 15, "prod", "Serve the adapter", "Project: served LoRA path.", [
  d("vLLM LoRA or transformers generate API", L.vllm, "If no GPU: transformers + bitsandbytes notes or llama.cpp docs in README", "Honesty about hardware"),
  d("Latency budget", L.fastapi, "Measure tokens/sec if possible", "Else estimate"),
  d("A/B base vs LoRA", L.peft, "Same prompts", "Table"),
  d("Docker story", L.docker, "GPU optional documented", "CPU fallback"),
  d("Friday: tag serve-lora", L.vllm, "Project served LoRA done", "Push"),
]);
add(60, 15, "prod", "Cost and capacity", "Companies hire people who can count.", [
  d("OpenAI pricing pages / token economics", L.openaiApi, "Spreadsheet of 1k users", "cost.csv"),
  d("Caching prompts", L.prompt, "Prefix cache idea", "Notes"),
  d("Rate limits and queues", L.fastapi, "Simple semaphore", "Test"),
  d("Batch extraction jobs", L.openaiApi, "Backfill 100 docs", "Script"),
  d("Friday: COST.md", L.vllm, "Your app's unit economics", "Push"),
]);
add(61, 16, "prod", "Orchestration quality", "Agents that fail closed.", [
  d("LangGraph persistence", L.langgraph, "Resume a thread", "Crash test"),
  d("Idempotent tools", L.langchain, "Same tool twice = safe", "Test"),
  d("Schema for tool errors", L.pydantic, "Tools return {ok, data, error}", "Model can recover"),
  d("Eval harness for graphs", L.evals, "Golden + step traces", "Don't only check final string"),
  d("Friday: orchestration.md", L.langgraph, "Failure modes list", "Push"),
]);
add(62, 16, "prod", "Multi-agent product slice", "One workflow, end to end.", [
  d("Pick: lecture → notes → quiz agent", L.langgraph, "SPEC.md", "Tiny"),
  d("Implement 3 nodes", L.langgraph, "Working path", "Traces"),
  d("Evals 8 tasks", L.evals, "Pass bar 6/8", "Document 2 fails"),
  d("API + minimal UI", L.fastapi, "One page", "Ship"),
  d("Friday: workflow-v1", L.langgraph, "README demo", "Push"),
]);
add(63, 16, "prod", "Streaming, UX, reliability", "Feels like a product.", [
  d("Streaming tokens FastAPI", L.fastapi, "Token stream to the page", "Works"),
  d("Cancel button semantics", L.fastapi, "Abort generation", "Don't bill extra if you can"),
  d("Partial failure: retrieval empty", L.chroma, "Say I don't know", "Test"),
  d("Load test lite", L.fastapi, "20 sequential requests timed", "Notes"),
  d("Friday: UX.md", L.fastapi, "Empty, loading, error, success", "Push"),
]);
add(64, 16, "prod", "System design for AI apps", "Interviews will ask this.", [
  d("System design primer — skim relevant", L.systemDesign, "Design a RAG chat for 10k students", "Write 1 page"),
  d("Queues, retries, DLQ", L.mlopsOrg, "Where you'd put Redis later", "Don't implement Redis yet"),
  d("Auth later vs now", L.fastapi, "Local-only is fine; document threat model", "THREAT.md"),
  d("Multi-tenant data isolation notes", L.chroma, "metadata user_id filters", "Never mix corpora"),
  d("Friday: design doc v1", L.systemDesign, "Keep it boring", "Push"),
]);
add(65, 17, "prod", "OWASP LLM Top 10", "Security is a specialization.", [
  d("OWASP Top 10 for LLM apps", L.owaspLlm, "Map each item to your chatbot", "table"),
  d("Prompt injection lab on YOUR app", L.owaspLlm, "5 attacks, record outputs", "ethical: own system"),
  d("System prompt leaking", L.prompt, "Try to extract, then harden", "Minimize secrets in prompts"),
  d("Excessive agency", L.owaspLlm, "Remove dangerous tools", "Allowlist"),
  d("Friday: ATTACKS.md part 1", L.owaspLlm, "Raw outputs saved", "Push"),
]);
add(66, 17, "prod", "Guardrails and defense", "Prove they work.", [
  d("OWASP mitigation notes", L.owaspLlm, "Input filter + output filter", "Simple classifiers or rules"),
  d("Re-run the 5 attacks", L.owaspLlm, "Before/after table", "Honest remaining holes"),
  d("Secrets and supply chain", L.gitHubGit, "No keys in repo — scan", "gitleaks mindset"),
  d("PII in logs", L.mlopsOrg, "Redact emails in jsonl", "Script"),
  d("Friday: security lab tagged", L.owaspLlm, "Project AI security lab", "Push"),
]);
add(67, 17, "prod", "Evals as a product", "The new unit tests.", [
  d("openai/evals concept", L.evals, "Write 2 custom evals", "JSON spec"),
  d("LLM-as-judge pitfalls", L.ragas, "Agreement on 20 items you labeled", "Don't trust judge blindly"),
  d("Regression evals on every prompt change", L.pytest, "Fail CI if faithfulness drops", "Script"),
  d("Red team eval set", L.owaspLlm, "20 malicious prompts", "Must refuse"),
  d("Friday: eval suite in README", L.evals, "How to run", "Push"),
]);
add(68, 17, "prod", "Reliability engineering", "On-call thinking without the pager yet.", [
  d("MLOps production course module on deploy", L.mlops, "Blue/green in words", "For your API"),
  d("Feature flags for prompts", L.fastapi, "PROMPT_VERSION env", "Switch"),
  d("Dead-letter of failed jobs", L.mlopsOrg, "failed/ folder", "Replay script"),
  d("Runbooks", L.mlops, "RUNBOOK.md: model down, bad deploy, cost spike", "One page"),
  d("Friday: you run a system", L.mlops, "Tag ops-v1", "Push"),
]);
add(69, 18, "prod", "Deepen one track: MLOps", "Choose a primary, keep others literate.", [
  d("MLflow projects / recipes skim", L.mlflow, "Reproduce tabular train via one command", "Working"),
  d("Data validation idea", L.pandas, "Great expectations mindset: 8 checks", "assert in code"),
  d("Model decay", L.mlopsOrg, "What would rot on your RAG corpus", "Calendar reminder in OPS.md"),
  d("CI matrix", L.pytest, "lint + unit + eval-smoke", "Document"),
  d("Friday: MLOps track note", L.mlops, "TRACK.md primary=mlops or not", "Push"),
]);
add(70, 18, "prod", "Deepen LLM infra", "Even on CPU, know the words.", [
  d("vLLM advanced: paged attention page", L.vllm, "Explain like a teammate", "1 page"),
  d("Speculative decoding skim", L.vllm, "Notes", "Optional"),
  d("Tokenizer fast path", L.transformers, "Batch tokenize", "Script"),
  d("Gateway: many models one API", L.fastapi, "model= name routing", "Two fake backends"),
  d("Friday: infra-track", L.vllm, "Update TRACK.md", "Push"),
]);
add(71, 18, "prod", "Deepen agents", "Orchestration as a discipline.", [
  d("LangGraph durable execution docs/course recap", L.langgraph, "Crash-safe workflow", "Test kill -9 mid-run if you can"),
  d("Tool sandboxing notes", L.owaspLlm, "No raw shell for the LLM", "Allowlist"),
  d("Planner evals", L.evals, "Did it pick the right tool?", "Metric"),
  d("Memory poisoning", L.owaspLlm, "Attack memory, then isolate", "Test"),
  d("Friday: agents-track", L.langgraph, "TRACK.md", "Push"),
]);
add(72, 18, "prod", "Phase 4 gate", "Production-literate.", [
  d("Re-read OWASP list", L.owaspLlm, "Score your apps 0–2 each item", "table"),
  d("Re-read COST.md and OBS.md", L.mlopsOrg, "Update numbers", "Honest"),
  d("Pin repos: rag, agent, lora/serve, security", L.gitHubGit, "4 pins", "Profile"),
  d("Write specialization paragraph", L.gitHubGit, "Primary track + why", "for applications"),
  d("phase-4-done", L.mlops, "LEARNING.md months 14–18", "Tag"),
]);

// ——— Phase 5 capstone 73–96 ———
add(73, 19, "capstone", "Flagship spec", "One product, ruthless scope.", [
  d("System design primer warmup", L.systemDesign, "SPEC.md: user, job-to-be-done, non-goals", "One week to spec is allowed"),
  d("Architecture v0", L.zoomcamp, "Components + data stores", "Boring tech"),
  d("Eval plan first", L.ragas, "How you will know it works", "15 goldens"),
  d("Threat model one page", L.owaspLlm, "THREAT.md", "From phase 4"),
  d("Friday: spec freeze", L.gitHubGit, "No extra features for 6 weeks", "Push"),
]);
add(74, 19, "capstone", "Flagship vertical slice", "A thin path that works.", [
  d("Implement retrieval or core model path", L.chroma, "Working on 1 document set", "Demo to yourself"),
  d("API contract", L.fastapi, "OpenAPI", "Frozen fields"),
  d("Minimal UI", L.fastapi, "Ugly is fine, usable", "One HTML"),
  d("3 goldens pass", L.evals, "CI", "Keep going"),
  d("Friday: slice recorded", L.gitHubGit, "DEMO.md updated", "Push"),
]);
add(75, 19, "capstone", "Flagship depth", "Quality, not features.", [
  d("Error analysis week", L.ragas, "20 real questions", "Fix chunking or prompts"),
  d("Citations and I don't know", L.prompt, "Never invent sources", "Tests"),
  d("Latency pass", L.fastapi, "Measure p50/p95 locally", "notes"),
  d("Logging pass", L.mlflow, "request_id through the stack", "Works"),
  d("Friday: quality log", L.gitHubGit, "what improved", "Push"),
]);
add(76, 19, "capstone", "Flagship harden", "The boring week that gets you hired.", [
  d("Tests to 20", L.pytest, "Unit + API + 1 e2e script", "Green"),
  d("Docker compose", L.docker, "One command up", "README"),
  d("Security checklist", L.owaspLlm, "Re-attack", "Patch"),
  d("README hiring-manager pass", L.gitHubGit, "Problem, demo, architecture, evals, limits", "No hype"),
  d("Friday: flagship-v1", L.gitHubGit, "Tag", "Push"),
]);
add(77, 20, "capstone", "Flagship v1.1", "One sharp extra, not ten.", [
  d("User-requested feature you actually need", L.fastapi, "Ship it", "Eval still green"),
  d("Streaming if missing", L.fastapi, "Tokens on screen", "Works"),
  d("Feedback loop", L.fastapi, "Thumbs stored", "Weekly review note"),
  d("Corpus update playbook", L.chroma, "How to add a PDF", "docs"),
  d("Friday: v1.1", L.gitHubGit, "Changelog", "Push"),
]);
add(78, 20, "capstone", "Second system or deepen", "Breadth if flagship is solid.", [
  d("Decide: second app vs deepen flagship", L.gitHubGit, "Write the decision", "Don't collect toys"),
  d("If second: spec 1 page", L.systemDesign, "Even smaller", "or skip to deepen evals"),
  d("Implement 2 days of core", L.langgraph, "or improve agent graph on flagship", "Working"),
  d("Evals", L.evals, "Goldens", "Table"),
  d("Friday: status", L.gitHubGit, "Honest", "Push"),
]);
add(79, 20, "capstone", "Writing like an engineer", "Papers and posts.", [
  d("Read one paper from your stack on Papers with Code", L.papers, "One-page summary in your words", "No plagiarism"),
  d("Attention paper figures again", L.attention, "Teach-back", "To LEARNING.md"),
  d("Blog: how I eval RAG", L.gitHubGit, "800 words in repo /docs", "Show tables"),
  d("Blog: failure story", L.gitHubGit, "A bug that taught you", "Humility"),
  d("Friday: two posts linked from profile", L.gitHubGit, "URLs in README", "Push"),
]);
add(80, 20, "capstone", "Flagship project bar", "Project Flagship product.", [
  d("Record DEMO.md as if a video script", L.gitHubGit, "90 seconds", "Tight"),
  d("Architecture PNG or mermaid text", L.systemDesign, "In README", "Clear"),
  d("License, model cards, data cards", L.hfHub, "Complete", "Legal-ish hygiene"),
  d("Ask a friend to follow README only", L.gitHubGit, "Fix the first 3 confusions", "UX"),
  d("Friday: tag flagship", L.gitHubGit, "This is the one you send", "Push"),
]);
add(81, 21, "capstone", "Algorithms for interviews", "You still need this.", [
  d("Neetcode roadmap start — arrays", L.leetcode, "5 problems timed", "Write patterns.md"),
  d("Hash maps / two pointers", L.leetcode, "5 problems", "Solutions in repo interviews/"),
  d("Sliding window / stacks", L.leetcode, "5 problems", "Patterns"),
  d("Trees / BFS DFS", L.leetcode, "5 problems", "Draw first"),
  d("Friday: 20 problems logged", L.leetcode, "Don't lie about time", "Push"),
]);
add(82, 21, "capstone", "More DS&A + Python", "University algorithms class helps — prove it in code.", [
  d("Heaps / intervals", L.leetcode, "5 problems", "Notes"),
  d("Graphs", L.leetcode, "5 problems", "BFS/DFS templates"),
  d("DP lite", L.leetcode, "3 problems only", "Don't drown"),
  d("Implement LRU or trie", L.leetcode, "From scratch", "Test"),
  d("Friday: templates.md", L.leetcode, "Your snippets", "Push"),
]);
add(83, 21, "capstone", "ML / LLM interview questions", "Talk like you built it.", [
  d("Rehearse backprop 5 minutes out loud", L.b1bnn, "Record notes of stumbles", "Fix"),
  d("Bias/variance, leakage, metrics", L.ng, "Cheat sheet from memory", "Then check"),
  d("Design a RAG system on a whiteboard", L.systemDesign, "Write the talk track", "Latency, evals, fail closed"),
  d("Design an agent safely", L.owaspLlm, "Tools, sandbox, human in loop", "Talk track"),
  d("Friday: interview/answers.md", L.systemDesign, "Not memorized essays — bullets", "Push"),
]);
add(84, 21, "capstone", "System design interviews", "AI + backend.", [
  d("Primer: unique IDs, storage, caches", L.systemDesign, "Notes", "Relate to your API"),
  d("Design ChatGPT-like (tiny)", L.systemDesign, "Gateway, queues, KV, GPU pool", "1 page"),
  d("Design recommendation or ranking", L.sklearn, "Online/offline", "1 page"),
  d("Tradeoff drills", L.systemDesign, "SQL vs vector DB vs files", "Your flagship"),
  d("Friday: 3 designs in repo", L.systemDesign, "interview/designs", "Push"),
]);
add(85, 22, "capstone", "Open source", "Visible work with others.", [
  d("Find a good first issue in a tool you use", L.langchain, "Read contributing.md", "Don't spam"),
  d("Reproduce a bug or docs typo", L.hfCourse, "Tiny PR or docs PR", "Quality"),
  d("Read a mature codebase 1 hour", L.transformers, "Map modules", "NOTES"),
  d("Improve YOUR docs from OSS lessons", L.gitHubGit, "Issue templates maybe", "Nice"),
  d("Friday: link the PR or the attempt", L.gitHubGit, "Honesty if not merged", "Push"),
]);
add(86, 22, "capstone", "Polish all pinned repos", "Five-star hygiene.", [
  d("Clone your profile as a stranger", L.gitHubGit, "Fix broken READMEs", "All pins"),
  d("Delete or archive junk", L.gitHubGit, "Signal not noise", "Archive"),
  d("English pass", L.gitHubGit, "Clear simple sentences", "No hype"),
  d("Pin order: flagship, RAG, agent, serve, API", L.gitHubGit, "Matches story", "Done"),
  d("Friday: profile screenshot in LEARNING.md", L.gitHubGit, "This is your storefront", "Push"),
]);
add(87, 22, "capstone", "Papers that matter", "Taste.", [
  d("Attention is all you need — methods skim", L.attention, "What you still don't get", "List"),
  d("One RAG survey or LlamaIndex blog + a paper", L.papers, "Notes", "How it differs from you"),
  d("One agent paper (ReAct or similar via PwC)", L.papers, "Notes", "vs LangGraph"),
  d("One systems paper or vLLM blog/docs", L.vllm, "Notes", "Batching"),
  d("Friday: papers/ four summaries", L.papers, "Your words", "Push"),
]);
add(88, 22, "capstone", "Teach to learn", "If you can teach it, you own it.", [
  d("Write a tutorial: your first FastAPI+model", L.fastapi, "For a student like you last year", "docs/teach"),
  d("Write: RAG eval in practice", L.ragas, "With your numbers", "docs/teach"),
  d("Write: prompt injection on my bot", L.owaspLlm, "Responsible disclosure style", "docs/teach"),
  d("Record outline of a 10-min talk", L.gitHubGit, "Talk.md", "University meetup maybe"),
  d("Friday: teaching index", L.gitHubGit, "Links on profile", "Push"),
]);
add(89, 23, "capstone", "Mock interviews", "Mouth + keyboard.", [
  d("Neetcode 4 timed mediums", L.leetcode, "40 min", "Review solutions after"),
  d("Explain your flagship out loud", L.gitHubGit, "Script then no script", "Record stumbles"),
  d("ML deep dive mock", L.ng, "They challenge your metric", "Defend"),
  d("Behavioral: farm → Riga → foundry", L.gitHubGit, "3 stories: conflict, failure, leadership", "True"),
  d("Friday: mock log", L.leetcode, "What broke", "Push"),
]);
add(90, 23, "capstone", "More mocks + gaps", "Fill holes.", [
  d("Weak DS&A topic", L.leetcode, "5 problems", "That topic"),
  d("Weak ML topic", L.d2l, "Relearn one chapter", "Code it"),
  d("Weak systems topic", L.systemDesign, "Re-design with numbers", "Back of envelope"),
  d("Weak security topic", L.owaspLlm, "New attack, patch", "Log"),
  d("Friday: gap list shrinking", L.gitHubGit, "3 gaps left", "Push"),
]);
add(91, 23, "capstone", "Company literacy", "xAI, OpenAI, Tesla-shaped work.", [
  d("Read engineering blogs / papers from labs (via Papers with Code filter)", L.papers, "What they optimize", "Notes — no leaking secrets, public only"),
  d("vLLM + serving is Tesla-adjacent industrial", L.vllm, "Write why reliability > demo", "page"),
  d("Agents + tools is product lab work", L.langgraph, "Write reliability bar", "page"),
  d("Autograd roots (Karpathy) still asked", L.karpathy, "Re-derive a graph", "From memory"),
  d("Friday: target roles list", L.gitHubGit, "ML infra / LLM eng / applied", "Not 'AI anything'"),
]);
add(92, 23, "capstone", "Applications packet", "The artifacts.", [
  d("CV one page", L.gitHubGit, "cv.md — impact bullets from projects", "Numbers"),
  d("GitHub profile README", L.gitHubGit, "Who you are, what to click", "Farm origin is a strength"),
  d("Email / message templates", L.gitHubGit, "Short, specific, one link", "No novel"),
  d("List 20 companies/labs", L.gitHubGit, "Not only the three logos", "EU + US remote realism"),
  d("Friday: packet folder", L.gitHubGit, "applications/", "Push"),
]);
add(93, 24, "capstone", "Apply while building", "Don't wait to be perfect.", [
  d("Send 3 thoughtful applications", L.gitHubGit, "Log in applications/log.csv", "Specific work cited"),
  d("Improve flagship from a rejection hypothetical", L.ragas, "One eval better", "Ship"),
  d("3 more applications", L.gitHubGit, "Log", "Iterate message"),
  d("Public learning log excerpt", L.gitHubGit, "2-year graph of tags", "Story"),
  d("Friday: pipeline live", L.gitHubGit, "You are in motion", "Push"),
]);
add(94, 24, "capstone", "Interview loops", "Treat them as another eval set.", [
  d("Post-mortem a practice loop", L.leetcode, "Scoring rubric for yourself", "Code, ML, design, behavioral"),
  d("Redo weakest system design", L.systemDesign, "New one-pager", "Numbers"),
  d("Redo weakest coding pattern", L.leetcode, "5 problems", "Timed"),
  d("Flagship live demo rehearsal", L.fastapi, "Failure injection", "Wifi down story"),
  d("Friday: loop-ready checklist", L.gitHubGit, "Yes/no", "Push"),
]);
add(95, 24, "capstone", "Offer-level polish", "Calm professional.", [
  d("All pins reviewed", L.gitHubGit, "Licenses, dead links", "Fix"),
  d("Security pass on public repos", L.owaspLlm, "No keys, no private data", "Scan"),
  d("LEARNING.md final index", L.gitHubGit, "96 weeks compressed to 2 pages", "Story"),
  d("Thank-you notes to mentors/friends", L.gitHubGit, "Not a repo task — do it anyway", "People"),
  d("Friday: freeze public story", L.gitHubGit, "This is you", "Push"),
]);
add(96, 24, "capstone", "Phase 5 gate — foundry open", "You can train, ship, and explain.", [
  d("Re-run flagship evals", L.ragas, "Still green?", "Fix rot"),
  d("Re-run agent goldens if separate", L.langgraph, "Green?", "Fix"),
  d("Read your week 1 LEARNING.md", L.gitHubGit, "Write a letter to week-1 you", "Keep it"),
  d("Plan the next 90 days of work", L.mlopsOrg, "Job or master's or product", "Written"),
  d("phase-5-done — two years", L.gitHubGit, "Tag foundry-complete", "You did not skip Friday pushes"),
]);

if (weeks.length !== 96) {
  console.error("expected 96 weeks, got", weeks.length);
  process.exit(1);
}

function dumpDay(d) {
  const extra = d.extraHref
    ? `, extraHref: ${d.extraHref}, extraLabel: ${JSON.stringify(d.extraLabel)}`
    : "";
  return `    { l: ${JSON.stringify(d.l)}, href: ${d.href}, b: ${JSON.stringify(d.b)}, t: ${JSON.stringify(d.t)}${extra} }`;
}

const body = weeks
  .map((w) => {
    const hint = w.projectHint ? `, ${JSON.stringify(w.projectHint)}` : "";
    return `  W(${w.id}, ${w.month}, ${JSON.stringify(w.phaseId)}, ${JSON.stringify(w.title)}, ${JSON.stringify(w.goal)}, [\n${w.days.map(dumpDay).join(",\n")}\n  ]${hint})`;
  })
  .join(",\n");

const file = `import { L } from "./links";
import { W } from "./week";
import type { WeekPlan } from "./types";

export const WEEKS: WeekPlan[] = [
${body}
];

export function weekById(id: number) {
  return WEEKS.find((w) => w.id === id);
}

export const TOTAL_DAYS = WEEKS.length * 5;
`;

writeFileSync("/workspace/src/lib/curriculum/weeks.ts", file);
console.log("wrote", weeks.length, "weeks");
