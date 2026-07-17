import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, Factory, Zap, Brain, BarChart3, Database, Cpu, LineChart, ClipboardCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import founderImg from '../assets/founder1.jpg';

const expertise = [
  { icon: Factory, label: 'Manufacturing Systems' },
  { icon: Zap, label: 'Operational Excellence' },
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Cpu, label: 'Automation' },
  { icon: ClipboardCheck, label: 'Business Analysis' },
  { icon: BarChart3, label: 'Data Analytics' },
  { icon: Database, label: 'Enterprise Software' },
  { icon: LineChart, label: 'Continuous Improvement' },
];

export default function Team() {
  return (
    <div>
      <PageHero
        badge="Our Team"
        title={<>The people behind <span className="gradient-text">Opsloom</span></>}
        subtitle="We are a growing team of manufacturing and technology professionals. Currently small, but built on deep experience and a passion for practical digital transformation."
      />

      {/* Meet the Founder */}
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-ops-blue animate-pulse" />
                Meet the Founder
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white text-balance">
                The vision behind Opsloom
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-6xl mx-auto">
              {/* Founder card */}
              <div className="relative rounded-4xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden shadow-card">
                {/* Decorative top bar */}
                <div className="h-2 bg-gradient-to-r from-ops-blue via-ops-blue-light to-ops-blue" />

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-ops-blue/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 p-8 lg:p-12">
                  {/* Portrait */}
                  <div className="lg:col-span-2 flex flex-col items-center text-center">
                    <div className="relative">
                      {/* Glow ring */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-ops-blue/20 to-ops-blue-light/10 rounded-full blur-xl" />
                      {/* Portrait */}
                      <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white dark:border-ops-gray-800 shadow-xl">
                        <img
                          src={founderImg}
                          alt="Laurence Magondu Mureithi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Status indicator */}
                      <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-ops-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-ops-black dark:text-white">Laurence Mureithi Magondu</h3>
                    <p className="text-sm text-ops-blue font-semibold mt-1">Founder & Manufacturing Systems Consultant</p>

                    {/* Connect buttons */}
                    <div className="mt-6 flex items-center gap-3">
                      <a href="#" aria-label="LinkedIn (coming soon)" onClick={(e) => e.preventDefault()}
                        className="w-11 h-11 rounded-xl bg-ops-gray-100 dark:bg-ops-gray-800 flex items-center justify-center text-ops-gray-500 hover:text-ops-blue hover:bg-ops-blue/10 transition-all">
                        <Linkedin size={20} />
                      </a>
                      <a href="mailto:opsloom.ke@gmail.com" aria-label="Email"
                        className="w-11 h-11 rounded-xl bg-ops-gray-100 dark:bg-ops-gray-800 flex items-center justify-center text-ops-gray-500 hover:text-ops-blue hover:bg-ops-blue/10 transition-all">
                        <Mail size={20} />
                      </a>
                    </div>

                    {/* Connect CTA */}
                    <Link to="/contact" className="mt-6 btn-primary text-sm">
                      Connect with Laurence <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Bio + Expertise */}
                  <div className="lg:col-span-3">
                    {/* Founder story */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-ops-black dark:text-white mb-4">The Opsloom Story</h4>
                      <div className="space-y-4 text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                        <p>
                          Opsloom was created after years of working inside manufacturing facilities and seeing the same patterns repeat: paper-based reporting, disconnected spreadsheets, reactive maintenance, and decisions made without data.
                        </p>
                        <p>
                          Laurence Mureithi Magondu identified that the cost of these inefficiencies was enormous — unplanned downtime, missed preventive maintenance, inaccurate production data, and hours of wasted manual reporting. These were not technology problems. They were process problems that technology could solve.
                        </p>
                        <p>
                          He founded Opsloom with a clear mission: to help manufacturers embrace practical digital transformation. Not theory. Not buzzwords. Real systems that solve real problems on the factory floor — from shop-floor reporting tools to executive KPI dashboards.
                        </p>
                        <p>
                          His approach is practical, not theoretical. He believes AI and automation should serve the factory floor, not the other way around. Technology should simplify manufacturing, not complicate it.
                        </p>
                      </div>
                    </div>

                    {/* Expertise cards */}
                    <div>
                      <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-4">Areas of Expertise</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {expertise.map((e, i) => (
                          <div key={i} className="group flex flex-col items-center text-center p-4 rounded-xl bg-ops-gray-50 dark:bg-ops-gray-800 border border-ops-gray-200 dark:border-ops-gray-800 hover:border-ops-blue/30 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center mb-2 group-hover:bg-ops-blue transition-all duration-300">
                              <e.icon size={18} className="text-ops-blue group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-xs font-medium text-ops-gray-600 dark:text-ops-gray-300">{e.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Future expansion */}
      <section className="py-16 lg:py-24 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-ops-blue/10 flex items-center justify-center mx-auto mb-6">
                <Factory size={28} className="text-ops-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ops-black dark:text-white mb-4">We're growing</h2>
              <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-8">
                Opsloom is building a team of manufacturing and technology professionals who share our passion for practical digital transformation. If that sounds like you, we'd love to hear from you.
              </p>
              <Link to="/careers" className="btn-secondary">
                View Careers <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
