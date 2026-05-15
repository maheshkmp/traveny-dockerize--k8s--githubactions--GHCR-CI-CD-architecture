import { BookingPanel } from "@/components/landing/BookingPanel";
import { CtaSection } from "@/components/landing/CtaSection";
import { Fleet } from "@/components/landing/Fleet";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyUs } from "@/components/landing/WhyUs";

export default function MarketingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingPanel />
      <Services />
      <Fleet />
      <WhyUs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}
