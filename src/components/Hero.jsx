import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-primary text-white flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial Gradient for Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Copy (7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Specialized Web Agency for Plumbers
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1] mb-6"
          >
            We Build Websites That Get Plumbers <span className="text-accent">More Calls</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-lg sm:text-xl font-sans font-normal leading-relaxed mb-8 max-w-xl"
          >
            Custom website, Google Business Profile setup, and local SEO — everything you need to rank on Google and turn visitors into booked jobs. Done in 7 days.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto bg-accent text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Your Free Audit <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollTo('work')}
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:-translate-y-0.5"
            >
              See Our Work
            </button>
          </motion.div>

          {/* Trust list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-white/90 text-sm font-semibold border-t border-white/10 pt-6 w-full"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              7-Day Delivery
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              Mobile Optimised
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              Local SEO Included
            </div>
          </motion.div>
        </div>

        {/* Hero Mockup (5 cols on large screens) */}
        <div className="lg:col-span-5 relative w-full flex justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.4 }}
            className="relative w-full max-w-md lg:max-w-none"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl -z-10 transform scale-95" />
            
            {/* Mockup image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full flex justify-center"
            >
              <img
                src="/plumber-mockup.png"
                alt="Klyro plumber website mockup preview"
                className="w-full h-auto max-w-full drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
