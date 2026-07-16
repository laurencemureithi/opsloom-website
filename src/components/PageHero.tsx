import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { label: string; to: string; primary?: boolean }[];
}

export default function PageHero({ badge, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-ops-blue/8 dark:bg-ops-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-ops-black pointer-events-none" />

      <div className="container-max section-padding relative">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-6 animate-fade-down">
              <span className="w-1.5 h-1.5 rounded-full bg-ops-blue animate-pulse" />
              {badge}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ops-black dark:text-white leading-[1.05] text-balance animate-fade-up">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed max-w-2xl animate-fade-up animation-delay-100">
              {subtitle}
            </p>
          )}
          {cta && cta.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animation-delay-200">
              {cta.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={item.primary ? 'btn-primary' : 'btn-secondary'}
                >
                  {item.label}
                  {item.primary ? <ArrowRight size={16} /> : <ArrowLeft size={16} className="hidden" />}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
