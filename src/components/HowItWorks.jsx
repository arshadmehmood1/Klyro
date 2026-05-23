import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      day: "Day 0",
      title: "Free Website Audit",
      desc: "Send us your current website link (or tell us you don't have one). We'll analyze it and show you exactly what is costing you phone calls."
    },
    {
      num: "02",
      day: "Days 1–6",
      title: "We Build & Optimize",
      desc: "Our team designs your website, setups your Google Business Profile, and configures all local SEO settings. You don't have to lift a finger."
    },
    {
      num: "03",
      day: "Day 6",
      title: "You Review & Tweak",
      desc: "We send you a private preview link. You tell us if you want any adjustments. We make updates until you are 100% happy with the result."
    },
    {
      num: "04",
      day: "Day 7",
      title: "Go Live & Get Calls",
      desc: "Your new high-performance website and optimized Google Maps listing go live. You start receiving inquiries from ready-to-book local clients."
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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-black tracking-tight mb-4"
          >
            From Zero to Live in 7 Days
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 text-lg font-medium"
          >
            A simple, done-for-you process. No complicated tech talk.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/10 border-t-2 border-dashed border-white/20 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Step circle */}
              <div className="w-20 h-20 rounded-full bg-accent text-white flex flex-col items-center justify-center font-display font-bold shadow-lg shadow-accent/25 mb-6 group-hover:scale-105 transition-transform duration-300 relative">
                <span className="text-xs text-white/70 uppercase leading-none font-sans font-semibold">
                  {step.day}
                </span>
                <span className="text-xl leading-tight mt-0.5">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
