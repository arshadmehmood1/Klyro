import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  // Grab the first 3 posts
  const recentPosts = posts.slice(0, 3);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <section id="blog-preview" className="py-24 bg-gray-50 text-text-dark">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-display font-black tracking-tight mb-4 text-primary"
            >
              Tips & Insights for Plumbers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-light text-lg font-medium"
            >
              Practical advice on getting more calls and bookings online.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors duration-200 group text-base"
            >
              View All Posts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Post Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                  {post.category}
                </span>
              </Link>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-text-light font-semibold mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl mb-3 text-primary line-clamp-2 hover:text-accent transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-text-light text-sm leading-relaxed mb-6 font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-colors text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
