import Aboutsection from "@/Components/Aboutsection";
import Achievements from "@/Components/Achievements";
import CTASection from "@/Components/Ctasection";
import Herosection from "@/Components/Herosection";
import ServicesSection from "@/Components/ServicesSection";
import TestimonialsSection from "@/Components/Testimonials";
import Whychoosesection from "@/Components/Whychoosesection";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" ">
    <Herosection/>
    <Aboutsection/>
    <ServicesSection/>
    <Whychoosesection/>
    <TestimonialsSection/>
    <Achievements/>
    <CTASection/>
   </div>
  );
}
