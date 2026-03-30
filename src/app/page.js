import Navbar from "@/components/Navbar";
import Features from "@/paages/Features";
import Hero from "@/paages/Hero";
import Image from "next/image";
import Testimonials from "@/paages/Testimonials";
import Cta from "@/paages/Cta";
import Header from "@/components/Header";
import Footer from "@/paages/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}
