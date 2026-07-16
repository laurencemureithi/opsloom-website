export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'Guide' | 'Template' | 'Checklist' | 'Whitepaper';
  category: string;
  downloadUrl: string;
  icon: string;
  comingSoon: boolean;
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Manufacturing Digital Transformation Guide',
    description: 'A step-by-step guide to planning and executing digital transformation in a manufacturing environment.',
    type: 'Guide',
    category: 'Digital Transformation',
    downloadUrl: '#',
    icon: 'Map',
    comingSoon: true,
  },
  {
    id: '2',
    title: 'Preventive Maintenance Checklist',
    description: 'A ready-to-use checklist for setting up and tracking preventive maintenance schedules.',
    type: 'Checklist',
    category: 'Maintenance',
    downloadUrl: '#',
    icon: 'ClipboardCheck',
    comingSoon: true,
  },
  {
    id: '3',
    title: 'Machine Inspection Checklist',
    description: 'A comprehensive machine inspection checklist to ensure equipment reliability and compliance.',
    type: 'Checklist',
    category: 'Maintenance',
    downloadUrl: '#',
    icon: 'ClipboardCheck',
    comingSoon: true,
  },
  {
    id: '4',
    title: 'Manufacturing KPI Guide',
    description: 'A practical guide to defining, tracking, and acting on the KPIs that matter for manufacturing operations.',
    type: 'Guide',
    category: 'Operations',
    downloadUrl: '#',
    icon: 'TrendingUp',
    comingSoon: true,
  },
  {
    id: '5',
    title: 'Production Reporting Template',
    description: 'A production reporting template to standardize shift reporting and improve data accuracy.',
    type: 'Template',
    category: 'Production',
    downloadUrl: '#',
    icon: 'FileSpreadsheet',
    comingSoon: true,
  },
  {
    id: '6',
    title: 'Manufacturing Digital Audit Checklist',
    description: 'A checklist to assess your factory\'s digital maturity across key operational dimensions.',
    type: 'Checklist',
    category: 'Digital Transformation',
    downloadUrl: '#',
    icon: 'ClipboardCheck',
    comingSoon: true,
  },
];

export const resourceTypes = ['All', 'Guide', 'Template', 'Checklist', 'Whitepaper'];
