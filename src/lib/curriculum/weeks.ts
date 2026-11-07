import { L } from "./links";
import { W } from "./week";
import type { WeekPlan } from "./types";

export const WEEKS: WeekPlan[] = [
  W(1, 1, "craft", "Interpreter and first scripts", "Install Python, write tiny programs, open a public repo.", [
    { l: "Python tutorial: appetite + interpreter + informal intro", href: L.pyTut, b: "Install Python 3.12+ and open ai-journey", t: "Install Python|Create GitHub repo ai-journey|Write calculator.py|Write hello_name.py|First commit", extraHref: L.pyFirst, extraLabel: "First steps" },
    { l: "Control flow: if, for, while, range", href: L.pyTut, b: "To-do list that saves to a text file", t: "Read tutorial §4|Write todo.py with add/list/done|Handle bad input|Commit with a clear message" },
    { l: "Data structures: lists, dicts, tuples, sets", href: L.pyTut, b: "Word-count a local text file", t: "Download a public-domain text|Count words and top 20|Print a small report|Commit" },
    { l: "Functions, modules, and virtual environments", href: L.uv, b: "Package your scripts as a tiny module", t: "Install uv|Create a venv|Move helpers into lib.py|Add README how to run" },
    { l: "Git basics and GitHub flow", href: L.gitHubGit, b: "Friday ship: README + history", t: "Write a 15-line README|git log --oneline|Push to GitHub|Write 5 lines in LEARNING.md", extraHref: L.gitBook, extraLabel: "Pro Git" }
  ]),
  W(2, 1, "craft", "Clean Python", "Write readable functions, errors, and tests.", [
    { l: "Google's Python class — intro + strings", href: L.pyGoogle, b: "String clinic: parse a messy farm log", t: "Split messy lines|Normalize dates|Print a table|Tests for 3 cases" },
    { l: "Files, JSON, and pathlib", href: L.pyTut, b: "JSON journal CLI", t: "Append entries with timestamps|List last 5|Search by word|Commit" },
    { l: "Exceptions and debugging", href: L.pyTut, b: "Make the CLI never crash on bad input", t: "try/except on file IO|Validate empty input|Print useful errors" },
    { l: "pytest getting started", href: L.pytest, b: "Add tests for journal CLI", t: "Install pytest|Write 5 tests|Make them pass|Show pytest output in README" },
    { l: "Code review yourself", href: L.gitBook, b: "Friday polish", t: "Rename sloppy files|Delete dead code|Push|LEARNING.md 5 lines" }
  ]),
  W(3, 1, "craft", "HTTP and FastAPI first app", "Expose a Python function as an API.", [
    { l: "HTTP overview (MDN)", href: L.rest, b: "Sketch 4 endpoints on paper then in comments", t: "GET/POST/PUT/DELETE notes|Status codes 200/400/404|Commit the sketch" },
    { l: "FastAPI first steps", href: L.fastapiFirst, b: "Hello API with / and /health", t: "Install fastapi[standard]|Run docs UI|/health returns {ok:true}|Commit", extraHref: L.fastapi, extraLabel: "Full tutorial" },
    { l: "Path and query parameters", href: L.fastapi, b: "CRUD in memory for notes", t: "POST /notes|GET /notes/{id}|GET /notes?q=|Return 404 properly" },
    { l: "Pydantic models", href: L.pydantic, b: "Request/response models", t: "NoteIn and NoteOut|Validation errors|OpenAPI looks clean" },
    { l: "Friday: document the API", href: L.fastapi, b: "README with curl examples", t: "3 curl commands|Screenshot note of /docs|Push" }
  ]),
  W(4, 1, "craft", "Deeper FastAPI", "Validation, errors, structure.", [
    { l: "FastAPI body and nested models", href: L.fastapi, b: "Notes with tags array", t: "Nested Tag model|Filter by tag|Commit" },
    { l: "Status codes and error handling", href: L.fastapi, b: "Consistent error JSON", t: "{error, detail}|404/409|Tests for errors" },
    { l: "Bigger applications — routers", href: L.fastapi, b: "Split routers/notes.py", t: "APIRouter|main.py stays tiny|Commit" },
    { l: "pytest + httpx for APIs", href: L.pytest, b: "Test client for all routes", t: "5+ API tests|CI-ready command in README" },
    { l: "Friday ship", href: L.gitHubGit, b: "Tag v0.1", t: "git tag v0.1|Push tag|LEARNING.md" }
  ]),
  W(5, 2, "craft", "Git like a teammate", "Branches, PRs, history you are not ashamed of.", [
    { l: "Pro Git: branching", href: L.gitBook, b: "Feature branch workflow", t: "Create branch feat/search|Add search|Merge mentally via PR notes" },
    { l: "GitHub flow docs", href: L.gitHubGit, b: "Open a pull request on your own repo", t: "PR description with why/how/test|Merge" },
    { l: "Commit messages that age well", href: L.gitBook, b: "Rewrite last message if needed (local only)", t: "Use imperative mood|One idea per commit" },
    { l: "gitignore and secrets", href: L.gitHubGit, b: "Never commit .env", t: "Add .gitignore|Dummy .env.example|Commit" },
    { l: "Friday: history cleanup", href: L.gitBook, b: "Readable git log", t: "Squash if messy locally|Push|LEARNING.md" }
  ]),
  W(6, 2, "craft", "Linux, SQL, and the terminal", "The floor of every backend job.", [
    { l: "Linux Journey — command line", href: L.linux, b: "Daily terminal drills", t: "ls/cd/grep/find/chmod|Write a one-page cheatsheet in repo" },
    { l: "SQL tutorial (Mode)", href: L.sql, b: "Query a small CSV via SQLite", t: "CREATE TABLE|SELECT WHERE GROUP BY|Save queries.sql" },
    { l: "Joins and aggregates", href: L.sql, b: "Farm sales toy DB", t: "2 tables|JOIN|SUM by month|Commit" },
    { l: "uv and project layout", href: L.uv, b: "pyproject.toml for the API", t: "uv init or add|Lock file|README install steps" },
    { l: "Friday: one-command run", href: L.docker, b: "Document make run or uv run", t: "Stranger can start API|Push" }
  ]),
  W(7, 2, "craft", "Docker", "Your app runs the same on any machine.", [
    { l: "Docker get started", href: L.docker, b: "Dockerfile for the notes API", t: "python slim image|EXPOSE 8000|README docker run" },
    { l: "Compose mental model", href: L.docker, b: "docker-compose.yml with api", t: "Port map|Restart policy|Commit" },
    { l: "Multi-stage? Keep it simple", href: L.docker, b: "Smaller image: uv/pip freeze", t: "Pin versions|Rebuild from scratch" },
    { l: "Healthcheck and logs", href: L.docker, b: "Log requests to stdout", t: "Print method+path|docker logs works" },
    { l: "Friday: API journal v1", href: L.docker, b: "Ship project Personal API journal", t: "Dockerfile+tests+README+demo gif or clips in text|Push", extraHref: L.fastapi, extraLabel: "FastAPI" }
  ]),
  W(8, 2, "craft", "Portfolio hygiene", "A stranger can run everything.", [
    { l: "Writing READMEs that hire", href: L.gitHubGit, b: "Rewrite all READMEs", t: "Problem|Run|Test|Demo|Status" },
    { l: "REST review", href: L.rest, b: "Idempotency and status codes pass", t: "Fix any sloppy 200-on-error" },
    { l: "pytest coverage of happy + sad paths", href: L.pytest, b: "10 tests minimum", t: "Run in Docker too if you can" },
    { l: "Pin dependencies", href: L.uv, b: "lock file committed", t: "uv lock or requirements.txt freeze" },
    { l: "Phase 0 gate", href: L.gitHubGit, b: "Tag phase-0-done", t: "Checklist in LEARNING.md|Push", extraHref: L.fastapiFirst, extraLabel: "FastAPI" }
  ]),
  W(9, 3, "ml", "NumPy as a language", "Stop fearing arrays. This is how models talk.", [
    { l: "NumPy absolute beginners", href: L.numpy, b: "Reproduce 15 array drills", t: "Indexing|Broadcasting|Sums|Save npy" },
    { l: "More NumPy: linalg crumbs", href: L.numpy, b: "Dot products and norms by hand vs numpy", t: "Match your math homework to code" },
    { l: "Pandas intro tutorials 1–4", href: L.pandas, b: "Load a CSV of anything local", t: "head/describe/missing|Commit notebook or script" },
    { l: "Pandas 5–8: reshape and joins", href: L.pandas, b: "Tidy a messy table", t: "melt/pivot|merge|Save clean parquet or csv" },
    { l: "Friday plot", href: L.matplotlib, b: "2 honest charts", t: "Histogram + scatter|Title axes|Push" }
  ]),
  W(10, 3, "ml", "Data hygiene", "Garbage in, confident nonsense out.", [
    { l: "Pandas missing data", href: L.pandas, b: "Impute vs drop experiment", t: "Document which you chose and why" },
    { l: "Kaggle intro to ML — first lessons", href: L.kaggleMl, b: "Decision tree on a tiny set", t: "Train/valid split|MAE" },
    { l: "Categorical variables", href: L.kaggleInt, b: "One-hot vs ordinal", t: "Compare MAE|Write the lesson in LEARNING.md" },
    { l: "Pipelines in sklearn", href: L.sklearn, b: "Pipeline + ColumnTransformer", t: "No leakage from preprocess" },
    { l: "Friday: clean dataset card", href: L.kaggleMl, b: "DATA.md for your chosen tabular problem", t: "Source|License|Target|Leakage risks" }
  ]),
  W(11, 3, "ml", "Andrew Ng course 1 kickoff", "Regression with eyes open.", [
    { l: "ML Specialization course 1 — regression start", href: L.ng, b: "Implement linear regression with NumPy", t: "Cost curve plot|Compare to sklearn", extraHref: L.ngDlai, extraLabel: "DeepLearning.AI page" },
    { l: "Gradient descent intuition", href: L.ng, b: "Animate or log loss vs step", t: "Try 3 learning rates|Screenshot table" },
    { l: "Multiple features, feature scaling", href: L.ng, b: "Standardize features", t: "Before/after convergence speed" },
    { l: "sklearn LinearRegression vs yours", href: L.sklearn, b: "Match coefficients closely", t: "Write a test on a synthetic line" },
    { l: "Friday recap", href: L.ng, b: "One-page cheatsheet: cost, GD, scaling", t: "Push cheatsheet.md" }
  ]),
  W(12, 3, "ml", "Classification", "Logits, thresholds, and honesty.", [
    { l: "Ng course 1 — classification", href: L.ng, b: "Logistic regression from NumPy", t: "Sigmoid|BCE loss|Accuracy vs logloss" },
    { l: "Metrics that lie", href: L.sklearn, b: "Precision, recall, F1, ROC", t: "Imbalanced toy set|Don't trust accuracy" },
    { l: "sklearn LogisticRegression", href: L.sklearn, b: "Compare to NumPy version", t: "Same data|Same metrics" },
    { l: "Threshold tuning", href: L.sklearn, b: "Pick threshold for a cost you invent", t: "Document the business cost" },
    { l: "Friday: classification report", href: L.ng, b: "README section with plots", t: "Push" }
  ]),
  W(13, 4, "ml", "Linear algebra for models", "Connect university LA to code.", [
    { l: "NumPy linear algebra", href: L.numpy, b: "Eigen demo on 2x2", t: "Relate to PCA teaser" },
    { l: "PCA in sklearn", href: L.sklearn, b: "2D plot of high-D data", t: "Explained variance chart" },
    { l: "Train/valid/test discipline", href: L.sklearn, b: "Three-way split helper", t: "Never touch test until the end" },
    { l: "Kaggle intermediate — leakage", href: L.kaggleInt, b: "Find a leakage bug in a dummy pipeline", t: "Write the bug story" },
    { l: "Friday: LA ↔ ML map", href: L.numpy, b: "One page: matrix shapes in a model", t: "Push" }
  ]),
  W(14, 4, "ml", "Trees and ensembles", "The workhorses of tabular data.", [
    { l: "Ng course 2 — trees (or sklearn trees doc)", href: L.ng, b: "Decision tree on your dataset", t: "Max depth experiment", extraHref: L.sklearn, extraLabel: "sklearn trees" },
    { l: "Random forests", href: L.sklearn, b: "RF vs tree vs logistic", t: "Table of metrics" },
    { l: "Gradient boosting (sklearn HistGB)", href: L.sklearn, b: "Boosted model", t: "Learning curve" },
    { l: "Feature importance — with grain of salt", href: L.sklearn, b: "Permutation importance", t: "Don't overclaim" },
    { l: "Friday: model card v0", href: L.sklearn, b: "MODEL.md: data, metric, limits", t: "Push" }
  ]),
  W(15, 4, "ml", "Probability you will actually use", "Calibration, not slogans.", [
    { l: "Ng advice on bias/variance", href: L.ng, b: "High bias vs high variance plots", t: "Regularize or add data — pick" },
    { l: "sklearn calibration", href: L.sklearn, b: "Reliability curve", t: "Brier score" },
    { l: "Cross-validation", href: L.sklearn, b: "K-fold on your pipeline", t: "Mean ± std of metric" },
    { l: "Error analysis sheet", href: L.kaggleInt, b: "20 misclassified rows studied", t: "Patterns written down" },
    { l: "Friday: CV numbers in README", href: L.ng, b: "No single-split bragging", t: "Push" }
  ]),
  W(16, 4, "ml", "Unsupervised & recommenders teaser", "Clustering as a tool, not magic.", [
    { l: "Ng course 3 — unsupervised intro", href: L.ng, b: "K-means on 2D toy", t: "Elbow vs silhouette" },
    { l: "sklearn clustering", href: L.sklearn, b: "Cluster your tabular extras", t: "Describe clusters in English" },
    { l: "Anomaly isolation forest", href: L.sklearn, b: "Flag weird rows", t: "Manual check 10 flags" },
    { l: "Simple recommender (cosine)", href: L.sklearn, b: "Item similarity on fake ratings", t: "Top-N printout" },
    { l: "Friday notes", href: L.ng, b: "When NOT to cluster", t: "Push" }
  ]),
  W(17, 5, "ml", "End-to-end tabular pipeline", "This becomes project 2.", [
    { l: "sklearn user guide — pipelines", href: L.sklearn, b: "Full pipeline script train.py", t: "Config at top|Seed set" },
    { l: "Persist model with joblib", href: L.sklearn, b: "Save / load roundtrip test", t: "Test file" },
    { l: "FastAPI /predict", href: L.fastapi, b: "JSON in, score out", t: "Pydantic features|Version field" },
    { l: "Baseline always first", href: L.sklearn, b: "DummyClassifier/Regressor in table", t: "Beat it or explain" },
    { l: "Friday: API + model talking", href: L.fastapi, b: "curl examples", t: "Push" }
  ]),
  W(18, 5, "ml", "A real dataset", "Pick one and live with it.", [
    { l: "Kaggle learn wrap", href: L.kaggleMl, b: "Choose dataset (crops, credit, housing)", t: "License check|DATA.md" },
    { l: "EDA script", href: L.pandas, b: "10 plots that answer questions", t: "Not random histograms" },
    { l: "Model bake-off", href: L.sklearn, b: "3 models, same CV", t: "Table in README" },
    { l: "Error analysis 2", href: L.sklearn, b: "Slice metrics by a group", t: "Fairness note if relevant" },
    { l: "Friday: freeze the problem statement", href: L.kaggleInt, b: "One paragraph: user of this model", t: "Push" }
  ]),
  W(19, 5, "ml", "Ship the tabular API", "Project 2 quality bar.", [
    { l: "FastAPI response model for predictions", href: L.fastapi, b: "proba + label + model_version", t: "Commit" },
    { l: "pytest for /predict", href: L.pytest, b: "Golden vectors", t: "CI command" },
    { l: "Docker again", href: L.docker, b: "Image runs the model", t: "README docker" },
    { l: "Write the honest README", href: L.gitHubGit, b: "Metrics, slices, limitations", t: "No hype" },
    { l: "Friday: tag tabular-v1", href: L.sklearn, b: "Project Tabular decision model done", t: "Push" }
  ]),
  W(20, 5, "ml", "Phase 1 gate", "You can train and serve a classical model.", [
    { l: "Re-read Ng evaluation advice", href: L.ng, b: "Audit your project against it", t: "Fix 2 issues" },
    { l: "sklearn inspection", href: L.sklearn, b: "Partial dependence on 1 feature", t: "Plot" },
    { l: "Code cleanup", href: L.uv, b: "Dead notebooks out of main path", t: "scripts/ + README" },
    { l: "Record a 90-second demo script", href: L.gitHubGit, b: "Write DEMO.md steps", t: "Someone else could film it" },
    { l: "Gate checklist", href: L.ngDlai, b: "phase-1-done tag", t: "LEARNING.md summary of months 3–5" }
  ]),
  W(21, 6, "dl", "Neural nets in pictures", "Intuition before PyTorch sugar.", [
    { l: "3Blue1Brown neural networks", href: L.b1bnn, b: "Notes: what backprop is doing", t: "Hand sketch of a 2-layer net" },
    { l: "Karpathy micrograd video", href: L.micrograd, b: "Follow along, pause, type it", t: "Repo clone your own micrograd_min", extraHref: L.karpathy, extraLabel: "Zero to hero" },
    { l: "Finish your tiny autograd", href: L.karpathy, b: "Train a 2-layer net on moons", t: "Loss plot" },
    { l: "d2l prelude / multilayer perceptrons skim", href: L.d2l, b: "Map terms: logit, softmax, epoch", t: "Glossary.md" },
    { l: "Friday: explain backprop in 12 lines", href: L.b1bnn, b: "No copied text", t: "Push" }
  ]),
  W(22, 6, "dl", "PyTorch tensors", "The new NumPy.", [
    { l: "PyTorch basics intro", href: L.pytorch, b: "Tensor drills 20 exercises", t: "device cpu first" },
    { l: "60-min blitz — tensors & autograd", href: L.torch60, b: "grad examples", t: "requires_grad chain" },
    { l: "nn.Module first network", href: L.pytorch, b: "MLP on FashionMNIST subset", t: "Train 3 epochs" },
    { l: "Train/eval modes and dataloaders", href: L.pytorch, b: "Proper DataLoader", t: "Don't eval in train mode" },
    { l: "Friday: training loop you can recite", href: L.pytorch, b: "train.py without a notebook", t: "Push" }
  ]),
  W(23, 6, "dl", "A training loop you own", "No magic Trainer yet.", [
    { l: "PyTorch tutorials — build the net", href: L.pytorch, b: "Log loss/acc each epoch", t: "CSV or print" },
    { l: "Overfit a tiny subset on purpose", href: L.torch60, b: "Prove the model can memorize", t: "Then regularize" },
    { l: "Checkpoints", href: L.pytorch, b: "Save best.pt by val acc", t: "Load and resume" },
    { l: "Reproducibility", href: L.pytorch, b: "Seed everything", t: "Two runs close enough" },
    { l: "Friday: LOOP.md", href: L.pytorch, b: "The 15 lines of a loop explained", t: "Push" }
  ]),
  W(24, 6, "dl", "fast.ai practical start", "Speed with taste.", [
    { l: "fast.ai lesson 1", href: L.fastai, b: "Run the first notebook yourself", t: "Pets or similar|Notes in LEARNING.md" },
    { l: "fast.ai lesson 2 mindset", href: L.fastai, b: "Your own image download of a niche", t: "Farm insects, street signs, or tools" },
    { l: "DataBlock / dataloaders", href: L.fastai, b: "Clean labels", t: "Remove 10 bad images" },
    { l: "Interpretation", href: L.fastai, b: "Top losses plot", t: "Write 5 error stories" },
    { l: "Friday: domain dataset frozen", href: L.fastai, b: "DATA.md for images", t: "Push" }
  ]),
  W(25, 7, "dl", "CNNs and transfer learning", "Don't train ImageNet from scratch.", [
    { l: "cs231n conv notes (read, don't drown)", href: L.cs231n, b: "Sketch conv, stride, pad", t: "One page" },
    { l: "PyTorch finetune a ResNet", href: L.pytorch, b: "Freeze then unfreeze", t: "Val acc table" },
    { l: "fast.ai transfer learning", href: L.fastai, b: "Beat your from-scratch MLP", t: "Compare params and time" },
    { l: "Augmentation", href: L.fastai, b: "Flip/rotate that make sense for your domain", t: "Don't flip digits if you had digits" },
    { l: "Friday: vision baseline locked", href: L.cs231n, b: "README metrics", t: "Push" }
  ]),
  W(26, 7, "dl", "Regularization and debug", "When it doesn't learn.", [
    { l: "d2l dropout & weight decay", href: L.d2l, b: "Ablate dropout", t: "Table" },
    { l: "Learning rate finder idea (fast.ai)", href: L.fastai, b: "Pick LR with a plot", t: "Don't guess 3e-4 forever" },
    { l: "Overfit / underfit checklist", href: L.pytorch, b: "Debug a broken train (shuffle off etc.)", t: "Introduce and fix a bug" },
    { l: "Mixed mistakes: labels", href: L.fastai, b: "Find mislabels", t: "Fix and retrain" },
    { l: "Friday: DEBUG.md", href: L.d2l, b: "Your personal failure modes", t: "Push" }
  ]),
  W(27, 7, "dl", "Text classifiers", "Bags to transformers teaser.", [
    { l: "Hugging Face NLP course ch.1–2", href: L.hfNlp, b: "Use a pipeline sentiment", t: "10 farm-life sentences" },
    { l: "Tokenization intuition", href: L.hfNlp, b: "Print tokens for 5 sentences", t: "Word vs subword" },
    { l: "Fine-tune a tiny encoder (HF)", href: L.transformers, b: "IMDB subset or your notes labels", t: "Trainer or hand loop" },
    { l: "Evaluate F1 not just acc", href: L.hfNlp, b: "Classification report", t: "Commit" },
    { l: "Friday: text model card", href: L.hfNlp, b: "Limits: sarcasm, Latvian, etc.", t: "Push" }
  ]),
  W(28, 7, "dl", "Hugging Face as a workshop", "Hub, datasets, models.", [
    { l: "Hub docs", href: L.hfHub, b: "Create a model card draft", t: "Upload or local card" },
    { l: "datasets library", href: L.datasets, b: "Load + map + save to disk", t: "No giant RAM" },
    { l: "transformers overview", href: L.transformers, b: "AutoModelForSequenceClassification", t: "Forward pass print shapes" },
    { l: "Token classification skim", href: L.hfNlp, b: "NER pipeline on a news sentence", t: "Notes" },
    { l: "Friday: HF account tidy", href: L.hfHub, b: "One public space or repo link in README", t: "Push" }
  ]),
  W(29, 8, "dl", "Attention, gently", "The paper exists. You need the picture.", [
    { l: "Attention is all you need — abstract + figures", href: L.attention, b: "Draw encoder stack", t: "8 boxes labeled" },
    { l: "Karpathy GPT from scratch (start)", href: L.karpathy, b: "nanoGPT or lecture notes", t: "Char-level bigram baseline" },
    { l: "Self-attention toy", href: L.scratchLlm, b: "One head in NumPy", t: "Shapes annotated" },
    { l: "d2l attention section skim", href: L.d2l, b: "Compare to your drawing", t: "Fix the drawing" },
    { l: "Friday: ATTENTION.md", href: L.attention, b: "Explain QKV to a friend", t: "Push" }
  ]),
  W(30, 8, "dl", "Train a tiny GPT", "So APIs never feel like magic.", [
    { l: "Karpathy Zero to Hero GPT video", href: L.karpathy, b: "Train on a small text you like", t: "Loss curve" },
    { l: "LLMs from scratch book repo — tokenizer chapter", href: L.scratchLlm, b: "BPE playground", t: "Encode/decode roundtrip" },
    { l: "Generate samples", href: L.karpathy, b: "Temperature experiments", t: "Save samples.md" },
    { l: "Context length vs quality", href: L.scratchLlm, b: "Tiny ablation", t: "Table" },
    { l: "Friday: you trained a language model", href: L.karpathy, b: "Tag tinylm-v0", t: "Push" }
  ]),
  W(31, 8, "dl", "Vision project finish", "Project 3 bar.", [
    { l: "fast.ai remaining useful lesson", href: L.fastai, b: "Export model.pkl or pt", t: "Inference script" },
    { l: "Gradio or FastAPI for images", href: L.fastapi, b: "Upload → label + conf", t: "Local demo" },
    { l: "Error analysis gallery", href: L.fastai, b: "6 images with commentary", t: "README" },
    { l: "Docker the demo", href: L.docker, b: "Someone else can run", t: "CPU is fine" },
    { l: "Friday: vision app tagged", href: L.fastai, b: "Project transfer-learned vision done", t: "Push" }
  ]),
  W(32, 8, "dl", "Phase 2 gate", "You can train and serve a net.", [
    { l: "Re-read your LOOP.md", href: L.pytorch, b: "Rewrite training loop from memory", t: "Diff vs old" },
    { l: "cs231n training tricks skim", href: L.cs231n, b: "Steal 2 tricks", t: "Apply or reject with reason" },
    { l: "Paper with code — browse a baseline", href: L.papers, b: "Bookmark 3 papers in your area", t: "papers.md" },
    { l: "Clean repos", href: L.gitHubGit, b: "Pin 3 repos on GitHub profile", t: "API, tabular, vision" },
    { l: "phase-2-done", href: L.fastai, b: "LEARNING.md months 6–8", t: "Tag" }
  ]),
  W(33, 9, "llm", "Prompt engineering as engineering", "Prompts are code. Version them.", [
    { l: "Prompting guide — intro + techniques", href: L.prompt, b: "Prompt library in yaml/md", t: "5 tasks: extract, classify, rewrite, plan, refuse" },
    { l: "DeepLearning.AI prompt engineering for developers", href: L.peDev, b: "Rebuild course exercises in a script", t: "prompts/ directory" },
    { l: "Evaluation of prompts", href: L.prompt, b: "10 golden inputs, expected traits", t: "Don't eyeball only" },
    { l: "System vs user vs tool messages", href: L.openaiApi, b: "Chat template notes", t: "One file chat_format.md" },
    { l: "Friday: prompt repo v0", href: L.peDev, b: "README how to run eval", t: "Push" }
  ]),
  W(34, 9, "llm", "Building systems around an LLM", "Not a chatbot toy — a system.", [
    { l: "Building systems with ChatGPT API", href: L.sysChat, b: "Moderation → process → check chain", t: "Python modules" },
    { l: "JSON schemas / structured output", href: L.openaiApi, b: "Force JSON for a farm record", t: "Validate with Pydantic" },
    { l: "Idempotent pipelines", href: L.sysChat, b: "Retry + log every call", t: "logs/jsonl" },
    { l: "Cost and token counting", href: L.openaiApi, b: "Print tokens per call", t: "Budget.md" },
    { l: "Friday: system diagram", href: L.sysChat, b: "Boxes in README", t: "Push" }
  ]),
  W(35, 9, "llm", "Hugging Face LLM course start", "Open models exist.", [
    { l: "HF LLM course unit 1", href: L.hfCourse, b: "Run a small local or API model", t: "Document hardware: CPU is OK with tiny models" },
    { l: "Decoder vs encoder vs seq2seq", href: L.hfCourse, b: "One page map", t: "When to use which" },
    { l: "Tokenizers for LLMs", href: L.hfCourse, b: "Compare 2 tokenizers on Latvian text", t: "Unknown token behavior" },
    { l: "Generation configs", href: L.transformers, b: "greedy vs sample vs beam", t: "samples.md" },
    { l: "Friday: gen playground CLI", href: L.hfCourse, b: "python generate.py --temp", t: "Push" }
  ]),
  W(36, 9, "llm", "More HF course", "Fine-tune vs retrieve.", [
    { l: "HF LLM course — fine-tune chapter", href: L.hfCourse, b: "LoRA teaser even if PEFT later", t: "Notes" },
    { l: "Instruction vs base models", href: L.hfCourse, b: "Same prompt on both if possible", t: "Write the difference" },
    { l: "Chat templates", href: L.transformers, b: "apply_chat_template correctly", t: "Don't double BOS" },
    { l: "Safety: refusals", href: L.prompt, b: "Jailbreak your own prompt, then patch", t: "Keep it ethical — your model only" },
    { l: "Friday: model choice note", href: L.hfCourse, b: "What you will use for RAG (API vs local)", t: "Push" }
  ]),
  W(37, 10, "llm", "LangChain as glue — carefully", "Learn it, don't drown in it.", [
    { l: "LangChain for LLM app development", href: L.lcDev, b: "Rebuild course in your repo", t: "Thin wrappers" },
    { l: "LangChain tutorials official", href: L.langchain, b: "LCEL chain: prompt | model | parser", t: "One file" },
    { l: "Tools: calculator + time", href: L.langchain, b: "Bind tools, print calls", t: "No hidden magic" },
    { l: "Memory — what to store", href: L.langchain, b: "Buffer vs summary", t: "Privacy note" },
    { l: "Friday: langchain-min repo", href: L.lcDev, b: "README with less magic", t: "Push" }
  ]),
  W(38, 10, "llm", "RAG foundations", "Search then generate.", [
    { l: "LlamaIndex starter", href: L.llamaindex, b: "Index a folder of your lecture notes", t: "Query 5 questions" },
    { l: "Chroma introduction", href: L.chroma, b: "Same docs in Chroma", t: "Persist directory" },
    { l: "Chunking experiments", href: L.zoomcamp, b: "3 chunk sizes, 3 overlaps", t: "Which answers better?" },
    { l: "Citations", href: L.llamaindex, b: "Always return source paths", t: "Fail if missing" },
    { l: "Friday: rag-v0", href: L.chroma, b: "CLI rag.py \"question\"", t: "Push" }
  ]),
  W(39, 10, "llm", "Better RAG", "Hybrid, rerank, fail closed.", [
    { l: "Building & evaluating advanced RAG", href: L.ragEval, b: "Sentence-window or auto-merge notes", t: "Implement one idea" },
    { l: "RAGAS docs", href: L.ragas, b: "Faithfulness + relevancy on 15 Qs", t: "Table" },
    { l: "Hybrid search notes (zoomcamp)", href: L.zoomcamp, b: "Keyword + vector", t: "Even a simple keyword prefilter" },
    { l: "Hard negatives / bad retrieval log", href: L.ragEval, b: "10 failed questions", t: "failures.md" },
    { l: "Friday: eval in CI mindset", href: L.ragas, b: "python eval.py writes csv", t: "Push" }
  ]),
  W(40, 10, "llm", "Ship RAG API", "Project Document RAG with evals.", [
    { l: "FastAPI for RAG", href: L.fastapi, b: "/ask returns answer+sources+scores", t: "Pydantic" },
    { l: "LLM Zoomcamp relevant week", href: L.zoomcamp, b: "Steal one production idea", t: "Attribute it" },
    { l: "pytest golden questions", href: L.pytest, b: "5 questions must cite the right file", t: "CI" },
    { l: "README with eval table", href: L.ragas, b: "Honest scores", t: "Limitations: languages, stale docs" },
    { l: "Friday: tag rag-v1", href: L.zoomcamp, b: "Project RAG done", t: "Push" }
  ]),
  W(41, 11, "llm", "Agents 1 — tools", "An LLM that can act.", [
    { l: "LangGraph short course start", href: L.langgraph, b: "One node graph: model", t: "Run it" },
    { l: "Tool node", href: L.langgraph, b: "Search or calculator tool", t: "Trace printed" },
    { l: "LangChain tools tutorial", href: L.langchain, b: "Custom tool: crop_price(mock)", t: "Typed args" },
    { l: "Guard: max steps", href: L.langgraph, b: "Loop protection", t: "Test infinite planner" },
    { l: "Friday: traces.md", href: L.langgraph, b: "3 successful traces", t: "Push" }
  ]),
  W(42, 11, "llm", "Agents 2 — memory and state", "State is the product.", [
    { l: "LangGraph state and memory", href: L.langgraph, b: "Thread id per user", t: "local sqlite or json" },
    { l: "Human in the loop idea", href: L.langgraph, b: "Approve before a 'send email' mock", t: "interrupt" },
    { l: "Streaming tokens", href: L.fastapi, b: "SSE or chunked /ask", t: "Minimal UI later" },
    { l: "Eval agents with golden tasks", href: L.evals, b: "10 tasks pass/fail", t: "Don't demo-only" },
    { l: "Friday: agent-v0", href: L.langgraph, b: "README architecture", t: "Push" }
  ]),
  W(43, 11, "llm", "Multi-agent", "Router, worker, critic.", [
    { l: "LangGraph multi-actor", href: L.langgraph, b: "Researcher + writer + critic", t: "Shared state" },
    { l: "When NOT to multi-agent", href: L.prompt, b: "Write a rant, then a rule", t: "Single agent first" },
    { l: "Critic prompts", href: L.prompt, b: "Checklist critic", t: "Reject empty citations" },
    { l: "Cost of multi-agent", href: L.openaiApi, b: "Log tokens per role", t: "Budget" },
    { l: "Friday: diagram of graph", href: L.langgraph, b: "mermaid in README (as text is fine)", t: "Push" }
  ]),
  W(44, 11, "llm", "Chatbot product", "UX is part of AI engineering.", [
    { l: "Building systems course recap", href: L.sysChat, b: "Session, history, reset", t: "API" },
    { l: "FastAPI websocket or simple POST loop", href: L.fastapi, b: "chat.html minimal", t: "No framework maze" },
    { l: "Memory summary every N turns", href: L.langchain, b: "Store summary + last 6", t: "Privacy: local only" },
    { l: "Empty states and errors", href: L.fastapi, b: "Model down → honest message", t: "Never hang" },
    { l: "Friday: chatbot-v0 tagged", href: L.sysChat, b: "Usable by a friend", t: "Push" }
  ]),
  W(45, 12, "llm", "Zoomcamp production patterns", "Steal from people who ship.", [
    { l: "LLM Zoomcamp repo overview", href: L.zoomcamp, b: "Replicate one homework", t: "Your data" },
    { l: "Monitoring idea", href: L.mlopsOrg, b: "Log latency, tokens, user feedback thumbs", t: "jsonl" },
    { l: "Offline vs online eval", href: L.ragas, b: "Weekly golden set", t: "script" },
    { l: "Prompt versioning", href: L.prompt, b: "prompts/v1 v2 with changelog", t: "Never edit silently" },
    { l: "Friday: ops notes", href: L.zoomcamp, b: "OPS.md", t: "Push" }
  ]),
  W(46, 12, "llm", "Retrieval quality", "Most 'agent' failures are search.", [
    { l: "Chunking again with real notes", href: L.chroma, b: "Heading-aware chunks", t: "Don't split mid-table" },
    { l: "Metadata filters", href: L.chroma, b: "Filter by course year", t: "Query API" },
    { l: "Rerank conceptually", href: L.ragEval, b: "Score with a cross-encoder or LLM judge", t: "Top 20 → top 5" },
    { l: "Multilingual: Latvian + English", href: L.hfCourse, b: "Test both", t: "Document failure" },
    { l: "Friday: retrieval.md", href: L.chroma, b: "Before/after examples", t: "Push" }
  ]),
  W(47, 12, "llm", "Structured extraction", "AI as intern data-entry.", [
    { l: "OpenAI structured outputs", href: L.openaiApi, b: "Extract farm records from prose", t: "Pydantic" },
    { l: "Validation loops", href: L.pydantic, b: "If invalid, repair once", t: "Then fail" },
    { l: "Batch extraction", href: L.openaiApi, b: "20 docs", t: "CSV out" },
    { l: "Human review queue mock", href: L.fastapi, b: "/review mismatches", t: "Simple list" },
    { l: "Friday: extractor-v0", href: L.pydantic, b: "README + sample csv", t: "Push" }
  ]),
  W(48, 12, "llm", "Mid-year 1 exam of skill", "Build in 5 days without new tutorials.", [
    { l: "Pick a small app: lecture Q&A", href: L.zoomcamp, b: "Spec in SPEC.md", t: "Scope tiny" },
    { l: "Implement retrieval", href: L.chroma, b: "Working search", t: "No UI polish yet" },
    { l: "Implement generate + cite", href: L.fastapi, b: "API", t: "Tests" },
    { l: "Eval 15 questions", href: L.ragas, b: "Table", t: "Fix top issue" },
    { l: "Friday: freeze midyear app", href: L.gitHubGit, b: "Tag midyear", t: "Push" }
  ]),
  W(49, 13, "llm", "Fine-tune vs RAG decision", "Most problems want RAG.", [
    { l: "PEFT conceptual intro", href: L.peft, b: "Write decision tree: RAG / FT / prompt", t: "DECISIONS.md" },
    { l: "HF course fine-tune recap", href: L.hfCourse, b: "Tiny LoRA on a toy intent set", t: "CPU or free colab — document" },
    { l: "Data for FT: 200 examples you wrote", href: L.datasets, b: "jsonl instructions", t: "Quality > size" },
    { l: "Eval FT vs base vs RAG", href: L.ragas, b: "Same 15 Qs", t: "Table — usually RAG wins for facts" },
    { l: "Friday: decision recorded", href: L.peft, b: "Don't FT trivia into weights", t: "Push" }
  ]),
  W(50, 13, "llm", "Tool-using agent project", "Project bar: 10 golden tasks.", [
    { l: "LangGraph course remaining", href: L.langgraph, b: "Finalize graph", t: "Draw it" },
    { l: "Tools: files, calc, notes search", href: L.langchain, b: "Each tool unit-tested", t: "No silent fail" },
    { l: "Golden tasks 1–5", href: L.evals, b: "Must pass", t: "Record traces" },
    { l: "Golden tasks 6–10 + adversarial", href: L.evals, b: "2 expected failures documented", t: "Honesty" },
    { l: "Friday: tag agent-v1", href: L.langgraph, b: "Project tool-using agent done", t: "Push" }
  ]),
  W(51, 13, "llm", "Product polish", "Hiring managers click once.", [
    { l: "README cinema", href: L.gitHubGit, b: "GIF or detailed DEMO.md", t: "2-minute path" },
    { l: "Architecture section", href: L.systemDesign, b: "Data flow, failure modes", t: "One diagram" },
    { l: "Tests you would not be ashamed of", href: L.pytest, b: "Unit + 3 API", t: "CI instruction" },
    { l: "License + credits for models", href: L.hfHub, b: "MODEL licenses listed", t: "Required" },
    { l: "Friday: profile README links", href: L.gitHubGit, b: "Pin RAG + agent", t: "Push" }
  ]),
  W(52, 13, "llm", "Phase 3 gate", "You are an LLM engineer in training.", [
    { l: "Re-run RAG evals", href: L.ragas, b: "Catch rot", t: "Fix or document" },
    { l: "Re-run agent goldens", href: L.langgraph, b: "Catch rot", t: "Fix" },
    { l: "Write a 1-page 'what I build'", href: L.gitHubGit, b: "For applications later", t: "no buzzwords" },
    { l: "Read OWASP LLM top 10 once", href: L.owaspLlm, b: "Notes for phase 4", t: "Don't implement all yet" },
    { l: "phase-3-done", href: L.zoomcamp, b: "LEARNING.md months 9–13", t: "Tag" }
  ]),
  W(53, 14, "prod", "MLOps map", "The job behind the notebook.", [
    { l: "MLOps.org principles", href: L.mlopsOrg, b: "Map your RAG to the diagram", t: "What's missing" },
    { l: "ML Engineering for Production — course 1 start", href: L.mlops, b: "Notes: data/model/serving", t: "Don't binge — 1 module" },
    { l: "MLflow intro", href: L.mlflow, b: "Log params and metrics of a sklearn run", t: "UI locally" },
    { l: "Experiment vs production folders", href: L.mlopsOrg, b: "Repo layout rfc", t: "LAYOUT.md" },
    { l: "Friday: MLOps glossary", href: L.mlops, b: "20 terms in your words", t: "Push" }
  ]),
  W(54, 14, "prod", "Data and model registries", "Names and versions.", [
    { l: "MLflow models", href: L.mlflow, b: "Register the tabular model", t: "Stage staging" },
    { l: "Dataset versioning idea", href: L.datasets, b: "Hash or date your RAG corpus", t: "versions.md" },
    { l: "Config as code", href: L.pydantic, b: "pydantic-settings for the API", t: "No scattered os.environ" },
    { l: "CI: test + eval smoke", href: L.pytest, b: "GitHub Actions yaml or just documented", t: "Keep it simple" },
    { l: "Friday: version everything", href: L.mlflow, b: "MODEL_VERSION in /health", t: "Push" }
  ]),
  W(55, 14, "prod", "Serving", "Latency is a feature.", [
    { l: "FastAPI production notes", href: L.fastapi, b: "gunicorn/uvicorn workers notes", t: "Don't cargo-cult" },
    { l: "Docker health and limits", href: L.docker, b: "Healthcheck + memory note", t: "README" },
    { l: "Batch vs interactive", href: L.mlopsOrg, b: "Write when to batch", t: "Your agent is interactive" },
    { l: "Timeouts and cancellation", href: L.fastapi, b: "LLM client timeout", t: "Test it" },
    { l: "Friday: /metrics stub", href: L.fastapi, b: "count requests, errors, latency_ms", t: "Push" }
  ]),
  W(56, 14, "prod", "Observability", "If you can't see it, you don't run it.", [
    { l: "MLOps monitoring chapter/notes", href: L.mlops, b: "Data drift vs concept drift in words", t: "For LLMs: prompt/output drift" },
    { l: "Log traces for agents", href: L.langgraph, b: "Structured jsonl", t: "request_id" },
    { l: "User feedback", href: L.fastapi, b: "POST /feedback thumbs", t: "Store" },
    { l: "Weekly eval job script", href: L.ragas, b: "cron documented", t: "Not necessarily scheduled yet" },
    { l: "Friday: OBS.md", href: L.mlopsOrg, b: "What you watch every week", t: "Push" }
  ]),
  W(57, 15, "prod", "LLM infrastructure", "The factory.", [
    { l: "vLLM docs — what continuous batching is", href: L.vllm, b: "Notes even if you can't run GPU", t: "ARCHITECTURE-vllm.md" },
    { l: "Quantization intuition", href: L.hfCourse, b: "8-bit / 4-bit meaning", t: "Quality vs speed table from docs" },
    { l: "HF generation performance", href: L.transformers, b: "KV cache in one paragraph", t: "Write it" },
    { l: "API gateway pattern", href: L.fastapi, b: "One /v1/chat/completions-shaped endpoint", t: "Adapter over provider" },
    { l: "Friday: infra decision", href: L.vllm, b: "Local tiny vs hosted API for your budget", t: "Push" }
  ]),
  W(58, 15, "prod", "LoRA fine-tune for real", "Small model, domain data.", [
    { l: "PEFT LoRA docs", href: L.peft, b: "Train LoRA on your 200+ examples", t: "CPU/colab/kaggle — document hardware" },
    { l: "TRL notes", href: L.trl, b: "SFTTrainer path or hand loop", t: "Loss curve" },
    { l: "Before/after samples", href: L.peft, b: "15 prompts", t: "samples.md" },
    { l: "Merge vs adapter at runtime", href: L.peft, b: "Document how you serve", t: "README" },
    { l: "Friday: lora-v0", href: L.peft, b: "Limitations listed", t: "Push" }
  ]),
  W(59, 15, "prod", "Serve the adapter", "Project: served LoRA path.", [
    { l: "vLLM LoRA or transformers generate API", href: L.vllm, b: "If no GPU: transformers + bitsandbytes notes or llama.cpp docs in README", t: "Honesty about hardware" },
    { l: "Latency budget", href: L.fastapi, b: "Measure tokens/sec if possible", t: "Else estimate" },
    { l: "A/B base vs LoRA", href: L.peft, b: "Same prompts", t: "Table" },
    { l: "Docker story", href: L.docker, b: "GPU optional documented", t: "CPU fallback" },
    { l: "Friday: tag serve-lora", href: L.vllm, b: "Project served LoRA done", t: "Push" }
  ]),
  W(60, 15, "prod", "Cost and capacity", "Companies hire people who can count.", [
    { l: "OpenAI pricing pages / token economics", href: L.openaiApi, b: "Spreadsheet of 1k users", t: "cost.csv" },
    { l: "Caching prompts", href: L.prompt, b: "Prefix cache idea", t: "Notes" },
    { l: "Rate limits and queues", href: L.fastapi, b: "Simple semaphore", t: "Test" },
    { l: "Batch extraction jobs", href: L.openaiApi, b: "Backfill 100 docs", t: "Script" },
    { l: "Friday: COST.md", href: L.vllm, b: "Your app's unit economics", t: "Push" }
  ]),
  W(61, 16, "prod", "Orchestration quality", "Agents that fail closed.", [
    { l: "LangGraph persistence", href: L.langgraph, b: "Resume a thread", t: "Crash test" },
    { l: "Idempotent tools", href: L.langchain, b: "Same tool twice = safe", t: "Test" },
    { l: "Schema for tool errors", href: L.pydantic, b: "Tools return {ok, data, error}", t: "Model can recover" },
    { l: "Eval harness for graphs", href: L.evals, b: "Golden + step traces", t: "Don't only check final string" },
    { l: "Friday: orchestration.md", href: L.langgraph, b: "Failure modes list", t: "Push" }
  ]),
  W(62, 16, "prod", "Multi-agent product slice", "One workflow, end to end.", [
    { l: "Pick: lecture → notes → quiz agent", href: L.langgraph, b: "SPEC.md", t: "Tiny" },
    { l: "Implement 3 nodes", href: L.langgraph, b: "Working path", t: "Traces" },
    { l: "Evals 8 tasks", href: L.evals, b: "Pass bar 6/8", t: "Document 2 fails" },
    { l: "API + minimal UI", href: L.fastapi, b: "One page", t: "Ship" },
    { l: "Friday: workflow-v1", href: L.langgraph, b: "README demo", t: "Push" }
  ]),
  W(63, 16, "prod", "Streaming, UX, reliability", "Feels like a product.", [
    { l: "Streaming tokens FastAPI", href: L.fastapi, b: "Token stream to the page", t: "Works" },
    { l: "Cancel button semantics", href: L.fastapi, b: "Abort generation", t: "Don't bill extra if you can" },
    { l: "Partial failure: retrieval empty", href: L.chroma, b: "Say I don't know", t: "Test" },
    { l: "Load test lite", href: L.fastapi, b: "20 sequential requests timed", t: "Notes" },
    { l: "Friday: UX.md", href: L.fastapi, b: "Empty, loading, error, success", t: "Push" }
  ]),
  W(64, 16, "prod", "System design for AI apps", "Interviews will ask this.", [
    { l: "System design primer — skim relevant", href: L.systemDesign, b: "Design a RAG chat for 10k students", t: "Write 1 page" },
    { l: "Queues, retries, DLQ", href: L.mlopsOrg, b: "Where you'd put Redis later", t: "Don't implement Redis yet" },
    { l: "Auth later vs now", href: L.fastapi, b: "Local-only is fine; document threat model", t: "THREAT.md" },
    { l: "Multi-tenant data isolation notes", href: L.chroma, b: "metadata user_id filters", t: "Never mix corpora" },
    { l: "Friday: design doc v1", href: L.systemDesign, b: "Keep it boring", t: "Push" }
  ]),
  W(65, 17, "prod", "OWASP LLM Top 10", "Security is a specialization.", [
    { l: "OWASP Top 10 for LLM apps", href: L.owaspLlm, b: "Map each item to your chatbot", t: "table" },
    { l: "Prompt injection lab on YOUR app", href: L.owaspLlm, b: "5 attacks, record outputs", t: "ethical: own system" },
    { l: "System prompt leaking", href: L.prompt, b: "Try to extract, then harden", t: "Minimize secrets in prompts" },
    { l: "Excessive agency", href: L.owaspLlm, b: "Remove dangerous tools", t: "Allowlist" },
    { l: "Friday: ATTACKS.md part 1", href: L.owaspLlm, b: "Raw outputs saved", t: "Push" }
  ]),
  W(66, 17, "prod", "Guardrails and defense", "Prove they work.", [
    { l: "OWASP mitigation notes", href: L.owaspLlm, b: "Input filter + output filter", t: "Simple classifiers or rules" },
    { l: "Re-run the 5 attacks", href: L.owaspLlm, b: "Before/after table", t: "Honest remaining holes" },
    { l: "Secrets and supply chain", href: L.gitHubGit, b: "No keys in repo — scan", t: "gitleaks mindset" },
    { l: "PII in logs", href: L.mlopsOrg, b: "Redact emails in jsonl", t: "Script" },
    { l: "Friday: security lab tagged", href: L.owaspLlm, b: "Project AI security lab", t: "Push" }
  ]),
  W(67, 17, "prod", "Evals as a product", "The new unit tests.", [
    { l: "openai/evals concept", href: L.evals, b: "Write 2 custom evals", t: "JSON spec" },
    { l: "LLM-as-judge pitfalls", href: L.ragas, b: "Agreement on 20 items you labeled", t: "Don't trust judge blindly" },
    { l: "Regression evals on every prompt change", href: L.pytest, b: "Fail CI if faithfulness drops", t: "Script" },
    { l: "Red team eval set", href: L.owaspLlm, b: "20 malicious prompts", t: "Must refuse" },
    { l: "Friday: eval suite in README", href: L.evals, b: "How to run", t: "Push" }
  ]),
  W(68, 17, "prod", "Reliability engineering", "On-call thinking without the pager yet.", [
    { l: "MLOps production course module on deploy", href: L.mlops, b: "Blue/green in words", t: "For your API" },
    { l: "Feature flags for prompts", href: L.fastapi, b: "PROMPT_VERSION env", t: "Switch" },
    { l: "Dead-letter of failed jobs", href: L.mlopsOrg, b: "failed/ folder", t: "Replay script" },
    { l: "Runbooks", href: L.mlops, b: "RUNBOOK.md: model down, bad deploy, cost spike", t: "One page" },
    { l: "Friday: you run a system", href: L.mlops, b: "Tag ops-v1", t: "Push" }
  ]),
  W(69, 18, "prod", "Deepen one track: MLOps", "Choose a primary, keep others literate.", [
    { l: "MLflow projects / recipes skim", href: L.mlflow, b: "Reproduce tabular train via one command", t: "Working" },
    { l: "Data validation idea", href: L.pandas, b: "Great expectations mindset: 8 checks", t: "assert in code" },
    { l: "Model decay", href: L.mlopsOrg, b: "What would rot on your RAG corpus", t: "Calendar reminder in OPS.md" },
    { l: "CI matrix", href: L.pytest, b: "lint + unit + eval-smoke", t: "Document" },
    { l: "Friday: MLOps track note", href: L.mlops, b: "TRACK.md primary=mlops or not", t: "Push" }
  ]),
  W(70, 18, "prod", "Deepen LLM infra", "Even on CPU, know the words.", [
    { l: "vLLM advanced: paged attention page", href: L.vllm, b: "Explain like a teammate", t: "1 page" },
    { l: "Speculative decoding skim", href: L.vllm, b: "Notes", t: "Optional" },
    { l: "Tokenizer fast path", href: L.transformers, b: "Batch tokenize", t: "Script" },
    { l: "Gateway: many models one API", href: L.fastapi, b: "model= name routing", t: "Two fake backends" },
    { l: "Friday: infra-track", href: L.vllm, b: "Update TRACK.md", t: "Push" }
  ]),
  W(71, 18, "prod", "Deepen agents", "Orchestration as a discipline.", [
    { l: "LangGraph durable execution docs/course recap", href: L.langgraph, b: "Crash-safe workflow", t: "Test kill -9 mid-run if you can" },
    { l: "Tool sandboxing notes", href: L.owaspLlm, b: "No raw shell for the LLM", t: "Allowlist" },
    { l: "Planner evals", href: L.evals, b: "Did it pick the right tool?", t: "Metric" },
    { l: "Memory poisoning", href: L.owaspLlm, b: "Attack memory, then isolate", t: "Test" },
    { l: "Friday: agents-track", href: L.langgraph, b: "TRACK.md", t: "Push" }
  ]),
  W(72, 18, "prod", "Phase 4 gate", "Production-literate.", [
    { l: "Re-read OWASP list", href: L.owaspLlm, b: "Score your apps 0–2 each item", t: "table" },
    { l: "Re-read COST.md and OBS.md", href: L.mlopsOrg, b: "Update numbers", t: "Honest" },
    { l: "Pin repos: rag, agent, lora/serve, security", href: L.gitHubGit, b: "4 pins", t: "Profile" },
    { l: "Write specialization paragraph", href: L.gitHubGit, b: "Primary track + why", t: "for applications" },
    { l: "phase-4-done", href: L.mlops, b: "LEARNING.md months 14–18", t: "Tag" }
  ]),
  W(73, 19, "capstone", "Flagship spec", "One product, ruthless scope.", [
    { l: "System design primer warmup", href: L.systemDesign, b: "SPEC.md: user, job-to-be-done, non-goals", t: "One week to spec is allowed" },
    { l: "Architecture v0", href: L.zoomcamp, b: "Components + data stores", t: "Boring tech" },
    { l: "Eval plan first", href: L.ragas, b: "How you will know it works", t: "15 goldens" },
    { l: "Threat model one page", href: L.owaspLlm, b: "THREAT.md", t: "From phase 4" },
    { l: "Friday: spec freeze", href: L.gitHubGit, b: "No extra features for 6 weeks", t: "Push" }
  ]),
  W(74, 19, "capstone", "Flagship vertical slice", "A thin path that works.", [
    { l: "Implement retrieval or core model path", href: L.chroma, b: "Working on 1 document set", t: "Demo to yourself" },
    { l: "API contract", href: L.fastapi, b: "OpenAPI", t: "Frozen fields" },
    { l: "Minimal UI", href: L.fastapi, b: "Ugly is fine, usable", t: "One HTML" },
    { l: "3 goldens pass", href: L.evals, b: "CI", t: "Keep going" },
    { l: "Friday: slice recorded", href: L.gitHubGit, b: "DEMO.md updated", t: "Push" }
  ]),
  W(75, 19, "capstone", "Flagship depth", "Quality, not features.", [
    { l: "Error analysis week", href: L.ragas, b: "20 real questions", t: "Fix chunking or prompts" },
    { l: "Citations and I don't know", href: L.prompt, b: "Never invent sources", t: "Tests" },
    { l: "Latency pass", href: L.fastapi, b: "Measure p50/p95 locally", t: "notes" },
    { l: "Logging pass", href: L.mlflow, b: "request_id through the stack", t: "Works" },
    { l: "Friday: quality log", href: L.gitHubGit, b: "what improved", t: "Push" }
  ]),
  W(76, 19, "capstone", "Flagship harden", "The boring week that gets you hired.", [
    { l: "Tests to 20", href: L.pytest, b: "Unit + API + 1 e2e script", t: "Green" },
    { l: "Docker compose", href: L.docker, b: "One command up", t: "README" },
    { l: "Security checklist", href: L.owaspLlm, b: "Re-attack", t: "Patch" },
    { l: "README hiring-manager pass", href: L.gitHubGit, b: "Problem, demo, architecture, evals, limits", t: "No hype" },
    { l: "Friday: flagship-v1", href: L.gitHubGit, b: "Tag", t: "Push" }
  ]),
  W(77, 20, "capstone", "Flagship v1.1", "One sharp extra, not ten.", [
    { l: "User-requested feature you actually need", href: L.fastapi, b: "Ship it", t: "Eval still green" },
    { l: "Streaming if missing", href: L.fastapi, b: "Tokens on screen", t: "Works" },
    { l: "Feedback loop", href: L.fastapi, b: "Thumbs stored", t: "Weekly review note" },
    { l: "Corpus update playbook", href: L.chroma, b: "How to add a PDF", t: "docs" },
    { l: "Friday: v1.1", href: L.gitHubGit, b: "Changelog", t: "Push" }
  ]),
  W(78, 20, "capstone", "Second system or deepen", "Breadth if flagship is solid.", [
    { l: "Decide: second app vs deepen flagship", href: L.gitHubGit, b: "Write the decision", t: "Don't collect toys" },
    { l: "If second: spec 1 page", href: L.systemDesign, b: "Even smaller", t: "or skip to deepen evals" },
    { l: "Implement 2 days of core", href: L.langgraph, b: "or improve agent graph on flagship", t: "Working" },
    { l: "Evals", href: L.evals, b: "Goldens", t: "Table" },
    { l: "Friday: status", href: L.gitHubGit, b: "Honest", t: "Push" }
  ]),
  W(79, 20, "capstone", "Writing like an engineer", "Papers and posts.", [
    { l: "Read one paper from your stack on Papers with Code", href: L.papers, b: "One-page summary in your words", t: "No plagiarism" },
    { l: "Attention paper figures again", href: L.attention, b: "Teach-back", t: "To LEARNING.md" },
    { l: "Blog: how I eval RAG", href: L.gitHubGit, b: "800 words in repo /docs", t: "Show tables" },
    { l: "Blog: failure story", href: L.gitHubGit, b: "A bug that taught you", t: "Humility" },
    { l: "Friday: two posts linked from profile", href: L.gitHubGit, b: "URLs in README", t: "Push" }
  ]),
  W(80, 20, "capstone", "Flagship project bar", "Project Flagship product.", [
    { l: "Record DEMO.md as if a video script", href: L.gitHubGit, b: "90 seconds", t: "Tight" },
    { l: "Architecture PNG or mermaid text", href: L.systemDesign, b: "In README", t: "Clear" },
    { l: "License, model cards, data cards", href: L.hfHub, b: "Complete", t: "Legal-ish hygiene" },
    { l: "Ask a friend to follow README only", href: L.gitHubGit, b: "Fix the first 3 confusions", t: "UX" },
    { l: "Friday: tag flagship", href: L.gitHubGit, b: "This is the one you send", t: "Push" }
  ]),
  W(81, 21, "capstone", "Algorithms for interviews", "You still need this.", [
    { l: "Neetcode roadmap start — arrays", href: L.leetcode, b: "5 problems timed", t: "Write patterns.md" },
    { l: "Hash maps / two pointers", href: L.leetcode, b: "5 problems", t: "Solutions in repo interviews/" },
    { l: "Sliding window / stacks", href: L.leetcode, b: "5 problems", t: "Patterns" },
    { l: "Trees / BFS DFS", href: L.leetcode, b: "5 problems", t: "Draw first" },
    { l: "Friday: 20 problems logged", href: L.leetcode, b: "Don't lie about time", t: "Push" }
  ]),
  W(82, 21, "capstone", "More DS&A + Python", "University algorithms class helps — prove it in code.", [
    { l: "Heaps / intervals", href: L.leetcode, b: "5 problems", t: "Notes" },
    { l: "Graphs", href: L.leetcode, b: "5 problems", t: "BFS/DFS templates" },
    { l: "DP lite", href: L.leetcode, b: "3 problems only", t: "Don't drown" },
    { l: "Implement LRU or trie", href: L.leetcode, b: "From scratch", t: "Test" },
    { l: "Friday: templates.md", href: L.leetcode, b: "Your snippets", t: "Push" }
  ]),
  W(83, 21, "capstone", "ML / LLM interview questions", "Talk like you built it.", [
    { l: "Rehearse backprop 5 minutes out loud", href: L.b1bnn, b: "Record notes of stumbles", t: "Fix" },
    { l: "Bias/variance, leakage, metrics", href: L.ng, b: "Cheat sheet from memory", t: "Then check" },
    { l: "Design a RAG system on a whiteboard", href: L.systemDesign, b: "Write the talk track", t: "Latency, evals, fail closed" },
    { l: "Design an agent safely", href: L.owaspLlm, b: "Tools, sandbox, human in loop", t: "Talk track" },
    { l: "Friday: interview/answers.md", href: L.systemDesign, b: "Not memorized essays — bullets", t: "Push" }
  ]),
  W(84, 21, "capstone", "System design interviews", "AI + backend.", [
    { l: "Primer: unique IDs, storage, caches", href: L.systemDesign, b: "Notes", t: "Relate to your API" },
    { l: "Design ChatGPT-like (tiny)", href: L.systemDesign, b: "Gateway, queues, KV, GPU pool", t: "1 page" },
    { l: "Design recommendation or ranking", href: L.sklearn, b: "Online/offline", t: "1 page" },
    { l: "Tradeoff drills", href: L.systemDesign, b: "SQL vs vector DB vs files", t: "Your flagship" },
    { l: "Friday: 3 designs in repo", href: L.systemDesign, b: "interview/designs", t: "Push" }
  ]),
  W(85, 22, "capstone", "Open source", "Visible work with others.", [
    { l: "Find a good first issue in a tool you use", href: L.langchain, b: "Read contributing.md", t: "Don't spam" },
    { l: "Reproduce a bug or docs typo", href: L.hfCourse, b: "Tiny PR or docs PR", t: "Quality" },
    { l: "Read a mature codebase 1 hour", href: L.transformers, b: "Map modules", t: "NOTES" },
    { l: "Improve YOUR docs from OSS lessons", href: L.gitHubGit, b: "Issue templates maybe", t: "Nice" },
    { l: "Friday: link the PR or the attempt", href: L.gitHubGit, b: "Honesty if not merged", t: "Push" }
  ]),
  W(86, 22, "capstone", "Polish all pinned repos", "Five-star hygiene.", [
    { l: "Clone your profile as a stranger", href: L.gitHubGit, b: "Fix broken READMEs", t: "All pins" },
    { l: "Delete or archive junk", href: L.gitHubGit, b: "Signal not noise", t: "Archive" },
    { l: "English pass", href: L.gitHubGit, b: "Clear simple sentences", t: "No hype" },
    { l: "Pin order: flagship, RAG, agent, serve, API", href: L.gitHubGit, b: "Matches story", t: "Done" },
    { l: "Friday: profile screenshot in LEARNING.md", href: L.gitHubGit, b: "This is your storefront", t: "Push" }
  ]),
  W(87, 22, "capstone", "Papers that matter", "Taste.", [
    { l: "Attention is all you need — methods skim", href: L.attention, b: "What you still don't get", t: "List" },
    { l: "One RAG survey or LlamaIndex blog + a paper", href: L.papers, b: "Notes", t: "How it differs from you" },
    { l: "One agent paper (ReAct or similar via PwC)", href: L.papers, b: "Notes", t: "vs LangGraph" },
    { l: "One systems paper or vLLM blog/docs", href: L.vllm, b: "Notes", t: "Batching" },
    { l: "Friday: papers/ four summaries", href: L.papers, b: "Your words", t: "Push" }
  ]),
  W(88, 22, "capstone", "Teach to learn", "If you can teach it, you own it.", [
    { l: "Write a tutorial: your first FastAPI+model", href: L.fastapi, b: "For a student like you last year", t: "docs/teach" },
    { l: "Write: RAG eval in practice", href: L.ragas, b: "With your numbers", t: "docs/teach" },
    { l: "Write: prompt injection on my bot", href: L.owaspLlm, b: "Responsible disclosure style", t: "docs/teach" },
    { l: "Record outline of a 10-min talk", href: L.gitHubGit, b: "Talk.md", t: "University meetup maybe" },
    { l: "Friday: teaching index", href: L.gitHubGit, b: "Links on profile", t: "Push" }
  ]),
  W(89, 23, "capstone", "Mock interviews", "Mouth + keyboard.", [
    { l: "Neetcode 4 timed mediums", href: L.leetcode, b: "40 min", t: "Review solutions after" },
    { l: "Explain your flagship out loud", href: L.gitHubGit, b: "Script then no script", t: "Record stumbles" },
    { l: "ML deep dive mock", href: L.ng, b: "They challenge your metric", t: "Defend" },
    { l: "Behavioral: farm → Riga → foundry", href: L.gitHubGit, b: "3 stories: conflict, failure, leadership", t: "True" },
    { l: "Friday: mock log", href: L.leetcode, b: "What broke", t: "Push" }
  ]),
  W(90, 23, "capstone", "More mocks + gaps", "Fill holes.", [
    { l: "Weak DS&A topic", href: L.leetcode, b: "5 problems", t: "That topic" },
    { l: "Weak ML topic", href: L.d2l, b: "Relearn one chapter", t: "Code it" },
    { l: "Weak systems topic", href: L.systemDesign, b: "Re-design with numbers", t: "Back of envelope" },
    { l: "Weak security topic", href: L.owaspLlm, b: "New attack, patch", t: "Log" },
    { l: "Friday: gap list shrinking", href: L.gitHubGit, b: "3 gaps left", t: "Push" }
  ]),
  W(91, 23, "capstone", "Company literacy", "xAI, OpenAI, Tesla-shaped work.", [
    { l: "Read engineering blogs / papers from labs (via Papers with Code filter)", href: L.papers, b: "What they optimize", t: "Notes — no leaking secrets, public only" },
    { l: "vLLM + serving is Tesla-adjacent industrial", href: L.vllm, b: "Write why reliability > demo", t: "page" },
    { l: "Agents + tools is product lab work", href: L.langgraph, b: "Write reliability bar", t: "page" },
    { l: "Autograd roots (Karpathy) still asked", href: L.karpathy, b: "Re-derive a graph", t: "From memory" },
    { l: "Friday: target roles list", href: L.gitHubGit, b: "ML infra / LLM eng / applied", t: "Not 'AI anything'" }
  ]),
  W(92, 23, "capstone", "Applications packet", "The artifacts.", [
    { l: "CV one page", href: L.gitHubGit, b: "cv.md — impact bullets from projects", t: "Numbers" },
    { l: "GitHub profile README", href: L.gitHubGit, b: "Who you are, what to click", t: "Farm origin is a strength" },
    { l: "Email / message templates", href: L.gitHubGit, b: "Short, specific, one link", t: "No novel" },
    { l: "List 20 companies/labs", href: L.gitHubGit, b: "Not only the three logos", t: "EU + US remote realism" },
    { l: "Friday: packet folder", href: L.gitHubGit, b: "applications/", t: "Push" }
  ]),
  W(93, 24, "capstone", "Apply while building", "Don't wait to be perfect.", [
    { l: "Send 3 thoughtful applications", href: L.gitHubGit, b: "Log in applications/log.csv", t: "Specific work cited" },
    { l: "Improve flagship from a rejection hypothetical", href: L.ragas, b: "One eval better", t: "Ship" },
    { l: "3 more applications", href: L.gitHubGit, b: "Log", t: "Iterate message" },
    { l: "Public learning log excerpt", href: L.gitHubGit, b: "2-year graph of tags", t: "Story" },
    { l: "Friday: pipeline live", href: L.gitHubGit, b: "You are in motion", t: "Push" }
  ]),
  W(94, 24, "capstone", "Interview loops", "Treat them as another eval set.", [
    { l: "Post-mortem a practice loop", href: L.leetcode, b: "Scoring rubric for yourself", t: "Code, ML, design, behavioral" },
    { l: "Redo weakest system design", href: L.systemDesign, b: "New one-pager", t: "Numbers" },
    { l: "Redo weakest coding pattern", href: L.leetcode, b: "5 problems", t: "Timed" },
    { l: "Flagship live demo rehearsal", href: L.fastapi, b: "Failure injection", t: "Wifi down story" },
    { l: "Friday: loop-ready checklist", href: L.gitHubGit, b: "Yes/no", t: "Push" }
  ]),
  W(95, 24, "capstone", "Offer-level polish", "Calm professional.", [
    { l: "All pins reviewed", href: L.gitHubGit, b: "Licenses, dead links", t: "Fix" },
    { l: "Security pass on public repos", href: L.owaspLlm, b: "No keys, no private data", t: "Scan" },
    { l: "LEARNING.md final index", href: L.gitHubGit, b: "96 weeks compressed to 2 pages", t: "Story" },
    { l: "Thank-you notes to mentors/friends", href: L.gitHubGit, b: "Not a repo task — do it anyway", t: "People" },
    { l: "Friday: freeze public story", href: L.gitHubGit, b: "This is you", t: "Push" }
  ]),
  W(96, 24, "capstone", "Phase 5 gate — foundry open", "You can train, ship, and explain.", [
    { l: "Re-run flagship evals", href: L.ragas, b: "Still green?", t: "Fix rot" },
    { l: "Re-run agent goldens if separate", href: L.langgraph, b: "Green?", t: "Fix" },
    { l: "Read your week 1 LEARNING.md", href: L.gitHubGit, b: "Write a letter to week-1 you", t: "Keep it" },
    { l: "Plan the next 90 days of work", href: L.mlopsOrg, b: "Job or master's or product", t: "Written" },
    { l: "phase-5-done — two years", href: L.gitHubGit, b: "Tag foundry-complete", t: "You did not skip Friday pushes" }
  ])
];

export function weekById(id: number) {
  return WEEKS.find((w) => w.id === id);
}

export const TOTAL_DAYS = WEEKS.length * 5;
