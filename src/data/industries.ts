import {
  HeartPulse, UtensilsCrossed, Pill, FlaskConical, Package,
  Recycle, Wheat, Factory, Cog, Truck,
} from 'lucide-react';

export interface Industry {
  id: string;
  icon: typeof HeartPulse;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
}

export const industries: Industry[] = [
  {
    id: 'animal-health',
    icon: HeartPulse,
    name: 'Animal Health',
    description: 'Digital solutions for animal health manufacturing — batch tracking, quality compliance, and production visibility.',
    challenges: ['Batch traceability', 'Regulatory compliance', 'Cold-chain monitoring'],
    solutions: ['Batch management systems', 'Quality compliance dashboards', 'Real-time monitoring'],
  },
  {
    id: 'food-manufacturing',
    icon: UtensilsCrossed,
    name: 'Food Manufacturing',
    description: 'From recipe management to HACCP compliance — we help food manufacturers digitize safely and efficiently.',
    challenges: ['HACCP compliance', 'Recipe consistency', 'Shelf-life tracking'],
    solutions: ['Digital HACCP workflows', 'Recipe management systems', 'Batch and expiry tracking'],
  },
  {
    id: 'pharmaceuticals',
    icon: Pill,
    name: 'Pharmaceuticals',
    description: 'GxP-compliant software for pharmaceutical manufacturing — validation, batch records, and audit trails.',
    challenges: ['GxP compliance', 'Electronic batch records', 'Validation'],
    solutions: ['Electronic batch records', 'Compliance dashboards', 'Validated custom systems'],
  },
  {
    id: 'chemicals',
    icon: FlaskConical,
    name: 'Chemical Manufacturing',
    description: 'Formula management, safety data sheets, and process control for chemical manufacturers.',
    challenges: ['Formula management', 'Safety compliance', 'Process control'],
    solutions: ['Formula management systems', 'SDS digitization', 'Process monitoring dashboards'],
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging',
    description: 'Line efficiency tracking, changeover optimization, and quality monitoring for packaging operations.',
    challenges: ['Line efficiency', 'Changeover time', 'Quality defects'],
    solutions: ['OEE dashboards', 'Changeover tracking', 'Defect monitoring'],
  },
  {
    id: 'plastics',
    icon: Recycle,
    name: 'Plastics',
    description: 'Cycle time monitoring, scrap reduction, and predictive maintenance for plastics manufacturing.',
    challenges: ['Cycle time optimization', 'High scrap rates', 'Machine downtime'],
    solutions: ['Cycle time analytics', 'Scrap tracking systems', 'Predictive maintenance'],
  },
  {
    id: 'agriculture',
    icon: Wheat,
    name: 'Agriculture',
    description: 'Smart farming, IoT integration, and yield optimization for agricultural operations.',
    challenges: ['Yield optimization', 'Resource management', 'IoT data silos'],
    solutions: ['IoT integration platforms', 'Yield analytics', 'Resource tracking dashboards'],
  },
  {
    id: 'industrial',
    icon: Factory,
    name: 'Industrial Manufacturing',
    description: 'End-to-end digital transformation for industrial manufacturing — from shop floor to top floor.',
    challenges: ['Machine connectivity', 'Production visibility', 'Maintenance scheduling'],
    solutions: ['Machine monitoring', 'Production dashboards', 'CMMS implementation'],
  },
  {
    id: 'engineering',
    icon: Cog,
    name: 'Engineering',
    description: 'Project tracking, maintenance management, and engineering documentation for engineering firms.',
    challenges: ['Project visibility', 'Documentation control', 'Maintenance planning'],
    solutions: ['Project tracking systems', 'Document management', 'Maintenance planning tools'],
  },
  {
    id: 'logistics',
    icon: Truck,
    name: 'Logistics',
    description: 'Warehouse management, route optimization, and real-time tracking for logistics operations.',
    challenges: ['Warehouse efficiency', 'Route optimization', 'Shipment tracking'],
    solutions: ['WMS integration', 'Route analytics', 'Real-time tracking dashboards'],
  },
];
