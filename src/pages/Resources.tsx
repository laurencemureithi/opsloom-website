import { useState } from 'react';
import { Download, FileText, FileSpreadsheet, ClipboardCheck, Brain, Map, TrendingUp, Calendar, ArrowRight, Mail, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { resources, resourceTypes } from '../data/resources';
import { ResourceCover } from '../components/IndustrialVisuals';

const iconMap: Record<string, typeof FileText> = {
  FileText, FileSpreadsheet, ClipboardCheck, Brain, Map, TrendingUp, Calendar,
};

export default function Resources() {
  const [filter, setFilter] = useState('All');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filtered = filter === 'All' ? resources : resources.filter((r) => r.type === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(''); }, 3000);
  };

  return (
    <div>
      <PageHero
        badge="Resources"
        title={<>Guides, templates, and <span className="gradient-text">tools for manufacturers</span></>}
        subtitle="Download practical resources to help you assess, plan, and execute your manufacturing digital transformation."
      />

      {/* Filter */}
      <section className="py-8">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === type
                    ? 'bg-ops-blue text-white shadow-lg shadow-ops-blue/20'
                    : 'bg-white dark:bg-ops-gray-900 text-ops-gray-600 dark:text-ops-gray-400 border border-ops-gray-200 dark:border-ops-gray-800 hover:border-ops-blue hover:text-ops-blue'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-12 lg:py-16">
        <div className="container-max section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res, i) => {
              const Icon = iconMap[res.icon] || FileText;
              return (
                <Reveal key={res.id} delay={(i % 3) * 80}>
                  <div className="group rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden card-hover h-full flex flex-col">
                    {/* Cover image */}
                    <ResourceCover type={res.type} title={res.title} />
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center group-hover:bg-ops-blue transition-all duration-300">
                          <Icon size={18} className="text-ops-blue group-hover:text-white transition-colors" />
                        </div>
                        {res.comingSoon && (
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 text-2xs font-semibold">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2">{res.title}</h3>
                      <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-6 flex-1">{res.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-ops-gray-200 dark:border-ops-gray-800">
                        <span className="text-2xs text-ops-gray-400">{res.category}</span>
                        {res.comingSoon ? (
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ops-gray-400">
                            <Clock size={15} /> Coming Soon
                          </span>
                        ) : (
                          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-ops-blue hover:gap-2.5 transition-all">
                            <Download size={15} /> Download
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter / Lead gen */}
      <section className="py-16 lg:py-24 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-ops-blue/10 flex items-center justify-center mx-auto mb-6">
                <Mail size={26} className="text-ops-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ops-black dark:text-white mb-3">Get notified when new resources drop</h2>
              <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 mb-8">We publish new guides, templates, and whitepapers regularly. Be the first to know.</p>
              {submitted ? (
                <div className="p-4 rounded-xl bg-green-500/10 text-green-600 text-sm font-semibold">
                  Thanks! We'll be in touch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field flex-1"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Notify Me <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
