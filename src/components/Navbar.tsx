import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoLight from '../assets/lugu-removebg-preview.png';
import logoDark from '../assets/lugu-dark-removebg-preview.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Videos', path: '/videos' },
  { label: 'Insights', path: '/insights' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const logoSrc = theme === 'dark' ? logoDark : logoLight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-max section-padding flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoSrc}
            alt="Opsloom"
            className="h-14 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-ops-gray-600 dark:text-ops-gray-400 hover:bg-ops-gray-100 dark:hover:bg-ops-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/book-a-demo" className="btn-primary text-sm">
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-ops-gray-600 dark:text-ops-gray-400 hover:bg-ops-gray-100 dark:hover:bg-ops-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-ops-black dark:text-white hover:bg-ops-gray-100 dark:hover:bg-ops-gray-800 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 glass overflow-y-auto animate-fade-down">
          <div className="section-padding py-6 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors animate-fade-up ${
                  location.pathname === item.path
                    ? 'bg-ops-blue/10 text-ops-blue'
                    : 'text-ops-gray-700 dark:text-ops-gray-300 hover:bg-ops-gray-100 dark:hover:bg-ops-gray-800'
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/book-a-demo" className="btn-primary mt-4">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
