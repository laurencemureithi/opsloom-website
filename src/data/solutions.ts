import {
  Factory, Wrench, FileText, LayoutDashboard, BarChart3,
  Database, Workflow, Code2, ShieldCheck, ClipboardCheck, Boxes,
  Brain, LineChart, Settings,
} from 'lucide-react';

export interface Solution {
  id: string;
  icon: typeof Factory;
  title: string;
  problem: string;
  solution: string;
  value: string;
  category: string;
}

export const solutions: Solution[] = [
  {
    id: 'mms',
    icon: Factory,
    title: 'Manufacturing Management Systems',
    problem: 'Fragmented production data across spreadsheets, paper logs, and disconnected tools makes it impossible to see real-time factory performance.',
    solution: 'A unified manufacturing management platform that centralizes production tracking, work orders, and shop-floor data into one source of truth.',
    value: 'Complete production visibility, faster decision-making, and elimination of manual reporting overhead.',
    category: 'Core Systems',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance Management',
    problem: 'Reactive maintenance leads to unplanned downtime, costly emergency repairs, and shortened equipment lifespan.',
    solution: 'Digital maintenance management system with work order tracking, asset registers, and technician assignment — all in one dashboard.',
    value: 'Reduced unplanned downtime, lower repair costs, and extended asset life through structured maintenance workflows.',
    category: 'Maintenance',
  },
  {
    id: 'preventive',
    icon: ShieldCheck,
    title: 'Preventive Maintenance Tracking',
    problem: 'Preventive maintenance schedules live in spreadsheets or people\'s heads, leading to missed services and equipment failures.',
    solution: 'Automated PM scheduling with calendar reminders, compliance tracking, and mobile-friendly checklists for technicians.',
    value: 'Fewer breakdowns, regulatory compliance, and predictable maintenance costs.',
    category: 'Maintenance',
  },
  {
    id: 'production-reporting',
    icon: FileText,
    title: 'Production Reporting',
    problem: 'Operators spend hours each shift filling paper reports, and managers wait days to see aggregated production data.',
    solution: 'Digital production reporting with real-time dashboards, shift handover logs, and automated OEE calculations.',
    value: 'Hours saved per shift, instant production visibility, and data accuracy above 99%.',
    category: 'Production',
  },
  {
    id: 'quality',
    icon: ClipboardCheck,
    title: 'Quality Management',
    problem: 'Quality inspections are paper-based, non-conformances are hard to track, and root-cause analysis is slow.',
    solution: 'Digital quality management with inspection forms, CAPA tracking, SPC charts, and audit-ready documentation.',
    value: 'Faster defect detection, reduced scrap rates, and audit-ready quality records.',
    category: 'Quality',
  },
  {
    id: 'inventory',
    icon: Boxes,
    title: 'Inventory Systems',
    problem: 'Manual stock counts, phantom inventory, and stockouts that halt production lines.',
    solution: 'Real-time inventory tracking with barcode/QR scanning, min-max alerts, and integration to purchasing.',
    value: 'Fewer stockouts, lower carrying costs, and accurate real-time stock visibility.',
    category: 'Operations',
  },
  {
    id: 'exec-dashboards',
    icon: LayoutDashboard,
    title: 'Executive Dashboards',
    problem: 'Executives lack a single, real-time view of plant performance and must request reports that arrive days late.',
    solution: 'Role-based executive dashboards with KPIs, trends, alerts, and drill-downs — accessible on any device.',
    value: 'Instant operational insight, faster strategic decisions, and complete transparency across the organization.',
    category: 'Analytics',
  },
  {
    id: 'bi',
    icon: BarChart3,
    title: 'Business Intelligence',
    problem: 'Valuable operational data sits siloed in machines, ERPs, and spreadsheets with no unified analytics layer.',
    solution: 'End-to-end BI implementation: data pipelines, warehousing, interactive reports, and self-service analytics.',
    value: 'Turn raw plant data into actionable business intelligence for every level of the organization.',
    category: 'Analytics',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Artificial Intelligence Integration',
    problem: 'Factories collect data but lack the AI models to predict failures, optimize schedules, or detect anomalies.',
    solution: 'Custom AI models for predictive maintenance, anomaly detection, demand forecasting, and process optimization.',
    value: 'Predict failures before they happen, optimize production in real-time, and unlock new levels of efficiency.',
    category: 'AI',
  },
  {
    id: 'data-analytics',
    icon: LineChart,
    title: 'Data Analytics',
    problem: 'Manufacturing data is underutilized — buried in machines, logs, and legacy systems with no way to analyze it.',
    solution: 'Custom analytics pipelines that collect, clean, and visualize operational data for actionable insight.',
    value: 'Data-driven decisions, bottleneck identification, and continuous improvement backed by real numbers.',
    category: 'Analytics',
  },
  {
    id: 'workflow',
    icon: Workflow,
    title: 'Workflow Automation',
    problem: 'Manual, repetitive processes waste time, introduce errors, and slow down operations.',
    solution: 'Automated workflows for approvals, notifications, data entry, and system-to-system integration.',
    value: 'Eliminate repetitive manual work, reduce errors, and free your team to focus on high-value tasks.',
    category: 'Automation',
  },
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    problem: 'Off-the-shelf software never quite fits your unique manufacturing processes and workflows.',
    solution: 'Bespoke software built around your exact processes — from shop-floor apps to enterprise integrations.',
    value: 'Software that fits your operation perfectly, with no compromises and no unnecessary features.',
    category: 'Core Systems',
  },
  {
    id: 'document-digitization',
    icon: Database,
    title: 'Document Digitization',
    problem: 'Filing cabinets full of paper records that are hard to search, share, or audit.',
    solution: 'Scan, index, and digitize paper records into a searchable, secure, and audit-ready digital archive.',
    value: 'Instant document retrieval, secure storage, and full audit trails for compliance.',
    category: 'Digitization',
  },
  {
    id: 'opex-consulting',
    icon: Settings,
    title: 'Operational Excellence Consulting',
    problem: 'Teams know they need to improve but lack a structured roadmap to get there.',
    solution: 'Hands-on consulting to assess current operations, identify improvement opportunities, and implement digital solutions.',
    value: 'A clear, prioritized roadmap to operational excellence — backed by data and manufacturing expertise.',
    category: 'Consulting',
  },
];

export const solutionCategories = ['All', 'Core Systems', 'Maintenance', 'Production', 'Quality', 'Operations', 'Analytics', 'AI', 'Automation', 'Digitization', 'Consulting'];
