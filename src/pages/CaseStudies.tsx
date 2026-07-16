import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, AlertTriangle, Lightbulb, TrendingUp, Wrench, Calendar, Building2, PlayCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { caseStudies } from '../data/caseStudies';
import { DashboardMockup } from '../components/IndustrialVisuals';

const dashboardVariants: Record<string, 'default' | 'maintenance' | 'production' | 'inventory' | 'executive'> = {
  'engineering-maintenance-management-system': 'maintenance',
  'production-reporting-automation': 'production',
  'machine-equipment-status-dashboard': 'default',
  'eabc-manufacturing-management-system': 'executive',
  'executive-kpi-dashboard': 'executive',
  'digitization-pilot-support': 'default',
};

export default function CaseStudies() {
  const { slug } = useParams();
  const study = slug ? caseStudies.find((cs) => cs.slug === slug) : null;

  if (slug && study) {
    const dashVariant = dashboardVariants[study.slug] || 'default';

    return (
      <div>
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ops-blue/8 rounded-full blur-3xl pointer-events-none" />
          <div className="container-max section-padding relative">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-ops-gray-500 hover:text-ops-blue transition-colors mb-6">
              <ArrowLeft size={16} /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold">{study.industry}</span>
              <span className="flex items-center gap-1.5 text-xs text-ops-gray-400">
                <Calendar size={12} /> {new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance max-w-4xl">
              {study.title}
            </h1>
            <p className="mt-5 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed max-w-3xl">{study.summary}</p>
          </div>
        </section>

        {/* Dashboard mockup */}
        <section className="pb-12">
          <div className="container-max section-padding">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <DashboardMockup variant={dashVariant} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Results highlight */}
        <section className="py-12 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
          <div className="container-max section-padding">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {study.results.map((r, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="text-center p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                    <p className="text-xl lg:text-2xl font-bold gradient-text">{r.value}</p>
                    <p className="text-xs text-ops-gray-500 dark:text-ops-gray-400 mt-2">{r.metric}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed sections — alternating layout */}
        <section className="py-16 lg:py-24">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Challenge */}
              <Reveal>
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <AlertTriangle size={20} className="text-amber-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-ops-black dark:text-white">The Challenge</h2>
                    </div>
                    <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                      <div className="space-y-3">
                        {['Manual processes', 'Data silos', 'Reactive maintenance', 'No real-time visibility'].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-ops-gray-500 dark:text-ops-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Solution */}
              <Reveal>
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center">
                        <Lightbulb size={20} className="text-ops-blue" />
                      </div>
                      <h2 className="text-2xl font-bold text-ops-black dark:text-white">The Solution</h2>
                    </div>
                    <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{study.solution}</p>
                    {study.videoUrl && (
                      <a
                        href={study.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ops-blue/10 text-ops-blue font-semibold text-sm hover:bg-ops-blue/20 transition-all"
                      >
                        <PlayCircle size={18} /> Watch Demo
                      </a>
                    )}
                  </div>
                  <div className="lg:col-span-2">
                    <div className="p-5 rounded-2xl bg-ops-blue/5 border border-ops-blue/20">
                      <div className="space-y-3">
                        {['Digital workflows', 'Real-time data', 'Automated reporting', 'Live dashboards'].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-ops-gray-500 dark:text-ops-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-ops-blue" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Technology */}
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center">
                      <Wrench size={20} className="text-ops-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-ops-black dark:text-white">Technology Used</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-ops-gray-100 dark:bg-ops-gray-800 text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 border border-ops-gray-200 dark:border-ops-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Results */}
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <TrendingUp size={20} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-ops-black dark:text-white">Results</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {study.results.map((r, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-ops-gray-50 dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                        <span className="text-sm text-ops-gray-500 dark:text-ops-gray-400">{r.metric}</span>
                        <span className="text-base font-bold text-ops-blue">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Lessons */}
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center">
                      <Building2 size={20} className="text-ops-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-ops-black dark:text-white">Lessons Learned</h2>
                  </div>
                  <ul className="space-y-3">
                    {study.lessons.map((lesson, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                        <span className="w-6 h-6 rounded-full bg-ops-blue/10 flex items-center justify-center text-ops-blue text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
          <div className="absolute inset-0 hero-grid opacity-10" />
          <div className="container-max section-padding relative">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want results like these?</h2>
              <p className="text-white/80 mb-8">Book a demo and let's talk about your specific operational challenges.</p>
              <Link to="/book-a-demo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                Book a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        badge="Case Studies"
        title={<>Real factories. <span className="gradient-text">Real results.</span></>}
        subtitle="See how Opsloom has helped manufacturers eliminate manual processes, reduce downtime, and unlock data-driven operations. Each case study breaks down the challenge, solution, technology, and measurable results."
        cta={[{ label: 'Book a Demo', to: '/book-a-demo', primary: true }]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.id} delay={(i % 2) * 100}>
                <Link to={`/case-studies/${cs.slug}`} className="group block p-8 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-2xs font-semibold">{cs.industry}</span>
                    <span className="text-2xs text-ops-gray-400">{new Date(cs.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-ops-black dark:text-white mb-3 group-hover:text-ops-blue transition-colors">{cs.title}</h3>
                  <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-6">{cs.summary}</p>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-ops-gray-200 dark:border-ops-gray-800">
                    {cs.results.slice(0, 4).map((r, j) => (
                      <div key={j}>
                        <p className="text-sm font-bold text-ops-blue">{r.value}</p>
                        <p className="text-2xs text-ops-gray-400">{r.metric}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ops-blue group-hover:gap-2.5 transition-all">
                    Read Case Study <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
