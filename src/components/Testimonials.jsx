import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white text-text-dark">
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
            Plumbers Trust Klyro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light text-lg font-medium"
          >
            Hear from local plumbing business owners who partner with us.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg shadow-gray-100 flex flex-col justify-between hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-6 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-text-dark italic text-base leading-relaxed mb-6 font-medium">
                  "{t.quote}"
                </blockquote>
              </div>

              <div>
                {/* Thin divider */}
                <hr className="border-gray-100 my-4" />

                {/* Avatar and Name details */}
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-display font-black text-sm">
                      {getInitials(t.name)}
                    </div>
                  )}
                  <div>
                    <cite className="not-italic font-bold text-sm text-primary block">
                      {t.name}
                    </cite>
                    <span className="text-xs text-text-light font-medium block">
                      {t.business} — {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
