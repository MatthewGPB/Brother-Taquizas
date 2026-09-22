import { Hero } from '@/components/Hero';
import { Logos } from '@/components/Logos';
import { AISection } from '@/components/AISection';
import { Stats } from '@/components/Stats';
import { Pricing } from '@/components/Pricing';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { CaseStudy } from '@/components/CaseStudy';
import { Founder } from '@/components/Founder';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Portfolio } from '@/components/Portfolio';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <AISection />
      <Pricing />
      <Stats />
      <Process />
      <Testimonials />
      <Portfolio />
      <CaseStudy />
      <Founder />
      <FAQ />
      <ContactForm />
      <CTA />
    </>
  );
}
