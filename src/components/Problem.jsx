import { motion } from 'framer-motion';
import { Search, Smartphone, PhoneOff } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    {
      icon: Search,
      title: "Invisible on Google",
      body: "When a pipe bursts at 10pm, homeowners search Google. If you're not on page 1 or Google Maps, that job goes directly to your competitor."
    },
    {
      icon: Smartphone,
      title: "Broken on Mobile",
      body: "Over 70% of people search on their phone. If your site looks broken or loads slowly on mobile, they leave and find another plumber within 3 seconds."
    },
    {
      icon: PhoneOff,
      title: "No Clear Way to Call You",
      body: "If a customer has to hunt for your phone number, they won't. One-click dial buttons are the difference between a booked emergency call and a lost job."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="problem" className="py-24 bg-accent-light text-text-dark">
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
            Most Plumber Websites Are Costing You Jobs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light text-lg font-medium"
          >
            Your competitors are getting calls you should be getting. Here's why.
          </motion.p>
        </div>

        {/* Pain Point Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 group flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-xl mb-3 text-primary">
                  {item.title}
                </h3>
                
                <p className="text-text-light text-base leading-relaxed font-normal">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
