export type LinkStatus = 'live' | 'pending' | 'none'

export interface ProjectLink {
  label: string
  url: string | null
  status: LinkStatus
  caption?: string
}

export interface Metric {
  value: string
  label: string
}

export type AccentColor = 'green' | 'purple' | 'blue' | 'yellow' | 'orange' | 'pink'

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  flagship: boolean
  accent: AccentColor
  icon: 'LineChart' | 'ShoppingBag' | 'ShieldAlert' | 'Landmark' | 'Cpu' | 'Bot'
  techStack: string[]
  metrics: Metric[]
  links: {
    github: ProjectLink
    liveDemo?: ProjectLink
    apiDocs?: ProjectLink
  }
  narrativeOnly?: boolean
}

export const projects: Project[] = [
  {
    slug: 'portfolio-risk-platform',
    title: 'Portfolio Market-Risk Platform',
    tagline: 'A live, self-monitoring GARCH/VaR system with LLM-powered announcement intelligence',
    description:
      'Every weekday after ASX close, a GitHub Actions pipeline ingests prices, refits GARCH volatility models across a 3-ETF portfolio, computes VaR and Expected Shortfall four ways, backtests itself Basel-style, runs data-quality and drift checks, files GitHub issues on alerts, and publishes everything to a public dashboard. An LLM layer converts ASX announcements into typed risk signals, evaluated against a blind golden set. Not a notebook — a production system that runs unattended.',
    flagship: true,
    accent: 'green',
    icon: 'LineChart',
    techStack: ['Python', 'GARCH/EGARCH', 'Claude API', 'GitHub Actions', 'Streamlit', 'pytest'],
    metrics: [
      { value: '4 VaR/ES methods', label: 'x2 horizons, x2 confidence levels' },
      { value: '24 tests', label: 'fully offline, gate every push' },
      { value: '$0', label: 'infra cost (free-tier only)' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Portfolio_Risk_Platform', status: 'live' },
      liveDemo: {
        label: 'Live Dashboard',
        url: 'https://portfolioriskplatform-iysoqtl8vfnwclnujhak2c.streamlit.app/',
        status: 'live',
        caption: 'Streamlit Community Cloud cold start — may take ~30s to wake up',
      },
    },
  },
  {
    slug: 'shelfsense',
    title: 'ShelfSense',
    tagline: 'A hybrid retail recommender, built on a negative result that survived scrutiny',
    description:
      'A hybrid product recommender trained on real H&M transaction data, benchmarking item-based collaborative filtering against a category-affinity + content-based hybrid via a paired-bootstrap offline A/B test. Item-CF lost decisively to a plain popularity baseline — and that finding stayed in the repo instead of being tuned away, driving an actual architecture change. Served via FastAPI with a 3-page Streamlit storefront demo.',
    flagship: true,
    accent: 'purple',
    icon: 'ShoppingBag',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'implicit (ALS)', 'Docker'],
    metrics: [
      { value: '~3,066', label: 'customers, real H&M transactions' },
      { value: '2,000-resample', label: 'paired bootstrap A/B test' },
      { value: 'Ties baseline', label: '95% CI includes zero' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/ShelfSense', status: 'live' },
      apiDocs: { label: 'API Docs', url: 'https://shelfsense-er6i.onrender.com/docs', status: 'live' },
      liveDemo: {
        label: 'Storefront Demo',
        url: 'https://shelfsense-xwdd99njvxbzscfj5ankjk.streamlit.app/',
        status: 'live',
        caption: 'Streamlit Community Cloud cold start — may take ~30s to wake up',
      },
    },
  },
  {
    slug: 'fraud-detection',
    title: 'LSTM Fraud Detection & Deployment',
    tagline: 'Real-time fraud scoring, from notebook to a deployed AWS API',
    description:
      "An LSTM sequence classifier trained on 1.85M credit card transactions, learning a sliding window of each cardholder's history rather than classifying transactions in isolation. Four notebooks progress from baselines through XGBoost to the final deep-learning model, engineering burst-fraud signals (time since last transaction, prior amount) along the way. Threshold tuned against an actual cost model (LexisNexis True Cost of Fraud) instead of F1. Packaged into a FastAPI service (GET /health, POST /predict), containerised with Docker, and deployed to AWS EC2 for real-time inference.",
    flagship: false,
    accent: 'pink',
    icon: 'ShieldAlert',
    techStack: ['Python', 'TensorFlow / Keras', 'FastAPI', 'Docker', 'AWS EC2'],
    metrics: [
      { value: '0.9865 / 0.9993', label: 'PR-AUC / ROC-AUC' },
      { value: '32-step', label: 'per-card transaction windows' },
      { value: '97.5%', label: 'fraud caught at cost-optimal threshold' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Fraud-Detection-Project', status: 'live' },
    },
  },
  {
    slug: 'lendingclub-loan-analytics',
    title: 'LendingClub Loan Analytics',
    tagline: 'Demand forecasting, default risk, and return optimisation across 30M+ loan records',
    description:
      "An investor-focused analysis of LendingClub's public lending data (2007-2018), testing whether interest rates suppress loan demand and whether they can be used to maximise investor returns. A 12:1 rejected-to-accepted ratio pointed to platform policy — not rates — as the real demand constraint, confirmed via SARIMAX(3,0,0)x(1,0,1) time-series modelling. Logistic regression then documented adverse selection: the highest-rate decile defaults at roughly 3x the lowest, and grade-level pricing turned out to be inefficient (A-C overpriced, D-G underpriced relative to realised risk). Delivered as a 4-dashboard Tableau workbook alongside the analysis.",
    flagship: false,
    accent: 'yellow',
    icon: 'Landmark',
    techStack: ['Python', 'statsmodels (SARIMAX)', 'scikit-learn', 'Tableau', 'FRED API'],
    metrics: [
      { value: '30M', label: 'loan records (2.26M accepted + 27.65M rejected)' },
      { value: '~5.8%', label: 'optimal investor rate identified' },
      { value: '3x', label: 'default rate: highest vs lowest rate decile' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Loan_project', status: 'live' },
    },
  },
  {
    slug: 'iot-device-classifier',
    title: 'IoT Device Classifier — KDDI Capstone',
    tagline: 'Identifying IoT device types from network metadata alone, at ISP scale',
    description:
      "A 25-class IoT device classifier built with KDDI Corporation (Japanese telco), working from 19.12M IPFIX network flow records — metadata only, no traffic content — enabling privacy-preserving device monitoring at ISP scale. Training on a single month caused a 25-point accuracy drop just one month later (concept drift), fixed with fixed-quota sampling of the most recent records per device. A second failure mode, label shift, showed up when one device's test-set volume jumped 15x versus training (8,284 to 124,193 records) with no warning in the training distribution. Capstone code is not publicly released due to data-sensitivity agreements with KDDI; this is a methodology write-up.",
    flagship: false,
    accent: 'blue',
    icon: 'Cpu',
    techStack: ['Python', 'scikit-learn (Random Forest)', 'LightGBM', 'pandas'],
    metrics: [
      { value: '19.12M', label: 'IPFIX records, 25 device classes' },
      { value: '86% / 78%', label: 'accuracy / Macro F1' },
      { value: '108 days', label: 'of real telco traffic data' },
    ],
    links: {
      github: { label: 'Code not public', url: null, status: 'none' },
    },
  },
  {
    slug: 'job-application-assistant',
    title: 'Job Application Assistant',
    tagline: 'A multi-agent Claude pipeline that automated my own graduate job search',
    description:
      'A two-phase AI pipeline automating the graduate job search workflow — daily scraping across 5 job sites, deduplicated and sorted into 4 relevance tiers, with on-demand per-job research, resume tailoring, verification, and cover letter generation. A conductor agent coordinates 4 specialised subagents, each with a scoped context window to prevent cross-contamination between jobs. An automated verification loop scores each tailored resume out of 100 (keyword coverage, format compliance, experience relevance, length) and re-feeds failures below 75 back to the tailoring agent, with a 2-retry cap before flagging for manual review.',
    flagship: false,
    accent: 'orange',
    icon: 'Bot',
    techStack: ['Python', 'Claude API', 'Multi-agent orchestration', 'Playwright', 'Pandoc'],
    metrics: [
      { value: '100+ hours', label: 'saved across a 3-month job search' },
      { value: '5 job sites', label: 'scraped and deduplicated daily' },
      { value: '4 subagents', label: 'researcher, tailor, verifier, cover letter' },
    ],
    links: {
      github: { label: 'View Code', url: null, status: 'none' },
    },
    narrativeOnly: true,
  },
]
