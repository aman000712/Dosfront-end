'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import bgImage from "../../public/background.jpg";

export default function CTASection() {
  return (
    <section className="relative w-full  flex flex-col items-center justify-center  md:px-12 lg:px-20 text-white  overflow-hidden h-[60vh]">
      
     
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="CTA Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

     
      <div className="text-center max-w-4xl mx-auto flex flex-col ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 flex flex-col gap-3"
        >
          Ready to Start Your Journey with  <span className="underline underline-offset-2 ">DOS Multi Services?</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Join thousands of students leveling up their careers through language, 
          accounting, and IT programs. Your future starts here.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link href="/courses" className="flex justify-center">
            <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Explore Courses
            </button>
          </Link>

          <Link href="/contact" className="flex justify-center">
            <button className="px-8 py-3 border cursor-pointer border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}