import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { faqs, faqCategories } from '../data/faqs';

export default function FAQ() {
  const [filter, setFilter] = useState('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = filter === 'All' ? faqs : faqs.filter((f) => f.category === filter);

  return (
    <div>
      <PageHero
        badge="FAQ"
        title={<>Questions? <span className="gradient-text">We have answers.</span></>}
        subtitle="Everything you need to know about Opsloom, our solutions, and how we work with manufacturers."
      />

      {/* Category filter */}
      <section className="py-8">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setOpenId(null); }}
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

      {/* FAQ list */}
      <section className="py-12 lg:py-16 pb-24">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.map((faq, i) => (
              <Reveal key={faq.id} delay={(i % 5) * 50}>
                <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openId === faq.id
                    ? 'bg-white dark:bg-ops-gray-900 border-ops-blue/30 shadow-card'
                    : 'bg-white dark:bg-ops-gray-900 border-ops-gray-200 dark:border-ops-gray-800 hover:border-ops-blue/30'
                }`}>
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-full bg-ops-blue/10 text-ops-blue text-2xs font-semibold shrink-0">{faq.category}</span>
                      <h3 className="text-base font-semibold text-ops-black dark:text-white">{faq.question}</h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-ops-gray-400 shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`grid transition-all duration-300 ${openId === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
