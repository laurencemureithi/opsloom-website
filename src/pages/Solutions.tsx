import { useState } from 'react';
import { AlertTriangle, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { solutions, solutionCategories } from '../data/solutions';
import { ServiceIllustration, WorkflowDiagram } from '../components/IndustrialVisuals';

const illustrationMap: Record<string, string> = {
  'Maintenance Management': 'maintenance',
  'AI for Manufacturing': 'ai',
  'Operational Dashboards': 'dashboards',
  'Workflow Automation': 'automation',
  'Quality Systems': 'quality',
  'Inventory Management': 'inventory',
  'Analytics & Reporting': 'analytics',
  'Custom Software': 'default',
};

export default function Solutions() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? solutions
    : solutions.filter((s) => s.category === filter);

  return (
    <div>
      <PageHero
        badge="Solutions"
        title={<>Practical solutions for <span className="gradient-text">real manufacturing problems</span></>}
        subtitle="From maintenance management to AI integration — every solution is built around your exact processes and designed to deliver measurable operational improvement."
        cta={[{ label: 'Book a Demo', to: '/book-a-demo', primary: true }]}
      />

      {/* Category filter */}
      <section className="py-8 sticky top-16 z-30 glass border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {solutionCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-ops-blue text-white shadow-lg shadow-ops-blue/20'
                    : 'bg-white dark:bg-ops-gray-900 text-ops-gray-600 dark:text-ops-gray-400 border border-ops-gray-200 dark:border-ops-gray-800 hover:border-ops-blue hover:text-ops-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sol, i) => (
              <Reveal key={sol.id} delay={(i % 3) * 80}>
                <div className="group p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full flex flex-col overflow-hidden">
                  {/* Illustration header */}
                  <div className="relative -mx-6 -mt-6 mb-5 h-32 overflow-hidden bg-gradient-to-br from-ops-blue/5 to-transparent border-b border-ops-gray-200 dark:border-ops-gray-800">
                    <ServiceIllustration type={illustrationMap[sol.category] || 'default'} className="h-full" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center group-hover:bg-ops-blue transition-all duration-300">
                      <sol.icon size={18} className="text-ops-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-ops-gray-100 dark:bg-ops-gray-800 text-2xs font-semibold text-ops-gray-500 dark:text-ops-gray-400">
                      {sol.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ops-black dark:text-white mb-4">{sol.title}</h3>

                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <AlertTriangle size={13} className="text-amber-500" />
                        <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Problem</p>
                      </div>
                      <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{sol.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Lightbulb size={13} className="text-ops-blue" />
                        <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Solution</p>
                      </div>
                      <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{sol.solution}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <TrendingUp size={13} className="text-green-500" />
                        <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Business Value</p>
                      </div>
                      <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{sol.value}</p>
                    </div>
                  </div>

                  <Link to="/book-a-demo" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ops-blue hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow section */}
      <section className="py-16 lg:py-24 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-ops-black dark:text-white mb-4">How we work</h2>
              <p className="text-base text-ops-gray-500 dark:text-ops-gray-400">A proven workflow from data collection to operational optimization.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <WorkflowDiagram />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container-max section-padding relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Don't see your specific need?</h2>
            <p className="text-white/80 mb-8">We build custom solutions for unique manufacturing challenges. Tell us what you need.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Talk to Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
