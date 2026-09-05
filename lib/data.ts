export const profile = {
  name: "Subhansu Pradhan",
  role: "Data Science student turning messy datasets into dashboards people read, models that hold up, and agents that check their own work.",
  photo: "/icons/Profile.jpeg",
  resumeUrl: "https://drive.google.com/file/d/1B_kMzfJkX-3hQMrspcK4c3TIxNUk6M4H/view?usp=drive_link",
  email: "subhansup27@gmail.com",
  github: "https://github.com/SubhansuPradhan",
  linkedin: "https://www.linkedin.com/in/subhansu-pradhan-sp040527",
  bio: [
    "I'm a final-year Computer Science (Data Science) student at GIET University, Odisha. Most of my work so far has been BI and predictive modeling — cleaning data, building Power BI dashboards, training models that get evaluated on real metrics, not vibes.",
    "Lately I've been pushing further into agentic AI: retrieval-augmented systems, and a multi-agent pipeline where one agent critiques and revises another's output before it ships.",
  ],
};

export const stats = [
  { num: "0.6 yrs", label: "hands-on experience across data analyst and AI/ML internships" },
  { num: "11", label: "projects shipped, from BI dashboards to agentic AI systems" },
  { num: "10+", label: "certifications completed across analytics, GenAI, and agentic AI" },
];

export const experience = [
  {
    when: "May – Aug 2026",
    role: "Data Analyst Intern",
    org: "7S IQ Private Limited · Remote",
    points: [
      "Cleaned and pre-processed datasets in Python, SQL, and Excel to keep data reliable before analysis.",
      "Ran exploratory data analysis to surface trends and patterns that mattered to the business.",
      "Built Power BI dashboards and reports laid out to be easy to read at a glance.",
      "Trained and evaluated machine learning models for predictive analytics work, including churn, fraud, and risk-scoring projects.",
    ],
  },
  {
    when: "Jan – Mar 2026",
    role: "AI-ML Virtual Intern",
    org: "AICTE – EduSkills · Supported by Google for Developers",
    points: [
      "Completed a 10-week virtual internship covering AI and machine learning fundamentals.",
      "Worked through guided modules on data analysis and model building.",
      "Built a working sense of where AI is actually useful, and how to approach real problems with it.",
    ],
  },
];

