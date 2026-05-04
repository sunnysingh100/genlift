import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import WhyGenlift from "@/components/WhyGenlift";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Services />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Industries />
        <WhyGenlift />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
