export interface VideoItem {
  id: string;
  videoId: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
  featured?: boolean;
}

export interface VideoModule {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  order: number;
}

function ytThumb(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export const videoCategories = [
  'All',
  'EABC System',
  'Manufacturing Tips',
  'AI for Manufacturing',
  'Operations Excellence',
  'Automation',
  'Digital Transformation',
];

export const featuredPlaylist = {
  title: 'EABC Manufacturing Management System',
  url: 'https://www.youtube.com/watch?v=Dep8I-7zKU8&list=PLSifiOQUlgi6YBhObzBUWC1gNHogcH4Qm',
  description: 'Complete walkthrough of the EABC Manufacturing Management System.',
  videoId: 'Dep8I-7zKU8',
  thumbnail: ytThumb('Dep8I-7zKU8'),
};

export const videos: VideoItem[] = [
  {
    id: '1',
    videoId: '8gC0yFUXqdo',
    title: 'Automated Excel VBA Machine Maintenance System',
    description: 'A complete automated machine maintenance tracking system built in Excel using VBA — covering work orders, PM scheduling, and reporting.',
    duration: '',
    category: 'Automation',
    thumbnail: ytThumb('8gC0yFUXqdo'),
    featured: true,
  },
  {
    id: '2',
    videoId: '1Qj1w57iHHg',
    title: 'Automated Excel VBA Production Tracking System',
    description: 'Automated production tracking system built in Excel VBA — real-time production data entry, shift reporting, and summary dashboards.',
    duration: '',
    category: 'Automation',
    thumbnail: ytThumb('1Qj1w57iHHg'),
    featured: true,
  },
  {
    id: '3',
    videoId: '5I6oUcuzX6o',
    title: 'EABC Trailer',
    description: 'A preview trailer of the EABC Manufacturing Management System — showcasing the full platform capabilities.',
    duration: '',
    category: 'EABC System',
    thumbnail: ytThumb('5I6oUcuzX6o'),
    featured: true,
  },
];

export const eabcModules: VideoModule[] = [
  {
    id: 'm1',
    videoId: 'UY1vCdwQZMA',
    title: 'Asset Register',
    description: 'Manage and track all manufacturing assets in a centralized register with full asset hierarchy.',
    thumbnail: ytThumb('UY1vCdwQZMA'),
    order: 1,
  },
  {
    id: 'm2',
    videoId: 'Tbnhs5RgAhw',
    title: 'Breakdowns',
    description: 'Log and track equipment breakdowns with root cause analysis and downtime recording.',
    thumbnail: ytThumb('Tbnhs5RgAhw'),
    order: 2,
  },
  {
    id: 'm3',
    videoId: 'gPQyyK69nyo',
    title: 'Maintenance',
    description: 'Complete maintenance management — work orders, PM scheduling, and maintenance history.',
    thumbnail: ytThumb('gPQyyK69nyo'),
    order: 3,
  },
  {
    id: 'm4',
    videoId: 'j2rpJQIRkP0',
    title: 'Inventory',
    description: 'Spare parts inventory management with stock tracking, reorder alerts, and consumption history.',
    thumbnail: ytThumb('j2rpJQIRkP0'),
    order: 4,
  },
  {
    id: 'm5',
    videoId: '8CG1QBGCpBI',
    title: 'Reports & Analytics',
    description: 'Comprehensive reporting and analytics — KPIs, trends, and customizable report generation.',
    thumbnail: ytThumb('8CG1QBGCpBI'),
    order: 5,
  },
  {
    id: 'm6',
    videoId: 'Zwr3di51hsk',
    title: 'Executive Intelligence Dashboard',
    description: 'Executive-level intelligence dashboard with real-time KPIs, performance trends, and decision support.',
    thumbnail: ytThumb('Zwr3di51hsk'),
    order: 6,
  },
  {
    id: 'm7',
    videoId: '6-t1g_Yz3sY',
    title: 'System & Administration',
    description: 'System administration module — user management, roles, permissions, and system configuration.',
    thumbnail: ytThumb('6-t1g_Yz3sY'),
    order: 7,
  },
  {
    id: 'm8',
    videoId: 'Dep8I-7zKU8',
    title: 'Complete Demonstration',
    description: 'Full end-to-end demonstration of the entire EABC Manufacturing Management System.',
    thumbnail: ytThumb('Dep8I-7zKU8'),
    order: 8,
  },
];
