import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When location changes, close mobile menu
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      // Wait a moment for page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { label: 'Services', sectionId: 'services' },
    { label: 'Work', sectionId: 'work' },
    { label: 'Pricing', sectionId: 'pricing' },
    { label: 'FAQ', sectionId: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white shadow-md py-4 text-text-dark'
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-black tracking-tight flex items-center gap-1.5">
          <span className={isScrolled || !isHome ? 'text-primary' : 'text-white'}>KLYRO</span>
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleNavClick(link.sectionId)}
              className="font-medium hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/blog"
            className="font-medium hover:text-accent transition-colors duration-200"
          >
            Blog
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className={`font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
              isScrolled || !isHome
                ? 'bg-accent text-white hover:bg-primary shadow-lg shadow-accent/20'
                : 'bg-white text-primary hover:bg-accent hover:text-white shadow-lg shadow-black/10'
            }`}
          >
            Get Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-5 text-text-dark md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-left font-medium text-lg py-2 border-b border-gray-50 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/blog"
              className="font-medium text-lg py-2 border-b border-gray-50 hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 mt-2 shadow-lg shadow-accent/25 hover:bg-primary transition-colors"
            >
              Get Free Audit <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