export type Project = {
  name: string;
  status?: "Flagship" | "In progress" | "Completed";
  summary: string;
  metric: string;
  tags: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "NexaFlow",
    status: "Flagship",
    summary:
      "A support agent built as a full RAG pipeline from scratch — custom chunking, embeddings via Sentence Transformers, retrieval through ChromaDB across a 16-document knowledge base. Sorts incoming users into three personas and adjusts tone and depth accordingly.",
    metric: "Escalates on keyword triggers, low retrieval confidence, or long back-and-forths — hands off to a human with a summary.",
    tags: ["Python", "Ollama / Llama 3.2", "ChromaDB", "AI Integration", "Sentence Transformers", "Streamlit", "RAG"],
    repo: "https://github.com/SubhansuPradhan/Nexaflow-Support-Agent",
  },
  {
    name: "AgentLab",
    status: "In progress",
    summary:
      "Current focus. A multi-agent LangGraph system with a critic-driven self-revision loop — one agent generates, another critiques against a rubric, and the output is revised before it's accepted.",
    metric: "Running locally on Ollama (qwen3.5:4b) to fit a 4GB VRAM laptop GPU.",
    tags: ["Python", "LangGraph", "LangChain", "PostgreSQL", "Sentence Transformers", "Streamlit", "Agentic AI"],
  },
  {
    name: "DataLystAI",
    status: "Completed",
    summary:
        "A local-first Streamlit app for conversational data analysis — upload CSVs and ask questions in plain English, powered by a local Ollama LLM with DuckDB/Pandas handling all calculations deterministically.",
    metric: "Anomaly detection via IQR, Z-Score, and Isolation Forest; automated business insight and data quality scoring.",
    tags: ["Python", "Streamlit", "DuckDB", "Scikit-learn", "Ollama", "RAG", "AI Integration"],
    repo: "https://github.com/SubhansuPradhan/DataLystAI",
  },
  {
    name: "Hospital Readmission Risk Analysis",
    status: "Completed",
    summary:
      "Analyzed 100K+ diabetic patient records across 130 US hospitals to find what actually drives 30-day readmissions.",
    metric: "Gradient Boosting model with SHAP, feeding a 4-page Power BI dashboard of risk scores.",
    tags: ["Python", "PostgreSQL", "Power BI", "DAX", "Machine Learning"],
    repo: "https://github.com/SubhansuPradhan/Hospital-Readmission-Risk-Analysis",
  },
  {
    name: "Retail Store Performance Analytics",
    status: "Completed",
    summary:
      "A pipeline for 9,994+ retail transactions with a PostgreSQL star schema and 11 SQL views for analysis.",
    metric: "Found heavy discounting was pushing margins as low as −93%.",
    tags: ["Python", "PostgreSQL", "DAX", "Power BI", "Machine Learning"],
    repo: "https://github.com/SubhansuPradhan/Retail-Store-Performance-Analytics",
  },
  {
    name: "Melbourne Data Quality Analysis",
    status: "Completed",
    summary:
        "End-to-end data quality pipeline on the Melbourne Housing Market dataset — profiling missingness patterns, classifying each column as MCAR, MAR, or MNAR, and applying a justified imputation technique per column rather than one blanket method.",
    metric: "Combined mode imputation, grouped-median imputation, and missingness-flagged KNN, validated with before/after distribution comparisons.",
    tags: ["Python", "PostgreSQL", "DAX", "Power BI", "Machine Learning"],
    repo: "https://github.com/SubhansuPradhan/Melbourne-Data-Quality-Analysis",
  },
  {
    name: "HR Attrition Analysis",
    status: "Completed",
    summary:
        "Attrition analysis on the IBM HR Analytics dataset (~1,470 employee records) — cleaning and feature engineering in Python, feeding a Power BI dashboard covering attrition segments and job-role/department breakdowns.",
    metric: "Pipeline scripted end-to-end: data cleaning → EDA → Power BI dashboard.",
    tags: ["Python", "PostgreSQL", "DAX", "Power BI", "Machine Learning"],
    repo: "https://github.com/SubhansuPradhan/HR_Attrition_Analysis",
  },
  {
    name: "ICU Early Warning System",
    status: "Completed",
    summary:
        "A clinical decision-support prototype that predicts patient deterioration risk at multiple time horizons (3h/6h/12h ahead) from vitals and lab trends, with a Streamlit dashboard for patient-wise risk monitoring. Built and tested on a synthetic MIMIC-style dataset, not real patient data.",
    metric: "Time-series feature engineering (rolling means, trend, variability) feeding an XGBoost model across multiple prediction horizons.",
    tags: ["Python", "XGBoost", "Streamlit", "Scikit-learn"],
    repo: "https://github.com/SubhansuPradhan/ICU-Early-Warning-System",
  },
  {
    name: "Attendance via Face Recognition",
    status: "Completed",
    summary:
        "A real-time attendance system using face detection and recognition over a webcam feed — collects and encodes known faces, then recognizes and logs attendance automatically as people appear on camera.",
    metric: "Built on the face_recognition/dlib pipeline with OpenCV, logging matches directly to a CSV attendance record.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    repo: "https://github.com/SubhansuPradhan/Attendance-Via-Face-Recognition",
  },
  {
    name: "Movie Recommendation System",
    status: "Completed",
    summary:
        "A content-based movie recommender built on the TMDB 5000 Movies dataset — vectorizes movie metadata (genres, cast, keywords, overview) and serves similarity-based suggestions through a Streamlit interface.",
    metric: "Precomputes a cosine-similarity matrix over vectorized movie features to rank and return the closest matches for a selected title.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    repo: "https://github.com/SubhansuPradhan/Movie-Recommendation-System",
  },
];

