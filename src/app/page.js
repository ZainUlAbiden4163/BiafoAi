import Navbar from "@/components/Navbar";
import Features from "@/paages/Features";
import Hero from "@/paages/Hero";
import Image from "next/image";
import Testimonials from "@/paages/Testimonials";
import Cta from "@/paages/Cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Features />
      <Cta />
    </>
  );
}
