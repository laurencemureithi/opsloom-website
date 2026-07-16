import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Brain, Users, Lightbulb, Building2,
  Code2, Layers, Gauge, BarChart3, Zap, LifeBuoy, CheckCircle2,
  ShieldCheck, Database, Workflow, LineChart,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { trustStatements, whyChooseOpsloom } from '../data/home';
import { testimonials } from '../data/testimonials';
import { caseStudies } from '../data/caseStudies';
import { industries } from '../data/industries';
import { HeroVisual, DashboardMockup, FactoryScene, NeuralNetworkViz, ConnectedMachines, PredictiveMaintenanceViz } from '../components/IndustrialVisuals';
import MeetTheFounder from '../components/MeetTheFounder';

const iconMap: Record<string, typeof Factory> = {
  Factory, Brain, Users, Lightbulb, Building2, Code2, Layers, Gauge, BarChart3, Zap, LifeBuoy,
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ops-blue/10 dark:bg-ops-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ops-blue-light/8 dark:bg-ops-blue-light/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-ops-black pointer-events-none" />

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-6 animate-fade-down">
                <span className="w-1.5 h-1.5 rounded-full bg-ops-blue animate-pulse" />
                Manufacturing Digital Transformation
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ops-black dark:text-white leading-[1.02] text-balance animate-fade-up">
                Digitizing Manufacturing.
                <br />
                <span className="gradient-text">Powered by AI.</span>
                <br />
                Built for Results.
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed max-w-xl animate-fade-up animation-delay-100">
                Opsloom helps manufacturers eliminate manual reporting, automate operations, improve maintenance visibility and unlock data-driven decision making through practical AI and modern software solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up animation-delay-200">
                <Link to="/book-a-demo" className="btn-primary">
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link to="/solutions" className="btn-secondary">
                  View Solutions
                </Link>
              </div>

              {/* Focus areas */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up animation-delay-300">
                {[
                  { label: 'Manufacturing Software', icon: Factory },
                  { label: 'AI for Manufacturing', icon: Brain },
                  { label: 'Maintenance Management', icon: ShieldCheck },
                  { label: 'Operational Dashboards', icon: BarChart3 },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-ops-blue/30 pl-4">
                    <item.icon size={20} className="text-ops-blue mb-2" />
                    <p className="text-sm font-semibold text-ops-black dark:text-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero Visual */}
            <div className="hidden lg:block animate-fade-up animation-delay-200">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-ops-gray-300 dark:border-ops-gray-700 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-ops-gray-400 dark:bg-ops-gray-600" />
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <p className="text-center text-sm font-semibold text-ops-gray-400 dark:text-ops-gray-500 uppercase tracking-wider mb-10">
              Why manufacturers trust Opsloom
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustStatements.map((item, i) => {
              const Icon = iconMap[item.icon] || CheckCircle2;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-ops-blue/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-ops-blue" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-ops-blue" />
                      <p className="text-sm font-semibold text-ops-black dark:text-white">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW — Text Left, Visual Right */}
      <section className="py-24 lg:py-32">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  About Opsloom
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
                  Built from real manufacturing experience
                </h2>
                <p className="mt-6 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  Opsloom was founded after seeing the inefficiencies of paper processes, disconnected systems, and manual reporting on factory floors. We believe technology should simplify manufacturing, not complicate it.
                </p>
                <p className="mt-4 text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  Our mission is to help manufacturers become more productive through practical digital transformation — using AI, automation, and modern software to solve real operational problems.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-ops-gray-50 dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                    <p className="text-xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-2">Mission</p>
                    <p className="text-sm text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed">
                      Helping manufacturers become more productive through practical digital transformation.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-ops-gray-50 dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                    <p className="text-xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-2">Vision</p>
                    <p className="text-sm text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed">
                      To become one of the world's leading industrial technology companies enabling intelligent manufacturing.
                    </p>
                  </div>
                </div>
                <Link to="/about" className="btn-secondary mt-8">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <FactoryScene />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OPSLOOM */}
      <section className="py-24 lg:py-32 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <SectionHeading
              badge="Why Opsloom"
              title="Built different. Built for manufacturing."
              description="We are not a general IT company. We are manufacturing specialists who build practical, AI-powered solutions that solve real operational problems."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseOpsloom.map((item, i) => {
              const Icon = iconMap[item.icon] || CheckCircle2;
              return (
                <Reveal key={i} delay={(i % 4) * 80}>
                  <div className="group p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                    <div className="w-12 h-12 rounded-xl bg-ops-blue/10 flex items-center justify-center mb-4 group-hover:bg-ops-blue group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} className="text-ops-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI CAPABILITIES — Visual Left, Text Right */}
      <section className="py-24 lg:py-32">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <NeuralNetworkViz />
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  AI for Manufacturing
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
                  Practical AI that serves the factory floor
                </h2>
                <p className="mt-6 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  We integrate AI into real manufacturing operations — predictive maintenance, anomaly detection, process optimization, and intelligent automation. Not theory. Practice.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Brain, title: 'Predictive Maintenance', desc: 'Anticipate equipment failures before they happen' },
                    { icon: BarChart3, title: 'Anomaly Detection', desc: 'Identify quality issues and process deviations in real-time' },
                    { icon: Workflow, title: 'Process Optimization', desc: 'Optimize production schedules and resource allocation' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-ops-gray-50 dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                      <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-ops-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ops-black dark:text-white">{item.title}</p>
                        <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DASHBOARD SHOWCASE — Text Left, Visual Right */}
      <section className="py-24 lg:py-32 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  Operational Intelligence
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
                  Real-time visibility into every operation
                </h2>
                <p className="mt-6 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  Custom dashboards that turn raw operational data into confident decisions. Track OEE, MTBF, MTTR, PM compliance, downtime, and production metrics — all in real-time.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: Gauge, label: 'Live KPIs' },
                    { icon: LineChart, label: 'Trend Analysis' },
                    { icon: Database, label: 'Unified Data' },
                    { icon: ShieldCheck, label: 'PM Compliance' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                      <item.icon size={18} className="text-ops-blue" />
                      <span className="text-sm font-semibold text-ops-black dark:text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <DashboardMockup variant="executive" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONNECTED MACHINES — Visual Left, Text Right */}
      <section className="py-24 lg:py-32">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <ConnectedMachines />
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  Connected Operations
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
                  Connect every machine, every system, every process
                </h2>
                <p className="mt-6 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  We break down data silos by connecting your machines, sensors, and systems into a unified operational platform. Real-time data flows from the shop floor to the executive dashboard.
                </p>
                <Link to="/solutions" className="btn-secondary mt-8">
                  Explore Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PREDICTIVE MAINTENANCE — Text Left, Visual Right */}
      <section className="py-24 lg:py-32 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  Predictive Maintenance
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
                  Stop reacting. Start predicting.
                </h2>
                <p className="mt-6 text-lg text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  Move from reactive to predictive maintenance. Our AI models analyze equipment data to predict failures before they happen — scheduling repairs during planned downtime, not emergencies.
                </p>
                <Link to="/case-studies" className="btn-secondary mt-8">
                  See Case Studies <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <PredictiveMaintenanceViz />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <MeetTheFounder />

      {/* FEATURED CASE STUDIES */}
      <section className="py-24 lg:py-32">
        <div className="container-max section-padding">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  Case Studies
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight">
                  Real results. Real factories.
                </h2>
              </div>
              <Link to="/case-studies" className="btn-secondary whitespace-nowrap">
                View All <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((cs, i) => (
              <Reveal key={cs.id} delay={i * 100}>
                <Link to={`/case-studies/${cs.slug}`} className="group block p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-2xs font-semibold">{cs.industry}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ops-black dark:text-white mb-3 group-hover:text-ops-blue transition-colors">{cs.title}</h3>
                  <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-5">{cs.summary}</p>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-ops-gray-200 dark:border-ops-gray-800">
                    {cs.results.slice(0, 2).map((r, j) => (
                      <div key={j}>
                        <p className="text-base font-bold text-ops-blue">{r.value}</p>
                        <p className="text-2xs text-ops-gray-400">{r.metric}</p>
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="py-24 lg:py-32 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <SectionHeading
              badge="Industries"
              title="Serving the full manufacturing spectrum"
              description="From animal health to industrial manufacturing — we understand the unique challenges of each industry we serve."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.slice(0, 10).map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 5) * 60}>
                <Link to="/industries" className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-ops-blue/10 flex items-center justify-center mb-3 group-hover:bg-ops-blue transition-all duration-300">
                    <ind.icon size={22} className="text-ops-blue group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-ops-black dark:text-white">{ind.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32">
        <div className="container-max section-padding">
          <Reveal>
            <SectionHeading
              badge="Testimonials"
              title="Client testimonials"
              description="Client testimonials will appear here as Opsloom partners share their manufacturing transformation experiences."
            />
          </Reveal>
          <div className="mt-16 max-w-2xl mx-auto">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover flex flex-col">
                  <p className="text-base text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-ops-gray-200 dark:border-ops-gray-800 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-ops-blue/10 flex items-center justify-center text-ops-blue font-semibold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ops-black dark:text-white">{t.name}</p>
                      <p className="text-xs text-ops-gray-400">{t.title} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-max section-padding relative">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
                Ready to digitize your manufacturing?
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Book a demo and discover how Opsloom can help you eliminate manual processes, reduce downtime, and unlock data-driven operations.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/book-a-demo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
