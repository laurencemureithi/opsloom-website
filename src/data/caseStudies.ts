export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  summary: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: { metric: string; value: string }[];
  lessons: string[];
  date: string;
  videoUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'engineering-maintenance-management-system',
    title: 'Engineering Maintenance Management System',
    summary: 'A comprehensive maintenance management system for an engineering firm to digitize maintenance workflows, track work orders, and monitor KPIs in real-time.',
    industry: 'Engineering',
    challenge: 'The engineering maintenance team managed work orders, asset histories, and PM schedules entirely on paper and spreadsheets. This led to missed preventive maintenance, lost work order history, no visibility into maintenance KPIs, and hours spent on manual reporting. Equipment downtime was increasing with no data to explain why.',
    solution: 'Opsloom designed and built a custom Engineering Maintenance Management System with digital work orders, an asset register, automated PM scheduling, spare parts tracking, and a real-time KPI dashboard. The system was mobile-friendly so technicians could update work orders from the field. Management gained a live dashboard showing MTBF, MTTR, PM compliance, and downtime trends.',
    technologies: ['Excel VBA', 'Custom Macros', 'KPI Dashboards'],
    results: [
      { metric: 'Manual reporting time', value: 'Significantly reduced' },
      { metric: 'PM compliance rate', value: 'Substantially improved' },
      { metric: 'Work order tracking', value: 'Fully digitized' },
      { metric: 'Maintenance visibility', value: 'Real-time' },
    ],
    lessons: [
      'Start with the most painful manual process — in this case, PM scheduling — to demonstrate value quickly.',
      'Mobile access for technicians is non-negotiable; desktop-only CMMS adoption always fails on the shop floor.',
      'KPI dashboards must be visible to both management and technicians to create shared accountability.',
    ],
    date: '2024-08-15',
    videoUrl: 'https://www.youtube.com/watch?v=8gC0yFUXqdo',
  },
  {
    id: '2',
    slug: 'production-reporting-automation',
    title: 'Production Reporting Automation',
    summary: 'Automated production reporting that replaced paper shift logs with real-time digital entry and live dashboards.',
    industry: 'Food Manufacturing',
    challenge: 'A food manufacturing plant relied on paper shift logs for production reporting. Operators spent significant time filling reports, supervisors spent hours aggregating data, and production numbers were often inaccurate due to transcription errors. Management received reports that were already outdated.',
    solution: 'Opsloom implemented an automated production reporting system with a simple, operator-friendly interface for real-time data entry. The system automatically calculates production metrics, tracks shift performance, and provides live dashboards instead of compiled reports.',
    technologies: ['Excel VBA', 'Automated Dashboards', 'Custom Forms'],
    results: [
      { metric: 'Operator reporting time', value: 'Substantially reduced' },
      { metric: 'Data accuracy', value: 'Significantly improved' },
      { metric: 'Report availability', value: 'Real-time vs. delayed' },
      { metric: 'Supervisor reporting', value: 'Automated' },
    ],
    lessons: [
      'The operator interface must be simpler than the paper form it replaces, or adoption will fail.',
      'Automated calculation removes the subjectivity that plagues manual production reporting.',
      'Digital shift handover alone saves more time than most plants realize.',
    ],
    date: '2025-01-10',
    videoUrl: 'https://www.youtube.com/watch?v=1Qj1w57iHHg',
  },
  {
    id: '3',
    slug: 'machine-equipment-status-dashboard',
    title: 'Machine Equipment Status Dashboard',
    summary: 'A real-time machine status dashboard giving operators and managers instant visibility into machine availability and performance.',
    industry: 'Industrial Manufacturing',
    challenge: 'Plant managers had no real-time view of machine status. When a machine went down, the communication chain took too long. There was no historical record of machine downtime events, making it impossible to identify patterns or chronic issues.',
    solution: 'Opsloom built a real-time Machine Status Dashboard that provides live status visibility, downtime reason tracking, and historical downtime trends. The dashboard gives both operators and management instant awareness of machine availability across the plant.',
    technologies: ['Custom Dashboard', 'Real-time Monitoring'],
    results: [
      { metric: 'Downtime awareness', value: 'Real-time visibility' },
      { metric: 'Downtime tracking', value: 'Fully logged' },
      { metric: 'Historical trends', value: 'Available' },
      { metric: 'Machine availability', value: 'Improved' },
    ],
    lessons: [
      'Real-time visibility alone changes behavior — operators address issues faster when they know someone is watching.',
      'Downtime reason tracking is more valuable than downtime duration alone — it reveals root causes.',
      'Start with status signals and expand from there.',
    ],
    date: '2025-02-18',
  },
  {
    id: '4',
    slug: 'eabc-manufacturing-management-system',
    title: 'EABC Manufacturing Management System',
    summary: 'An end-to-end manufacturing management system for EABC, covering asset management, maintenance, inventory, reporting, and executive dashboards in one platform.',
    industry: 'Industrial Manufacturing',
    challenge: 'EABC operated with reporting spread across paper logs, Excel sheets, and disconnected tools. Production data was delayed, maintenance was reactive, inventory was inaccurate, and management had no real-time view of what was happening on the factory floor.',
    solution: 'Opsloom built the EABC Manufacturing Management System — a unified platform with eight integrated modules: Asset Register, Breakdowns, Maintenance, Inventory, Reports & Analytics, Executive Intelligence Dashboard, System & Administration, and a complete end-to-end demonstration. Each module addresses a specific operational need while sharing a single data source.',
    technologies: ['Custom Multi-Module Platform', 'Asset Management', 'Maintenance Management', 'Inventory Tracking', 'Executive Dashboards', 'Analytics & Reporting'],
    results: [
      { metric: 'Operational visibility', value: 'Real-time, unified' },
      { metric: 'Maintenance management', value: 'Fully digitized' },
      { metric: 'Inventory tracking', value: 'Centralized' },
      { metric: 'Executive reporting', value: 'Live dashboards' },
    ],
    lessons: [
      'A unified platform eliminates the data silos that separate tools create.',
      'Module-by-module rollout allows teams to adopt incrementally without disruption.',
      'Executive intelligence dashboards change how management engages with operations.',
    ],
    date: '2025-03-20',
    videoUrl: 'https://www.youtube.com/watch?v=Dep8I-7zKU8&list=PLSifiOQUlgi6YBhObzBUWC1gNHogcH4Qm',
  },
  {
    id: '5',
    slug: 'executive-kpi-dashboard',
    title: 'Executive KPI Dashboard',
    summary: 'A maintenance KPI dashboard that gives maintenance teams and management real-time visibility into performance metrics.',
    industry: 'Engineering',
    challenge: 'The maintenance team tracked KPIs manually in spreadsheets updated periodically. By the time KPIs were calculated, the data was already old. There was no way to see trends, and maintenance performance reviews were based on gut feeling rather than data.',
    solution: 'Opsloom built an Executive KPI Dashboard that automatically calculates MTBF, MTTR, PM compliance, backlog hours, and downtime costs in real-time. The dashboard includes trend analysis, color-coded performance indicators, and automated reporting.',
    technologies: ['Custom Dashboard', 'KPI Analytics', 'Automated Reporting'],
    results: [
      { metric: 'KPI availability', value: 'Real-time' },
      { metric: 'KPI calculation', value: 'Automated' },
      { metric: 'Trend analysis', value: 'Available' },
      { metric: 'Decision support', value: 'Data-driven' },
    ],
    lessons: [
      'Automated KPIs eliminate the subjective reporting that hides poor performance.',
      'Trend visualization is more powerful than point-in-time metrics — it shows direction, not just status.',
      'Maintenance teams engage with dashboards when the metrics reflect their actual work.',
    ],
    date: '2025-03-05',
    videoUrl: 'https://www.youtube.com/watch?v=Zwr3di51hsk',
  },
  {
    id: '6',
    slug: 'digitization-pilot-support',
    title: 'Digitization Pilot Support',
    summary: 'Hands-on consulting and pilot implementation to help a manufacturer take the first steps from paper-based processes to digital operations.',
    industry: 'Industrial Manufacturing',
    challenge: 'The manufacturer knew they needed to digitize but did not know where to start. Paper processes were everywhere, and the team felt overwhelmed by the scope of digital transformation. Previous attempts at buying off-the-shelf software had failed because it did not fit their processes.',
    solution: 'Opsloom provided hands-on consulting to assess current operations, identify the highest-impact digitization opportunities, and implement a focused pilot project. The pilot proved the value of digital tools on a small scale before expanding to the full operation.',
    technologies: ['Process Assessment', 'Pilot Implementation', 'Digital Roadmap'],
    results: [
      { metric: 'Digital roadmap', value: 'Defined' },
      { metric: 'Pilot project', value: 'Successfully delivered' },
      { metric: 'Team adoption', value: 'Achieved' },
      { metric: 'Foundation for scale', value: 'Established' },
    ],
    lessons: [
      'Start small with a pilot — prove value before scaling.',
      'Assessment must come before software — understand the problem before building the solution.',
      'Team buy-in during the pilot is the strongest predictor of long-term success.',
    ],
    date: '2025-04-12',
  },
];
