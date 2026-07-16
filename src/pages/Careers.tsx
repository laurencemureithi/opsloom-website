import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

export default function Careers() {
  return (
    <div>
      <PageHero
        badge="Careers"
        title={<>Build the future of <span className="gradient-text">manufacturing</span></>}
        subtitle="We're always looking for talented people who share our passion for practical digital transformation in manufacturing."
      />

      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center p-8 lg:p-12 rounded-3xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
              <div className="w-16 h-16 rounded-2xl bg-ops-blue/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase size={28} className="text-ops-blue" />
              </div>
              <h2 className="text-2xl font-bold text-ops-black dark:text-white mb-3">No opportunities available</h2>
              <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-8">
                We don't have any open positions right now, but we're growing fast. If you're passionate about manufacturing, AI, and building software that solves real operational problems, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:opsloom.ke@gmail.com" className="btn-primary">
                  <Mail size={16} /> Send Your CV
                </a>
                <Link to="/contact" className="btn-secondary">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values preview */}
      <section className="py-16 lg:py-24 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-ops-black dark:text-white mb-4">What we value</h2>
              <p className="text-base text-ops-gray-500 dark:text-ops-gray-400">The principles that define how we work and who we're looking for.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { title: 'Manufacturing First', desc: 'We understand the shop floor. Everything we build serves manufacturing operations.' },
              { title: 'Practical Over Theoretical', desc: 'We build solutions that work in real factories, not just in demos.' },
              { title: 'Continuous Learning', desc: 'Technology evolves fast. We evolve with it — and help our clients do the same.' },
              { title: 'Ownership', desc: 'We take responsibility for outcomes. If it does not work, we fix it.' },
              { title: 'Simplicity', desc: 'Complexity is easy. Simplicity is hard. We choose simple, every time.' },
              { title: 'Customer Success', desc: 'Our success is measured by our clients\' results, not by our features.' },
            ].map((val, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                  <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
