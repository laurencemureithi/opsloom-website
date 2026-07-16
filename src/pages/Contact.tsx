import { useState } from 'react';
import { Mail, MapPin, Linkedin, Youtube, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@opsloom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'opsloom.ke@gmail.com', href: 'mailto:opsloom.ke@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#' },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn (Coming Soon)', href: '#' },
    { icon: Youtube, label: 'YouTube', href: YOUTUBE_CHANNEL },
  ];

  return (
    <div>
      <PageHero
        badge="Contact Us"
        title={<>Let's talk about your <span className="gradient-text">manufacturing challenges</span></>}
        subtitle="Whether you have a specific project in mind or just want to explore what's possible, we'd love to hear from you. Email us at opsloom.ke@gmail.com."
      />

      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <Reveal className="lg:col-span-2">
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover"
                  >
                    <div className="w-12 h-12 rounded-xl bg-ops-blue/10 flex items-center justify-center shrink-0">
                      <info.icon size={22} className="text-ops-blue" />
                    </div>
                    <div>
                      <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">{info.label}</p>
                      <p className="text-base font-semibold text-ops-black dark:text-white mt-0.5">{info.value}</p>
                    </div>
                  </a>
                ))}

                <div className="p-5 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                  <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl bg-ops-gray-100 dark:bg-ops-gray-800 flex items-center justify-center text-ops-gray-500 hover:text-ops-blue hover:bg-ops-blue/10 transition-all"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="p-5 rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden">
                  <p className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider mb-3">Find Us</p>
                  <div className="aspect-video rounded-xl bg-ops-gray-100 dark:bg-ops-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-50" />
                    <div className="relative text-center">
                      <MapPin size={32} className="text-ops-blue mx-auto mb-2" />
                      <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={150} className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                <h3 className="text-xl font-bold text-ops-black dark:text-white mb-2">Send us a message</h3>
                <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 mb-6">
                  We'll get back to you within 24 hours. Or email us directly at{' '}
                  <a href="mailto:opsloom.ke@gmail.com" className="text-ops-blue font-semibold hover:underline">opsloom.ke@gmail.com</a>.
                </p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-ops-black dark:text-white">Message sent!</h4>
                    <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 mt-2">
                      Thank you for reaching out. We'll be in touch shortly. For urgent inquiries, email us at{' '}
                      <a href="mailto:opsloom.ke@gmail.com" className="text-ops-blue font-semibold">opsloom.ke@gmail.com</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Email *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="you@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Company</label>
                      <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field" placeholder="Your company" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" placeholder="Tell us about your manufacturing challenges..." />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
