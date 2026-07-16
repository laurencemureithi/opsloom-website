import { Link } from 'react-router-dom';
import {
  ArrowRight, Quote, Cpu, Brain, Gauge, Wrench, BarChart3,
  Workflow, Database, LineChart, Settings, Boxes, Factory,
  GraduationCap, Building2, TrendingUp, Cog, Code2, Sparkles, Rocket,
} from 'lucide-react';
import Reveal from './Reveal';
import founderImg from '../assets/founder.jpg';

const expertise = [
  { icon: Factory, label: 'Manufacturing Systems' },
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Gauge, label: 'Operational Excellence' },
  { icon: Wrench, label: 'Maintenance Management' },
  { icon: BarChart3, label: 'Production Analytics' },
  { icon: Workflow, label: 'Workflow Automation' },
  { icon: Sparkles, label: 'Digital Transformation' },
  { icon: LineChart, label: 'Business Intelligence' },
  { icon: TrendingUp, label: 'Continuous Improvement' },
  { icon: Settings, label: 'Process Improvement' },
  { icon: Cpu, label: 'Data Analytics' },
  { icon: Boxes, label: 'Enterprise Software' },
];

const timeline = [
  { icon: GraduationCap, label: 'Diploma in Information Technology' },
  { icon: Factory, label: 'Manufacturing Operations' },
  { icon: Gauge, label: 'Operational Excellence' },
  { icon: Cog, label: 'Engineering Support' },
  { icon: Database, label: 'Business Systems Development' },
  { icon: Brain, label: 'AI & Automation' },
  { icon: Rocket, label: 'Founded Opsloom' },
];

const snapshot = [
  { label: 'Experience', value: '6+ years in manufacturing operations and digital transformation' },
  { label: 'Industry Focus', value: 'Manufacturing, Pharmaceuticals, Animal Health, Production Operations' },
  { label: 'Core Specialties', value: 'AI for Manufacturing, Maintenance Systems, Production Reporting, Operational Intelligence' },
  { label: 'Flagship Solution', value: 'EABC Manufacturing Management System' },
  { label: 'Mission', value: 'Helping manufacturers replace manual processes with intelligent, practical digital solutions' },
];

export default function MeetTheFounder() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-40" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ops-blue/8 dark:bg-ops-blue/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ops-blue-light/6 dark:bg-ops-blue-light/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        {/* Section heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ops-blue animate-pulse" />
              Meet the Founder
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
              The vision behind <span className="gradient-text">Opsloom</span>
            </h2>
            <p className="mt-5 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
              Real manufacturing experience, practical technology, and a mission to make every factory smarter.
            </p>
          </div>
        </Reveal>

        {/* Founder card: photo + bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Photo */}
          <Reveal>
            <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-br from-ops-blue/15 to-ops-blue-light/8 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-ops-gray-200 dark:border-ops-gray-800 shadow-card-hover">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-ops-blue via-ops-blue-light to-ops-blue" />
                <img
                  src={founderImg}
                  alt="Laurence Mureithi Magondu"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-xl font-bold text-white">Laurence Mureithi Magondu</h3>
                  <p className="text-sm text-ops-blue-light font-semibold mt-0.5">Founder & Manufacturing Systems Consultant</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio + snapshot */}
          <Reveal delay={150}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-5">
                About Laurence
              </div>
              <div className="space-y-4 text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                <p>
                  Laurence founded Opsloom after working within manufacturing operations and experiencing firsthand the challenges created by manual reporting, disconnected information, paper-based processes, reactive maintenance, and limited operational visibility.
                </p>
                <p>
                  Rather than accepting these inefficiencies as normal, he began designing practical software solutions that simplify operations, improve decision-making, and help manufacturers embrace digital transformation through automation, data, and artificial intelligence.
                </p>
                <p>
                  His work combines knowledge across manufacturing operations, operational excellence, engineering support, business systems, data analytics, AI-assisted software development, workflow automation, and continuous improvement.
                </p>
                <p>
                  Opsloom represents his vision of making advanced manufacturing technology practical, accessible, and valuable for businesses of every size.
                </p>
              </div>

              {/* Professional Snapshot */}
              <div className="mt-8 p-6 rounded-2xl glass-card">
                <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Building2 size={14} className="text-ops-blue" /> Professional Snapshot
                </p>
                <div className="space-y-3">
                  {snapshot.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <span className="text-2xs font-bold text-ops-blue uppercase tracking-wider sm:w-36 shrink-0 pt-0.5">
                        {item.label}
                      </span>
                      <span className="text-sm text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Expertise cards */}
        <Reveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-ops-black dark:text-white mb-3">Areas of Expertise</h3>
            <p className="text-base text-ops-gray-500 dark:text-ops-gray-400">A multidisciplinary skill set spanning the factory floor to the executive dashboard.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {expertise.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 60}>
              <div className="group flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center shrink-0 group-hover:bg-ops-blue transition-all duration-300">
                  <item.icon size={18} className="text-ops-blue group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-ops-gray-700 dark:text-ops-gray-200">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <Reveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-ops-black dark:text-white mb-3">The Journey</h3>
            <p className="text-base text-ops-gray-500 dark:text-ops-gray-400">From IT foundations to founding a manufacturing technology company.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block mb-20">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-ops-blue/10 via-ops-blue/30 to-ops-blue/10" />
              <div className="relative flex justify-between gap-2">
                {timeline.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center flex-1 max-w-[160px]">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 flex items-center justify-center shadow-card group-hover:bg-ops-blue transition-all duration-300 relative z-10">
                      <item.icon size={24} className="text-ops-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-2">
                      {i < timeline.length - 1 && (
                        <ArrowRight size={14} className="text-ops-blue/40 hidden" />
                      )}
                      <p className="text-xs font-semibold text-ops-gray-700 dark:text-ops-gray-200 leading-snug">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden mb-20">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-ops-blue/10 via-ops-blue/30 to-ops-blue/10" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="relative flex items-start gap-4">
                    <div className="absolute -left-10 w-10 h-10 rounded-xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 flex items-center justify-center shadow-card z-10">
                      <item.icon size={18} className="text-ops-blue" />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-sm font-semibold text-ops-gray-700 dark:text-ops-gray-200 leading-snug">{item.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Quote */}
        <Reveal>
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-ops-blue/20 to-ops-blue-light/10 rounded-3xl blur-xl" />
            <div className="relative p-8 lg:p-12 rounded-3xl glass-card">
              <Quote size={40} className="text-ops-blue/30 mb-4" />
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-ops-black dark:text-white leading-relaxed text-balance">
                "Technology should simplify manufacturing—not complicate it. My mission is to help manufacturers make better decisions through practical AI, intelligent software, and operational excellence."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-ops-blue/10 flex items-center justify-center text-ops-blue font-semibold text-sm">
                  LM
                </div>
                <div>
                  <p className="text-sm font-semibold text-ops-black dark:text-white">Laurence Mureithi Magondu</p>
                  <p className="text-xs text-ops-gray-400">Founder & Manufacturing Systems Consultant, Opsloom</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
            <div className="absolute inset-0 hero-grid opacity-10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative p-8 lg:p-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                Let's Build the Future of Manufacturing Together
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Whether you're looking to digitize manual processes, improve maintenance visibility, automate reporting, or explore how AI can create measurable operational value, I'd be delighted to discuss your goals and explore practical solutions tailored to your business.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/book-a-demo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  Contact Opsloom
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
