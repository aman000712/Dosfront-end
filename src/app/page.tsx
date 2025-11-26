import Aboutsection from "@/Components/Aboutsection";
import Herosection from "@/Components/Herosection";
import ServicesSection from "@/Components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" ">
    <Herosection/>
    <Aboutsection/>
    <ServicesSection/>
   </div>
  );
}
