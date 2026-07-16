import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  cta?: { label: string; to: string };
  center?: boolean;
}

export default function SectionHeading({ badge, title, description, cta, center = true }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4 ${center ? '' : ''}`}>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      {cta && (
        <div className={`${center ? 'flex justify-center' : ''} mt-6`}>
          <Link to={cta.to} className="btn-secondary">
            {cta.label} <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
