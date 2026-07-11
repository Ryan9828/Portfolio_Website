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
  icon: 'LineChart' | 'ShoppingBag' | 'ShieldAlert' | 'Landmark' | 'Cpu' | 'Bot' | 'Scale'
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
    tagline: 'A self-monitoring risk tracker for an investment portfolio, with AI-powered news analysis',
    description:
      "Tracks how much risk an investment portfolio is carrying, and updates itself automatically every weekday — no one has to touch it. Each run recalculates how much the portfolio could realistically lose in a bad stretch (a standard risk measure called Value-at-Risk), checks that estimate against what actually happened, and automatically flags anything that looks off. On top of that, an AI layer reads company news and turns it into an early risk signal, flagging that volatility may be coming before it shows up in the price data.",
    flagship: true,
    accent: 'green',
    icon: 'LineChart',
    techStack: ['Python', 'GARCH/EGARCH', 'Claude API', 'GitHub Actions', 'Streamlit', 'pytest'],
    metrics: [
      { value: '4 VaR models', label: 'independent methods, cross-checked' },
      { value: '500 days', label: 'walk-forward backtest, Basel traffic-light' },
      { value: '32 tests', label: 'in CI, incl. end-to-end pipeline run' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Portfolio_Risk_Platform', status: 'live' },
      liveDemo: {
        label: 'Live Dashboard',
        url: 'https://portfolioriskplatform-iysoqtl8vfnwclnujhak2c.streamlit.app/',
        status: 'live',
        caption: 'Free-hosted app — may take ~30s to wake up',
      },
    },
  },
  {
    slug: 'shelfsense',
    title: 'ShelfSense',
    tagline: 'A product recommender for online shopping, built around an honest negative result',
    description:
      "A \"you might also like\" recommendation engine for an online store, trained on real H&M purchase data. The textbook approach (collaborative filtering) lost to a simple best-sellers baseline in my offline A/B test, so I kept the losing model in the repo for reproducibility and redesigned the system around category-affinity routing, which personalises results while matching the baseline. There's a live demo where you can search the catalog as a brand-new shopper and watch the cold-start path handle it in real time.",
    flagship: true,
    accent: 'purple',
    icon: 'ShoppingBag',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'implicit (ALS)', 'Docker'],
    metrics: [
      { value: '~3,066 shoppers', label: 'real H&M purchase histories in the offline test' },
      { value: '3 routing tiers', label: 'affinity / content / popularity by history depth' },
      { value: '95% CI', label: 'paired-bootstrap A/B test vs popularity baseline' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/ShelfSense', status: 'live' },
      apiDocs: { label: 'API Docs', url: 'https://shelfsense-er6i.onrender.com/docs', status: 'live' },
      liveDemo: {
        label: 'Storefront Demo',
        url: 'https://shelfsense-xwdd99njvxbzscfj5ankjk.streamlit.app/',
        status: 'live',
        caption: 'Free-hosted app — may take ~30s to wake up',
      },
    },
  },
  {
    slug: 'fraud-detection',
    title: 'LSTM Fraud Detection & Deployment',
    tagline: 'Real-time credit card fraud detection, deployed as a live API',
    description:
      "Flags likely-fraudulent credit card transactions in real time, trained on 1.85M transactions. The LSTM reads each customer's recent purchase history as a sequence, because fraud shows up as a change in spending pattern rather than a single suspicious charge. I tuned the alert threshold against the dollar cost of missed fraud vs. false alarms, then packaged the model into a FastAPI service and deployed it on AWS for real-time checks.",
    flagship: false,
    accent: 'pink',
    icon: 'ShieldAlert',
    techStack: ['Python', 'TensorFlow / Keras', 'FastAPI', 'Docker', 'AWS EC2'],
    metrics: [
      { value: '~3× cheaper', label: 'fraud cost vs a standard alert threshold' },
      { value: '32 transactions', label: "of history checked per customer" },
      { value: '0.9865 / 0.9993', label: 'PR-AUC / ROC-AUC on held-out test data' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Fraud-Detection-Project', status: 'live' },
    },
  },
  {
    slug: 'lendingclub-loan-analytics',
    title: 'LendingClub Loan Analytics',
    tagline: 'Does raising interest rates actually protect a lender? This analysis says no.',
    description:
      "An analysis of 30M+ real loan applications, answering a question any investor would ask: do higher interest rates scare off borrowers, and can rates be used to boost returns? Both answers were no. Loan volume tracks how many applications the platform approves rather than the price, and returns were highest in the lowest-rate segment and fell steadily from there — direct evidence against chasing returns through higher rates. The findings back a safer recommended pricing strategy, presented in an interactive Tableau dashboard for non-technical stakeholders.",
    flagship: false,
    accent: 'yellow',
    icon: 'Landmark',
    techStack: ['Python', 'statsmodels (SARIMAX)', 'scikit-learn', 'Tableau', 'FRED API'],
    metrics: [
      { value: '30M+', label: 'real loan applications analysed' },
      { value: '128 months', label: 'of volume forecast with SARIMAX' },
      { value: '3×', label: 'higher default rate in riskier grades' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Loan_project', status: 'live' },
    },
  },
  {
    slug: 'toxicity-bias-audit',
    title: 'Toxicity Bias Audit',
    tagline: 'Do toxicity classifiers punish comments that mention identity? An NLP fairness audit.',
    description:
      "Toxicity models often flag harmless comments just for mentioning an identity group — in the Jigsaw dataset, comments mentioning \"black\" are labelled toxic 31% of the time against an 8% average, and models learn that shortcut. I implemented the competition's bias metric from scratch, then tested the same reweighting mitigation on two model classes. On the TF-IDF baseline it only moved errors between subgroups (a statistical tie overall); on a fine-tuned DistilRoBERTa it produced a genuine, significant improvement. Every claim carries a paired-bootstrap confidence interval, and the README reports the remaining failures as plainly as the wins.",
    flagship: false,
    accent: 'green',
    icon: 'Scale',
    techStack: ['Python', 'Hugging Face Transformers', 'PyTorch', 'scikit-learn', 'pytest'],
    metrics: [
      { value: '1.8M', label: 'comments audited across 9 identity subgroups' },
      { value: '2,000', label: 'bootstrap resamples behind every claim' },
      { value: '39 tests', label: 'incl. hand-computed known-answer checks' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Toxicity-Bias-Audit', status: 'live' },
      liveDemo: {
        label: 'Live Demo',
        url: 'https://toxicity-bias-audit-u6ehqytyyzyeqxfz8mphf5.streamlit.app/',
        status: 'live',
        caption: 'Free-hosted app — may take ~30s to wake up',
      },
    },
  },
  {
    slug: 'iot-device-classifier',
    title: 'IoT Device Classifier — KDDI Capstone',
    tagline: "Identifying what's on a network, without ever looking at the data itself",
    description:
      "Built with KDDI, a Japanese telecom company, to identify what kind of smart device (camera, speaker, etc.) is connected to a network using only traffic patterns — never the actual data being sent, which matters for user privacy. Two hard problems drove the work: the model kept going stale as devices received software updates, and one device's usage pattern shifted so much between training and testing that the model initially failed to recognise it at all. Diagnosing and fixing both required proper investigation into distribution shift, beyond simply retraining. The code stays private under a data-sensitivity agreement with KDDI; I'm happy to walk through the methodology in an interview.",
    flagship: false,
    accent: 'blue',
    icon: 'Cpu',
    techStack: ['Python', 'scikit-learn (Random Forest)', 'LightGBM', 'pandas'],
    metrics: [
      { value: '19M+', label: 'network records analysed' },
      { value: '25 devices', label: 'types identified from traffic alone' },
      { value: '86%', label: 'accuracy on out-of-time test data' },
    ],
    links: {
      github: { label: 'Code not public', url: null, status: 'none' },
    },
  },
  {
    slug: 'job-application-assistant',
    title: 'Job Application Assistant',
    tagline: 'A multi-agent pipeline that researches roles and drafts tailored applications',
    description:
      "A multi-agent system I built to run my own job search end to end. Specialised agents split the work — one scrapes and filters 5 job boards daily, one researches the company, one drafts a tailored resume and cover letter — and a separate reviewer agent grades every draft against a scoring rubric before anything reaches me for final review. Nothing is auto-submitted; the interesting engineering is the orchestration and the self-grading eval loop that keeps each agent focused on one role at a time instead of drifting across many.",
    flagship: false,
    accent: 'orange',
    icon: 'Bot',
    techStack: ['Python', 'Claude API', 'Multi-agent orchestration', 'Playwright', 'Pandoc'],
    metrics: [
      { value: '4 agents', label: 'research, drafting, QA & orchestration' },
      { value: '100-pt rubric', label: 'reviewer agent gates drafts at a score of 75+' },
      { value: '5 job boards', label: 'scraped and filtered automatically, every day' },
    ],
    links: {
      github: { label: 'View Code', url: null, status: 'none' },
    },
    narrativeOnly: true,
  },
]
