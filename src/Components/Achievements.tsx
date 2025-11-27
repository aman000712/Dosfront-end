'use client';

import { motion } from "framer-motion";
import { Users, Award, GraduationCap, Building } from "lucide-react";

const stats = [
  {
    icon: <Users size={40} className="text-red-600" />,
    number: "5000+",
    label: "Students Trained",
  },
  {
    icon: <Award size={40} className="text-red-600" />,
    number: "98%",
    label: "Success Rate",
  },
  {
    icon: <GraduationCap size={40} className="text-red-600" />,
    number: "15+",
    label: "Professional Courses",
  },
  {
    icon: <Building size={40} className="text-red-600" />,
    number: "10+",
    label: "Years of Experience",
  },
];

export default function Achievements() {
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
        Our <span className="text-red-600">Achievements</span>
      </motion.h2>

      {/* Stat Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">{item.icon}</div>

            <h3 className="text-4xl font-bold text-gray-900">{item.number}</h3>
            <p className="text-gray-600 mt-2 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
