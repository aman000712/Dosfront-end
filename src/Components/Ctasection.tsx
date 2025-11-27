'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-linear-to-r from-red-600 to-red-700 text-white mt-20 rounded-t-3xl">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Ready to Start Your Journey with  
          <span className="block text-white underline underline-offset-4 mt-2">
            DOS Multi Services?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-red-100 mt-6 leading-relaxed"
        >
          Join thousands of students leveling up their careers through 
          language, accounting, and IT programs. Your future starts here.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center gap-6"
      >
        <Link href="/courses">
          <button className="px-10 py-4 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:bg-red-50 transition-all text-lg">
            Explore Courses
          </button>
        </Link>

        <Link href="/contact">
          <button className="px-10 py-4 border border-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
