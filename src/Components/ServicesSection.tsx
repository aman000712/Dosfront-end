'use client';

import { motion } from 'framer-motion';
import {
  GlobeIcon,
  FileTextIcon,
  PenToolIcon,
  Code2Icon,
  LayersIcon,
  BookOpenIcon,
} from "lucide-react";


const services = [
  {
    title: "Language Training",
    description: "Korean, Japanese, and German language courses designed for EPS, career growth, and global opportunities.",
    icon: <GlobeIcon size={32} className="text-red-500" />,
  },
  {
    title: "Accounting Courses",
    description: "Professional accounting training with practical tools, software, and real-world business workflows.",
    icon: <FileTextIcon size={32} className="text-red-500" />,
  },
  {
    title: "Graphic Designing",
    description: "Creative graphic design training with Illustrator, Photoshop, and modern design techniques.",
    icon: <PenToolIcon size={32} className="text-red-500" />,
  },
  {
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React, and Tailwind to build beautiful modern websites.",
    icon: <Code2Icon size={32} className="text-red-500" />,
  },
  {
    title: "Backend Development",
    description: "Master databases, Node.js, APIs, authentication, and server-side application development.",
    icon: <LayersIcon size={32} className="text-red-500" />,
  },
  {
    title: "Full Stack Development",
    description: "Industry-ready full stack program combining frontend + backend with real projects.",
    icon: <BookOpenIcon size={32} className="text-red-500" />,
  },
];

function ServicesSection() {
  return (
    <div className="w-full py-24 bg-gray-50 px-6 md:px-20">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-red-600"
      >
        Our Services
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((val, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-red-200 transition border border-gray-100 hover:border-red-400"
          >
            <div className="mb-4">{val.icon}</div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {val.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {val.description}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default ServicesSection;
