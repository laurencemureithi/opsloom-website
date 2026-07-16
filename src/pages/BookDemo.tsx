import { useState } from 'react';
import { Send, CheckCircle2, Calendar, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const industries = [
  'Animal Health', 'Food Manufacturing', 'Pharmaceuticals', 'Chemical Manufacturing',
  'Packaging', 'Plastics', 'Agriculture', 'Industrial Manufacturing',
  'Engineering', 'Logistics', 'Other',
];

const employeeRanges = ['1-10', '11-50', '51-200', '201-500', '500+'];

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', industry: '',
    employees: '', challenges: '', date: '', time: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', company: '', industry: '', employees: '', challenges: '', date: '', time: '', message: '' });
    }, 5000);
  };

  return (
    <div>
      <PageHero
        badge="Book a Demo"
        title={<>See Opsloom in <span className="gradient-text">action</span></>}
        subtitle="Book a personalized demo and discover how our manufacturing solutions can help you eliminate manual processes, reduce downtime, and unlock data-driven operations."
      />

      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-ops-black dark:text-white mb-3">Demo request received!</h3>
                    <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 max-w-md mx-auto">
                      Thank you for your interest. We'll review your request and contact you within 24 hours to confirm your demo slot. For urgent inquiries, email us at opsloom.ke@gmail.com.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-ops-black dark:text-white mb-2">Request your demo</h3>
                    <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 mb-8">Fill out the form below and we'll be in touch within 24 hours. Or email us directly at <a href="mailto:opsloom.ke@gmail.com" className="text-ops-blue font-semibold hover:underline">opsloom.ke@gmail.com</a>.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Personal info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Full Name *</label>
                          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Email *</label>
                          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="you@company.com" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Phone *</label>
                          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" placeholder="Your phone number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Company *</label>
                          <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field" placeholder="Your company" />
                        </div>
                      </div>

                      {/* Company info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Industry *</label>
                          <select required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className="input-field">
                            <option value="">Select industry</option>
                            {industries.map((ind) => (
                              <option key={ind} value={ind}>{ind}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Number of Employees *</label>
                          <select required value={form.employees} onChange={(e) => setForm({ ...form, employees: e.target.value })} className="input-field">
                            <option value="">Select range</option>
                            {employeeRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Current Challenges</label>
                        <textarea rows={3} value={form.challenges} onChange={(e) => setForm({ ...form, challenges: e.target.value })} className="input-field resize-none" placeholder="What operational challenges are you facing?" />
                      </div>

                      {/* Scheduling */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">
                            <span className="flex items-center gap-1.5"><Calendar size={14} /> Preferred Date *</span>
                          </label>
                          <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input-field" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">
                            <span className="flex items-center gap-1.5"><Clock size={14} /> Preferred Time *</span>
                          </label>
                          <input required type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input-field" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ops-gray-600 dark:text-ops-gray-300 mb-1.5">Additional Message</label>
                        <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" placeholder="Anything else you'd like us to know?" />
                      </div>

                      <button type="submit" className="btn-primary w-full text-base py-4">
                        Request Demo <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
