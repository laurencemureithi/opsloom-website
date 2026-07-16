export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogCategories = [
  'All', 'AI', 'Manufacturing', 'Maintenance', 'Continuous Improvement',
  'Operations', 'Digital Transformation', 'Automation', 'Quality', 'Business Systems', 'Knowledge Management',
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'practical-ai-for-manufacturing',
    title: 'Practical AI for Manufacturing: Where to Start',
    excerpt: 'Most manufacturers know AI is coming. The question is where to start. This guide breaks down the most practical, highest-ROI AI use cases for manufacturing operations.',
    category: 'AI',
    author: 'Laurence Mureithi Magondu',
    date: '2025-06-10',
    readTime: '7 min read',
    content: 'Artificial intelligence in manufacturing is not about robots replacing humans. It is about augmenting human decisions with data-driven insight. The most successful AI implementations in manufacturing start not with the technology, but with the problem.\n\nThe highest-ROI AI use cases in manufacturing today are: predictive maintenance, anomaly detection in quality, demand forecasting, and process optimization. Each of these addresses a concrete, measurable pain point that every manufacturer faces.\n\nPredictive maintenance uses sensor data and historical failure patterns to predict when equipment will fail — before it fails. This allows maintenance teams to intervene proactively, scheduling repairs during planned downtime rather than reacting to emergencies.\n\nThe key is to start small. Pick one machine, one process, or one problem. Prove the value. Then expand. AI is not a single project — it is a capability you build incrementally.',
  },
  {
    id: '2',
    slug: 'eliminating-paper-from-the-shop-floor',
    title: 'Eliminating Paper from the Shop Floor: A Practical Guide',
    excerpt: 'Paper-based reporting is the silent killer of manufacturing efficiency. Here is a practical, step-by-step approach to going digital without disrupting operations.',
    category: 'Digital Transformation',
    author: 'Laurence Mureithi Magondu',
    date: '2025-05-28',
    readTime: '6 min read',
    content: 'Paper is comfortable. It is familiar, requires no training, and never crashes. But it is also invisible, unsearchable, and impossible to aggregate in real-time.\n\nThe first step in eliminating paper is not technology — it is identifying which paper processes cause the most pain. Start with the one that takes the most time, introduces the most errors, or delays the most decisions.\n\nFor most manufacturers, that is production reporting. Operators spend 30–60 minutes per shift filling paper logs. Supervisors spend hours aggregating. Management waits days for reports. Digitizing this single process can save hundreds of hours per month.\n\nThe key principle: the digital replacement must be simpler than the paper it replaces. If the digital form has more fields than the paper form, adoption will fail.',
  },
  {
    id: '3',
    slug: 'maintenance-kpis-that-matter',
    title: '5 Maintenance KPIs That Actually Matter',
    excerpt: 'Not all KPIs are created equal. These five maintenance metrics provide the most actionable insight into your maintenance operations.',
    category: 'Maintenance',
    author: 'Laurence Mureithi Magondu',
    date: '2025-05-15',
    readTime: '5 min read',
    content: 'Maintenance KPIs should drive action, not just fill dashboards. The five most actionable maintenance KPIs are: MTBF, MTTR, PM compliance, maintenance backlog, and maintenance cost as a percentage of asset replacement value.\n\nMTBF (Mean Time Between Failures) tells you how reliable your equipment is. MTTR (Mean Time To Repair) tells you how fast you respond. PM compliance tells you whether you are preventing failures before they happen. Backlog tells you if you are keeping up. Cost ratio tells you if your maintenance is economically sustainable.\n\nThe key is tracking these in real-time, not monthly. Monthly KPIs are lagging indicators. Real-time KPIs let you act before problems compound.',
  },
  {
    id: '4',
    slug: 'what-is-oee-and-why-it-matters',
    title: 'What is OEE and Why It Matters for Your Factory',
    excerpt: 'OEE is the gold standard for measuring manufacturing productivity. Here is what it is, how to calculate it, and why most factories get it wrong.',
    category: 'Operations',
    author: 'Laurence Mureithi Magondu',
    date: '2025-05-02',
    readTime: '6 min read',
    content: 'OEE (Overall Equipment Effectiveness) measures the percentage of planned production time that is truly productive. It combines three factors: availability, performance, and quality.\n\nA world-class OEE is 85%. Most factories operate at 60% or lower without knowing it. The gap between 60% and 85% represents enormous untapped capacity — capacity you already pay for but do not use.\n\nThe most common mistake is measuring OEE manually. Manual OEE is subjective, inconsistent, and always optimistic. Automated OEE calculation removes subjectivity and reveals the real numbers.',
  },
  {
    id: '5',
    slug: 'continuous-improvement-in-manufacturing',
    title: 'Continuous Improvement: From Slogan to System',
    excerpt: 'Continuous improvement is not a poster on the wall. It is a system. Here is how to build one that actually works.',
    category: 'Continuous Improvement',
    author: 'Laurence Mureithi Magondu',
    date: '2025-04-20',
    readTime: '8 min read',
    content: 'Continuous improvement fails when it is a slogan and succeeds when it is a system. The system has three components: a way to capture improvement ideas, a way to prioritize and implement them, and a way to measure the impact.\n\nMost manufacturers have the first piece — operators and supervisors have plenty of ideas. What they lack is a structured process to evaluate, prioritize, and implement those ideas, and then measure whether they worked.\n\nDigital tools make this system possible. An idea capture tool, a prioritization dashboard, and an impact tracker turn continuous improvement from a slogan into a measurable, repeatable process.',
  },
  {
    id: '6',
    slug: 'automation-first-manufacturing',
    title: 'Automation First: A New Mindset for Manufacturers',
    excerpt: 'Before adding headcount, ask: could this process be automated? An automation-first mindset transforms how manufacturers scale.',
    category: 'Automation',
    author: 'Laurence Mureithi Magondu',
    date: '2025-04-08',
    readTime: '5 min read',
    content: 'The automation-first mindset is simple: before adding a person to handle a process, ask whether the process can be automated. This does not mean replacing people — it means freeing people from repetitive, low-value work so they can focus on high-value tasks.\n\nThe best candidates for automation are processes that are: repetitive, rule-based, data-heavy, and prone to human error. In manufacturing, that describes a surprising number of processes — from production reporting to inventory updates to maintenance scheduling.\n\nStart by listing every repetitive process in your operation. For each, estimate the hours spent per week. The ones with the highest hours and the lowest complexity are your first automation targets.',
  },
];
