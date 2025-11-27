'use client';

import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Star } from "lucide-react";

const points = [
  {
    icon: <CheckCircle className="text-red-500" size={32} />,
    title: "Certified & Experienced Instructors",
    description: "Learn from qualified teachers for languages, accounting, and IT courses.",
  },
  {
    icon: <Shield className="text-red-500" size={32} />,
    title: "Trusted Institution",
    description: "Thousands of students trained for EPS, career growth, and international opportunities.",
  },
  {
    icon: <Users className="text-red-500" size={32} />,
    title: "Student-Focused Teaching",
    description: "Small batches, personalized guidance, and friendly learning environment.",
  },
  {
    icon: <Star className="text-red-500" size={32} />,
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
        At DOS Multi Services, we help students build strong careers in language, accounting,
        graphics, and full-stack development with expert training.
      </motion.p>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md border hover:shadow-red-200 hover:border-red-400 transition cursor-pointer"
          >
            <div className="mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
