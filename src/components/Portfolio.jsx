import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { MapPin, TrendingUp, XCircle, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  const activeProject = projects.find(p => p.id === activeTab);

  return (
    <section id="work" className="py-24 bg-gray-50 text-text-dark">
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
            Real Results for Real Plumbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light text-lg font-medium"
          >
            Select a project below to see the before-and-after breakdown.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === project.id
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'bg-white text-text-light hover:bg-gray-100 hover:text-primary border border-gray-200'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Selected Project Case Study */}
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl"
          >
            {/* Upper Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 pb-10 border-b border-gray-100">
              
              {/* Left Column: Info & Stats */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, i) => (
                    <span key={i} className="bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-primary flex items-center gap-2">
                  {activeProject.title}
                </h3>
                
                <div className="flex items-center gap-2 text-text-light font-medium text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  {activeProject.location}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-red-500 uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-text-dark/90 leading-relaxed font-normal">{activeProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-emerald-600 uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-text-dark/90 leading-relaxed font-normal">{activeProject.solution}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metric Callout */}
              <div className="lg:col-span-5 bg-accent-light border border-accent/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="w-full overflow-hidden">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-primary mb-2 leading-tight break-words">
                    {activeProject.stat}
                  </div>
                </div>
                <div className="text-accent font-semibold text-xs sm:text-sm leading-snug mt-1 px-2">
                  {activeProject.result}
                </div>
              </div>
            </div>

            {/* Lower Details: Before & After comparison columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Before Column */}
              <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 sm:p-8">
                <h4 className="font-display font-bold text-lg text-red-700 mb-6 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> BEFORE KLYRO
                </h4>
                <ul className="space-y-4">
                  {activeProject.beforeFeatures.map((feat, i) => (
                    <li key={i} className="text-red-950/80 font-medium text-sm sm:text-base flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {feat.replace('✗ ', '')}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Column */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 sm:p-8">
                <h4 className="font-display font-bold text-lg text-emerald-800 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> AFTER KLYRO
                </h4>
                <ul className="space-y-4">
                  {activeProject.afterFeatures.map((feat, i) => (
                    <li key={i} className="text-emerald-950/90 font-medium text-sm sm:text-base flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      {feat.replace('✓ ', '')}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
