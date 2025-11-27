'use client';

import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Star } from "lucide-react";

const points = [
  {
    icon: <CheckCircle size={36} />,
    title: "Certified & Experienced Instructors",
    description: "Learn from qualified teachers for languages, accounting, and IT courses.",
  },
  {
    icon: <Shield size={36} />,
    title: "Trusted Institution",
    description: "Thousands of students trained for EPS, career growth, and international opportunities.",
  },
  {
    icon: <Users size={36} />,
    title: "Student-Focused Teaching",
    description: "Small batches, personalized guidance, and friendly learning environment.",
  },
  {
    icon: <Star size={36} />,
    title: "High Success Rate",
    description: "Strong track record in EPS exams, language tests & IT job placements.",
  },
];

export default function Whychoosesection() {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        Why Choose <span className="text-red-600">Us?</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
      >
        At DOS Multi Services, we help students build strong careers with expert,
        modern, and high-quality training.
      </motion.p>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              group bg-white/40 backdrop-blur-xl border border-white/60
              shadow-lg rounded-3xl p-8 relative overflow-hidden
              hover:shadow-2xl hover:shadow-red-300
              transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]
            "
          >
            {/* Glow Background */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              transition duration-300 bg-linear-to-br
              from-red-100/40 via-transparent to-red-200/40
            " />

            {/* Icon Circle */}
            <div className="
              w-16 h-16 rounded-2xl flex items-center justify-center mb-5
              bg-white shadow-md group-hover:bg-red-600 transition duration-300
              group-hover:text-white text-red-500
            ">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="
              text-xl font-semibold text-gray-900 mb-3
              group-hover:text-red-600 transition
            ">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 group-hover:text-gray-800 transition">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
