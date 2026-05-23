import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const starterFeatures = [
    "Complete 5-Page Website Design",
    "100% Mobile-First Responsive Layout",
    "Instant Click-to-Call & Easy Tap Booking",
    "Full Google Business Profile Setup / Audit",
    "On-page Local SEO Target Strategy",
    "Fast 7-Day Guaranteed Turnaround",
    "1 Full Round of Revisions Included"
  ];

  const maintenanceFeatures = [
    "Fast & Secure Managed Hosting",
    "Monthly GBP Updates & Posting",
    "On-Page SEO Monitoring & Tweaks",
    "Monthly Rankings & Traffic Report",
    "Priority Email & Text Support",
    "Security Monitoring & Daily Backups",
    "1 Hour of Custom Edits Per Month"
  ];

  return (
    <section id="pricing" className="py-24 bg-accent-light text-text-dark">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-black tracking-tight mb-4 text-primary"
          >
            Simple Pricing. No Surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light text-lg font-medium"
          >
            Choose the plan that fits your business needs, or bundle them for maximum results.
          </motion.p>
        </div>

        {/* Pricing Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white border-2 border-accent/20 rounded-3xl shadow-xl shadow-accent/5 overflow-hidden flex flex-col hover:border-accent transition-colors duration-300"
          >
            {/* Header info */}
            <div className="bg-primary text-white p-8 sm:p-10 text-center relative flex-shrink-0">
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                One-Time
              </div>
              <h3 className="font-display font-black text-2xl mb-4 text-accent">KLYRO STARTER</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-display font-black tracking-tight">$597</span>
                <span className="text-white/70 text-sm font-semibold">one-time</span>
              </div>
              <p className="text-white/70 text-sm mt-3 font-medium">
                Everything you need to launch a high-converting plumber website.
              </p>
            </div>

            {/* Content & Features */}
            <div className="p-8 sm:p-10 flex-grow bg-white flex flex-col justify-between">
              <ul className="space-y-4 mb-10">
                {starterFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-dark font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-success mt-0.5 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Call to action */}
              <button
                onClick={handleScrollToContact}
                className="w-full bg-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary shadow-lg shadow-accent/25 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full bg-white border-2 border-accent rounded-3xl shadow-xl shadow-accent/5 overflow-hidden flex flex-col relative"
          >
            {/* Header info */}
            <div className="bg-primary text-white p-8 sm:p-10 text-center relative flex-shrink-0">
              <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Highly Recommended
              </div>
              <h3 className="font-display font-black text-2xl mb-4 text-accent">KLYRO MAINTAIN</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-display font-black tracking-tight">$200</span>
                <span className="text-white/70 text-sm font-semibold">/ month</span>
              </div>
              <p className="text-white/70 text-sm mt-3 font-medium">
                Keep your site running fast, secure, and dominating local search rankings.
              </p>
            </div>

            {/* Content & Features */}
            <div className="p-8 sm:p-10 flex-grow bg-white flex flex-col justify-between">
              <ul className="space-y-4 mb-10">
                {maintenanceFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-dark font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-success mt-0.5 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Call to action */}
              <button
                onClick={handleScrollToContact}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent shadow-lg shadow-primary/25 hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Start Maintenance <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
