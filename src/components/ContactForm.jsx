import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Building, User, Globe, MapPin, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    website: '',
    city: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // EmailJS Configurations
    const SERVICE_ID = 'service_0rx4iqf';
    const TEMPLATE_ID = 'template_zlyh2ga';
    const PUBLIC_KEY = 'jCVUBhK8PvdhShXOG';

    // Build template params to match your EmailJS template variables:
    // {{name}}, {{email}}, {{title}}
    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: `New Audit Request — ${formData.businessName} | ${formData.city} | ${formData.phone}${formData.website ? ' | ' + formData.website : ''}`,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY
      });
      setStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage(error?.text || 'Something went wrong. Please email us at hello@klyro.work');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-black tracking-tight mb-4"
          >
            Ready to Start Getting More Calls?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 text-lg font-medium"
          >
            Get a free audit of your current online presence. No obligation. Results in 24 hours.
          </motion.p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-text-dark max-w-2xl mx-auto">
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-success flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-3">
                  Audit Request Received!
                </h3>
                <p className="text-text-light text-base leading-relaxed max-w-md">
                  Thanks! We will analyze your web presence and send your personalized audit report within 24 hours to <strong className="text-primary">{formData.email}</strong>.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-accent" /> Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 font-medium"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="flex flex-col">
                    <label htmlFor="businessName" className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-accent" /> Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Doe Plumbing Co"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-accent" /> Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-accent" /> Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Website */}
                  <div className="flex flex-col">
                    <label htmlFor="website" className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-accent" /> Current Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="www.doeplumbing.com (optional)"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 font-medium"
                    />
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <label htmlFor="city" className="text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent" /> City / Area <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Chicago, IL or London"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 font-medium"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary shadow-lg shadow-accent/25 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none disabled:bg-gray-300 disabled:shadow-none disabled:transform-none"
                >
                  {status === 'submitting' ? 'Analyzing Presence...' : 'Get My Free Audit →'}
                </button>

                {/* Trust badge */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-text-light font-semibold border-t border-gray-100 pt-5">
                  <ShieldCheck className="w-4.5 h-4.5 text-success" />
                  Your information is fully secure. We never spam. Ever.
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
