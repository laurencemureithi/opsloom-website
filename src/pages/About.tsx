import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Lightbulb, Shield, Wrench, TrendingUp, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { FactoryScene } from '../components/IndustrialVisuals';
import MeetTheFounder from '../components/MeetTheFounder';

const coreValues = [
  { icon: Lightbulb, title: 'Innovation', description: 'We embrace new technologies and approaches to solve old manufacturing problems in better ways.' },
  { icon: Shield, title: 'Integrity', description: 'We do what we say. Our solutions work, our timelines are honest, and our commitments are real.' },
  { icon: Wrench, title: 'Practicality', description: 'We build solutions that work in real factories, not just in demos. Practical over theoretical.' },
  { icon: TrendingUp, title: 'Continuous Improvement', description: 'We never ship and forget. Everything we build is designed to evolve and improve over time.' },
  { icon: Award, title: 'Customer Success', description: 'Our success is measured by your results. If your operations do not improve, we have not done our job.' },
];

export default function About() {
  return (
    <div>
      <PageHero
        badge="About Opsloom"
        title={<>Technology should <span className="gradient-text">simplify manufacturing</span>, not complicate it.</>}
        subtitle="Opsloom is a manufacturing digital transformation company helping factories modernize operations using practical software, automation, AI, and operational intelligence."
      />

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ops-black dark:text-white leading-tight mb-6">
                  Founded from real manufacturing experience
                </h2>
                <div className="space-y-4 text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  <p>
                    Opsloom was founded after years of working inside manufacturing facilities and witnessing the same problems repeat themselves: paper processes that no one could search, disconnected systems that did not talk to each other, and manual reporting that consumed hours of productive time every single shift.
                  </p>
                  <p>
                    We watched operators fill out the same data on three different forms. We watched supervisors spend entire afternoons aggregating numbers that were already outdated by the time they were presented. We watched equipment fail because preventive maintenance was tracked in a spreadsheet that nobody checked.
                  </p>
                  <p>
                    We knew there was a better way. Not through generic IT solutions or off-the-shelf software that never quite fit — but through practical, custom-built digital tools designed by people who actually understand the shop floor.
                  </p>
                  <p>
                    That is why Opsloom exists. To bring practical digital transformation to manufacturing — one factory at a time.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-6">
                <FactoryScene />
                <div className="relative p-6 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Founded', value: '2024' },
                      { label: 'Focus', value: '100% Manufacturing' },
                      { label: 'Approach', value: 'Practical AI' },
                      { label: 'Philosophy', value: 'Simplify, not complicate' },
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-white/50 dark:bg-ops-gray-900/50 border border-ops-gray-200 dark:border-ops-gray-800">
                        <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-2">{item.label}</p>
                        <p className="text-base font-semibold text-ops-black dark:text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                <div className="w-14 h-14 rounded-2xl bg-ops-blue/10 flex items-center justify-center mb-6">
                  <Target size={26} className="text-ops-blue" />
                </div>
                <h3 className="text-xl font-semibold text-ops-black dark:text-white mb-3">Our Mission</h3>
                <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  Helping manufacturers become more productive through practical digital transformation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full">
                <div className="w-14 h-14 rounded-2xl bg-ops-blue/10 flex items-center justify-center mb-6">
                  <Eye size={26} className="text-ops-blue" />
                </div>
                <h3 className="text-xl font-semibold text-ops-black dark:text-white mb-3">Our Vision</h3>
                <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                  To become one of the world's leading industrial technology companies enabling intelligent manufacturing through AI, automation, and digital innovation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <Reveal>
            <SectionHeading
              badge="Core Values"
              title="What we stand for"
              description="These are not words on a wall. They are the principles that guide every decision we make and every solution we build."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreValues.map((val, i) => (
              <Reveal key={i} delay={(i % 5) * 80}>
                <div className="group p-6 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-ops-blue/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-ops-blue transition-all duration-300">
                    <val.icon size={22} className="text-ops-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <MeetTheFounder />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container-max section-padding relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's build something that lasts.</h2>
            <p className="text-white/80 mb-8">Partner with a team that understands manufacturing from the inside out.</p>
            <Link to="/book-a-demo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
