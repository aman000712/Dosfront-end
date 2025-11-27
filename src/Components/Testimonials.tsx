'use client';

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aakash Thapa",
    course: "Korean Language (EPS)",
    review:
      "The teaching style is excellent! I passed my EPS exam on the first attempt. Highly recommended for anyone preparing for Korea.",
  },
  {
    name: "Riya Sharma",
    course: "Graphic Designing",
    review:
      "Amazing learning environment. I learned Photoshop & Illustrator from scratch and now I work as a junior designer.",
  },
  {
    name: "Sujal Karki",
    course: "Full Stack Development",
    review:
      "The full stack course helped me build real projects. The teachers are friendly and explain everything clearly.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-gray-50">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        What Our <span className="text-red-600">Students Say</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-center mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
      >
        Real experiences from learners who trusted DOS Multi Services.
      </motion.p>

      {/* Testimonials Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-red-200 hover:border-red-400 transition relative"
          >
            {/* Quote Icon */}
            <Quote className="text-red-500 absolute top-4 right-4 opacity-40" size={28} />

            <p className="text-gray-700 leading-relaxed mb-6 italic">
              "{item.review}"
            </p>

            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-red-500 text-sm">{item.course}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
