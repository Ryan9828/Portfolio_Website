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
    tagline: 'A self-monitoring risk tracker for an investment portfolio, with AI-powered news analysis',
    description:
      "Tracks how much risk an investment portfolio is carrying, and updates itself automatically every weekday — no one has to touch it. Each run recalculates how much the portfolio could realistically lose in a bad stretch (a standard risk measure called Value-at-Risk), checks that estimate against what actually happened, and automatically flags anything that looks off. On top of that, an AI layer reads company news and turns it into an early risk signal, flagging that volatility may be coming before it shows up in the price data.",
    flagship: true,
    accent: 'green',
    icon: 'LineChart',
    techStack: ['Python', 'GARCH/EGARCH', 'Claude API', 'GitHub Actions', 'Streamlit', 'pytest'],
    metrics: [
      { value: '4 ways', label: 'to estimate potential losses' },
      { value: '37 self-checks', label: 'tests + data monitors run on every update' },
      { value: '$0', label: 'to run — free hosting only' },
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
      "A \"you might also like\" recommendation engine for an online store, trained on real H&M purchase data. The obvious approach — recommending items that similar shoppers bought — actually performed worse than just showing best-sellers, so instead of quietly tuning that away, the finding was tested rigorously and used to redesign the system around what actually worked. There's a live demo where you can search the catalog as a brand-new shopper and see the recommendation engine handle it in real time.",
    flagship: true,
    accent: 'purple',
    icon: 'ShoppingBag',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'implicit (ALS)', 'Docker'],
    metrics: [
      { value: '~3,066', label: 'real H&M shoppers in the test' },
      { value: 'Rigorously tested', label: 'not just eyeballed' },
      { value: 'Ties the baseline', label: 'the fix works just as well as the simple option' },
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
      "Flags likely-fraudulent credit card transactions in real time, trained on 1.85M transactions. Instead of judging one transaction alone, it looks at a customer's recent purchase history — a fraudster's pattern of spending looks different, not just any single charge in isolation. The alert threshold was tuned against the actual dollar cost of missed fraud vs. false alarms, not a generic accuracy score, then packaged into a live API and deployed on AWS for real-time checks.",
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
      "An analysis of 30M+ real loan applications, answering a question any investor would ask: do higher interest rates scare off borrowers, and can rates be used to boost investor returns? Both turned out to be no — loan volume is driven by how many applications the platform approves, not the price, and it's lending to riskier people (not charging higher rates) that actually drives defaults. That finding fed into a recommended, safer pricing strategy, backed by an interactive dashboard built for non-technical stakeholders.",
    flagship: false,
    accent: 'yellow',
    icon: 'Landmark',
    techStack: ['Python', 'statsmodels (SARIMAX)', 'scikit-learn', 'Tableau', 'FRED API'],
    metrics: [
      { value: '30M', label: 'real loan applications analysed' },
      { value: '~5.8%', label: 'recommended interest rate' },
      { value: '3x', label: 'more often riskier borrowers default' },
    ],
    links: {
      github: { label: 'View Code', url: 'https://github.com/Ryan9828/Loan_project', status: 'live' },
    },
  },
  {
    slug: 'iot-device-classifier',
    title: 'IoT Device Classifier — KDDI Capstone',
    tagline: "Identifying what's on a network, without ever looking at the data itself",
    description:
      "Built with KDDI, a Japanese telecom company, to identify what kind of smart device (camera, speaker, etc.) is connected to a network — using only traffic patterns, never the actual data being sent, which matters for user privacy. Two tricky problems came up along the way: the model kept going stale as devices received software updates, and one device's usage pattern shifted so much between training and testing that the model didn't recognise it at all at first. Fixing both took real investigation, not just retraining with more data. Capstone code isn't public due to a data-sensitivity agreement with KDDI — this is a methodology write-up.",
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
    tagline: 'An AI tool I built to automate my own graduate job search',
    description:
      'Automates the entire job-search grind: it checks 5 job sites every day, filters out anything irrelevant, and for roles I flag as worth pursuing, it researches the company, drafts a tailored resume and cover letter, and grades its own work against a scoring checklist before showing it to me for final review. Several AI agents split the work — one researches, one writes, one checks quality — so each stays focused on a single job at a time instead of getting confused across many.',
    flagship: false,
    accent: 'orange',
    icon: 'Bot',
    techStack: ['Python', 'Claude API', 'Multi-agent orchestration', 'Playwright', 'Pandoc'],
    metrics: [
      { value: 'est. 100+ hrs', label: 'saved over a 3-month job search' },
      { value: '5 job sites', label: 'checked automatically, every day' },
      { value: '4 AI agents', label: 'splitting research, writing, and review' },
    ],
    links: {
      github: { label: 'View Code', url: null, status: 'none' },
    },
    narrativeOnly: true,
  },
]
