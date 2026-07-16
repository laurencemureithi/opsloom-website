import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoLight from '../assets/lugu-removebg-preview.png';
import logoDark from '../assets/lugu-dark-removebg-preview.png';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Team', path: '/team' },
    { label: 'Careers', path: '/careers' },
    { label: 'FAQ', path: '/faq' },
  ],
  Solutions: [
    { label: 'Manufacturing Management', path: '/solutions' },
    { label: 'Maintenance Management', path: '/solutions' },
    { label: 'AI for Manufacturing', path: '/solutions' },
    { label: 'Operational Dashboards', path: '/solutions' },
    { label: 'Workflow Automation', path: '/solutions' },
    { label: 'Custom Software', path: '/solutions' },
  ],
  Resources: [
    { label: 'Video Library', path: '/videos' },
    { label: 'Insights & Blog', path: '/insights' },
    { label: 'Guides & Templates', path: '/resources' },
    { label: 'Book a Demo', path: '/book-a-demo' },
    { label: 'Contact', path: '/contact' },
  ],
};

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@opsloom';

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? logoDark : logoLight;

  return (
    <footer className="relative bg-ops-gray-50 dark:bg-ops-gray-950 border-t border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ops-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max section-padding relative">
        {/* CTA strip */}
        <div className="py-12 border-b border-ops-gray-200 dark:border-ops-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-ops-black dark:text-white">
                Ready to digitize your manufacturing?
              </h3>
              <p className="mt-2 text-ops-gray-500 dark:text-ops-gray-400 max-w-xl">
                Book a demo and see how Opsloom can transform your operations with practical AI and modern software.
              </p>
            </div>
            <Link to="/book-a-demo" className="btn-primary whitespace-nowrap">
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoSrc} alt="Opsloom" className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed max-w-sm">
              Manufacturing digital transformation company helping factories eliminate manual processes, reduce downtime, and unlock data-driven decisions through practical AI and modern software.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="LinkedIn (coming soon)" onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 flex items-center justify-center text-ops-gray-500 hover:text-ops-blue hover:border-ops-blue transition-all">
                <Linkedin size={18} />
              </a>
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 flex items-center justify-center text-ops-gray-500 hover:text-ops-blue hover:border-ops-blue transition-all">
                <Youtube size={18} />
              </a>
              <a href="mailto:opsloom.ke@gmail.com" aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 flex items-center justify-center text-ops-gray-500 hover:text-ops-blue hover:border-ops-blue transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-ops-black dark:text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-ops-gray-500 dark:text-ops-gray-400 hover:text-ops-blue transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="py-8 border-t border-ops-gray-200 dark:border-ops-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-3 text-sm text-ops-gray-500 dark:text-ops-gray-400">
            <Mail size={16} className="text-ops-blue" />
            <a href="mailto:opsloom.ke@gmail.com" className="hover:text-ops-blue transition-colors">opsloom.ke@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-ops-gray-500 dark:text-ops-gray-400">
            <MapPin size={16} className="text-ops-blue" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-ops-gray-200 dark:border-ops-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ops-gray-400 dark:text-ops-gray-500">
            © {new Date().getFullYear()} Opsloom. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ops-gray-400 dark:text-ops-gray-500">
            <Link to="/privacy" className="hover:text-ops-blue transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ops-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