export type StackItem = { name: string; icon?: string };

export const stack: { group: string; items: StackItem[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", icon: "/icons/python.png" },
      { name: "R", icon: "/icons/r.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "HTML5", icon: "/icons/html5.png" },
      { name: "CSS3", icon: "/icons/css3.png" },
    ],
  },
  {
    group: "AI / ML & LLM",
    items: [
      { name: "LangChain", icon: "/icons/langchain.png" },
      { name: "LangGraph", icon: "/icons/langgraph.png" },
      { name: "TensorFlow", icon: "/icons/tensorflow.png" },
      { name: "PyTorch", icon: "/icons/pytorch.png" },
      { name: "Scikit-learn", icon: "/icons/scikit-learn.png" },
      { name: "ChatGPT", icon: "/icons/chatgpt.png" },
      { name: "Claude", icon: "/icons/claude.png" },
      { name: "Ollama", icon: "/icons/ollama.png" },
      { name: "RAG" },
      { name: "Agentic AI" },
      { name: "AI Integration" },
    ],
  },
  {
    group: "Data & tools",
    items: [
      { name: "Pandas", icon: "/icons/pandas.png" },
      { name: "NumPy", icon: "/icons/numpy.png" },
      { name: "Plotly", icon: "/icons/plotly.png" },
      { name: "Streamlit", icon: "/icons/streamlit.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
      { name: "Power BI", icon: "/icons/powerbi.png" },
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github_logo.png" },
      { name: "PyCharm", icon: "/icons/pycharm.png" },
      { name: "Antigravity", icon: "/icons/antigravity.png" },
      { name: "Jupyter", icon: "/icons/jupyter.png" },
      { name: "n8n", icon: "/icons/n8n.png" },
    ],
  },
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    detail: "Oracle · Artificial Intelligence · Machine Learning · Sep 2026",
  },
  {
    title: "Tata Group Data Analytics Job Simulation",
    detail: "Forage · GenAI-assisted EDA, no-code delinquency risk framework, AI-driven collections strategy",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    detail: "Forage · end-to-end data analysis, Tableau dashboard, Excel-based insight extraction",
  },
  {
    title: "Data Science for Engineers",
    detail: "NPTEL (IIT Madras) · Elite certification, 63% consolidated score · Jan–Mar 2026",
  },
  {
    title: "Generative AI Mastery Workshop",
    detail: "OpenAI Academy × NxtWave · India's Biggest GenAI Buildathon · Sep 2025",
  },
  {
    title: "Developer Foundations",
    detail: "CCBP 4.0 Academy (NxtWave) · Git, Command Line · May 2025",
  },
  {
    title: "Programming Foundations with Python",
    detail: "CCBP 4.0 Academy (NxtWave) · Python · Jan 2025",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    detail: "CCBP 4.0 Academy (NxtWave) · JavaScript · Feb 2025",
  },
  {
    title: "Introduction to Databases",
    detail: "CCBP 4.0 Academy (NxtWave) · SQL · Jul 2024",
  },
  {
    title: "Build Your Own Responsive Website",
    detail: "CCBP 4.0 Academy (NxtWave) · Bootstrap, Flexbox · Jun 2024",
  },
  {
    title: "Build Your Own Static Website",
    detail: "CCBP 4.0 Academy (NxtWave) · HTML, CSS, Bootstrap · Jun 2024",
  },
];

export const education = [
  {
    title: "B.Tech, Computer Science – Data Science",
    detail: "GIET University, Gunupur, Odisha · Aug 2023 – Present",
  },
  {
    title: "Intermediate / 12th",
    detail: "St. Xavier High School, Berhampur · April 2023",
  },
];
