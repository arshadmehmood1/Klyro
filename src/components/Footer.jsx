import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand info */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="font-display text-2xl font-black tracking-tight flex items-center gap-0.5">
              <span>KLYRO</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Specialized web agency building high-performance websites for plumbers across the USA & UK.
            </p>
            <a 
              href="mailto:hello@klyro.work"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline transition-colors mt-2"
            >
              <Mail className="w-4 h-4" /> hello@klyro.work
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">
                  Custom Website Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">
                  Google Business Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">
                  Local SEO Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog & Marketing Tips
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} Klyro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="X"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

