import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-accent-light text-text-dark pt-32 pb-24">
      <Helmet>
        <title>Privacy Policy | Klyro Agency</title>
        <meta name="description" content="Read the official Privacy Policy of Klyro, detailing how we collect, store, and protect your business details and contact details." />
        <link rel="canonical" href="https://klyro.com/privacy-policy" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Title Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary text-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-accent/5 mb-12 relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            <Shield className="w-5 h-5" /> Trust & Security
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 font-medium">
            Last Updated: May 23, 2026
          </p>
        </motion.div>

        {/* Policy Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border-2 border-accent/10 rounded-3xl p-8 sm:p-12 shadow-xl shadow-accent/5 space-y-10"
        >
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">1. Information We Collect</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              We collect information to provide better marketing and website services to plumbing business owners. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light">
              <li><strong>Contact Information:</strong> Name, business name, phone number, email address, and physical business address when you submit our contact form or request a website audit.</li>
              <li><strong>Business Details:</strong> Operating hours, service areas, and website URL to perform Google Business Profile (GBP) and local SEO audits.</li>
              <li><strong>Usage Data:</strong> We may collect generic log data, such as your IP address, browser type, and details on how you interact with our website.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">2. How We Use Your Information</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light">
              <li>To perform free local marketing audits for your plumbing company.</li>
              <li>To reach out and coordinate projects, revisions, and site setups.</li>
              <li>To configure and manage your custom website, hosting, and GBP optimizations.</li>
              <li>To send monthly traffic and search ranking reports.</li>
              <li>To send operational emails (such as invoices or support notifications).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">3. Data Security & Storage</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              Your business and contact data safety is critical to us. We implement standard industry security practices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light">
              <li>All form details are securely transmitted via encrypted SSL/TLS channels.</li>
              <li>We restrict internal access to client accounts and credential keys.</li>
              <li>Hosting servers under our Klyro Maintain plan utilize enterprise-grade firewalls, daily backups, and malware protection.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">4. Cookies and Tracking</h2>
            </div>
            <p className="text-text-light leading-relaxed text-sm">
              We use basic cookies to analyze website traffic (such as Google Analytics) and verify user sessions. You can configure your browser to disable cookies, though some interactive elements might not load properly as a result.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">5. Contact Information</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              If you have any questions regarding this Privacy Policy or how your data is handled, please contact us at:
            </p>
            <div className="bg-accent-light/50 border border-accent/10 rounded-2xl p-6 text-sm text-text-light">
              <p className="font-bold text-primary mb-1">Klyro Agency</p>
              <p>Email: <a href="mailto:hello@klyro.com" className="text-accent font-bold hover:underline">hello@klyro.com</a></p>
              <p>Specialized Web Design & Marketing for Professional Plumbers</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
