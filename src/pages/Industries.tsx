import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <div>
      <PageHero
        badge="Industries"
        title={<>Manufacturing expertise across <span className="gradient-text">every sector</span></>}
        subtitle="We understand that each industry has unique challenges. Our solutions are tailored to the specific regulatory, operational, and quality requirements of each manufacturing sector."
        cta={[{ label: 'Book a Demo', to: '/book-a-demo', primary: true }]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 2) * 100}>
                <div className="group p-8 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-ops-blue/10 flex items-center justify-center group-hover:bg-ops-blue transition-all duration-300 shrink-0">
                      <ind.icon size={26} className="text-ops-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-ops-black dark:text-white">{ind.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-6">{ind.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-3">Key Challenges</p>
                      <ul className="space-y-2">
                        {ind.challenges.map((c, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-ops-gray-500 dark:text-ops-gray-400">
                            <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-3">Our Solutions</p>
                      <ul className="space-y-2">
                        {ind.solutions.map((s, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-ops-gray-500 dark:text-ops-gray-400">
                            <CheckCircle2 size={14} className="text-ops-blue mt-0.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container-max section-padding relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your industry. Your challenges.</h2>
            <p className="text-white/80 mb-8">Let's talk about how we can help your specific manufacturing operation.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
