import { motion } from 'framer-motion';
import { Globe, MapPin, TrendingUp, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Design",
      bullets: [
        "5 fully custom pages (Home, Services, About, Areas, Contact)",
        "Mobile-first responsive design matching all screen sizes",
        "Lightning-fast loading times (under 2 seconds)",
        "Tap-to-call and booking buttons on every page",
        "Delivered and live in 7 days guaranteed"
      ]
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      bullets: [
        "Full GBP creation or expert audit and optimization",
        "Appear in the local Google Maps 3-Pack search results",
        "Optimized service area configurations",
        "Photo uploads, categories, and business description",
        "Review request system and customer feedback link"
      ]
    },
    {
      icon: TrendingUp,
      title: "Local SEO Optimisation",
      bullets: [
        "High-intent local keywords targeting plumber queries",
        "On-page SEO (titles, meta descriptions, headings, tags)",
        "Schema markup specifically designed for plumbers",
        "Google Maps directory citations alignment",
        "Clear monthly ranking and lead tracking report"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-text-dark">
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
            Everything You Need. Nothing You Don't.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light text-lg font-medium"
          >
            One package. Three powerful services included.
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 border border-gray-200 border-t-[4px] border-t-accent shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary">
                    {service.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4 flex-grow">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-success mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-text-dark text-sm sm:text-base leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
