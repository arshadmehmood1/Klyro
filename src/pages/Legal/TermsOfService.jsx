import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Award, CreditCard, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-accent-light text-text-dark pt-32 pb-24">
      <Helmet>
        <title>Terms of Service | Klyro Agency</title>
        <meta name="description" content="Read the official Terms of Service of Klyro, detailing project guidelines, one-time builds, and ongoing monthly maintenance rules." />
        <link rel="canonical" href="https://klyro.com/terms-of-service" />
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
            <Scale className="w-5 h-5" /> Terms & Conditions
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 font-medium">
            Last Updated: May 23, 2026
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border-2 border-accent/10 rounded-3xl p-8 sm:p-12 shadow-xl shadow-accent/5 space-y-10"
        >
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">1. Agreement to Terms</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              By accessing this website, purchasing services from Klyro, or engaging us to build a website or optimize your online marketing, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, you must not proceed with using our services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">2. Services & Project Timelines</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              Klyro provides web development, local search engine optimization (SEO), and Google Business Profile (GBP) marketing services for professional plumbing firms.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light">
              <li><strong>Turnaround Guarantee:</strong> Our 7-day delivery timeframe begins once the client has provided all necessary onboarding assets (completed onboarding form, logo files, business details, logins where applicable).</li>
              <li><strong>Revisions:</strong> The Klyro Starter package includes one complete round of design revisions. All subsequent edits outside this window are subject to standard developer hourly rates unless enrolled in our Maintenance plan.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">3. Fees, Payments & Subscriptions</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              Payments are structured clearly based on the plan you select:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light">
              <li><strong>Klyro Starter Plan ($597):</strong> A one-time payment for the creation, optimization, and handover of your website. Work begins upon receipt of the deposit/payment.</li>
              <li><strong>Klyro Maintain Plan ($200/month):</strong> A recurring monthly subscription for hosting, GBP updates, security checks, and support. This is billed automatically every 30 days. You can cancel at any time with a 15-day notice before your next billing cycle.</li>
              <li><strong>Late Fees:</strong> We reserve the right to suspend hosting or optimization services if subscription payments remain unpaid for more than 7 days past the invoice due date.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">4. Intellectual Property</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              Upon final payment receipt for the Klyro Starter package, ownership of the design code, images, and text content of your website is fully transferred to you. Klyro retains no licensing claims on design work we perform. Any preliminary drafts or design layouts not chosen by the client remain the property of Klyro.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">5. Limitation of Liability</h2>
            </div>
            <p className="text-text-light leading-relaxed text-sm">
              While we implement high-standard local SEO and GBP updates to boost client exposure, search engine algorithms (e.g. Google Search and Map rankings) are external and subject to change. Klyro cannot guarantee specific search ranking positions or call volumes. Klyro is not liable for any lost business revenues, service interruptions, or down-time on the client's website.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-accent-light text-accent">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-primary">6. Contacting Us</h2>
            </div>
            <p className="text-text-light leading-relaxed">
              For any questions regarding these Terms, please contact Klyro directly at:
            </p>
            <div className="bg-accent-light/50 border border-accent/10 rounded-2xl p-6 text-sm text-text-light">
              <p className="font-bold text-primary mb-1">Klyro Agency</p>
              <p>Email: <a href="mailto:hello@klyro.com" className="text-accent font-bold hover:underline">hello@klyro.com</a></p>
              <p>Address: Specialized local growth for plumbing businesses worldwide.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
