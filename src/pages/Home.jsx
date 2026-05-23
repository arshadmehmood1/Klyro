import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import BlogPreview from '../components/BlogPreview';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <ContactForm />
    </>
  );
}
