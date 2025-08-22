import AboutSectionOne from "@/components/Home/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Home/About/AboutSectionTwo";
import Brands from "@/components/Home/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/Home/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollUp />
      <Hero />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
