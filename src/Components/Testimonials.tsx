"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aakash Thapa",
    image: "/students/aakash.jpg",
    course: "Korean Language (EPS)",
    review:
      "I passed my EPS exam on the first attempt. The teachers explain everything clearly and motivate you throughout.",
  },
  {
    name: "Riya Sharma",
    image: "/students/riya.jpg",
    course: "Graphic Designing",
    review:
      "The best institute for design! I learned Photoshop, Illustrator, and landed a junior designer job after training.",
  },
  {
    name: "Sujal Karki",
    image: "/students/sujal.jpg",
    course: "Full Stack Development",
    review:
      "Amazing course! I built real-world projects and improved my coding skills. Highly recommended for IT students.",
  },
];

export default function TestimonialCards() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-center text-5xl font-extrabold text-gray-900">
        Student <span className="text-red-600">Testimonials</span>
      </h2>

      <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
        Hear what our students say about their learning experience.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className={`
              relative p-8 rounded-3xl cursor-pointer backdrop-blur-xl
              shadow-xl border border-white/60 bg-white/70 
              transform-gpu
              ${
                active !== null && active !== i
                  ? "blur-sm opacity-40"
                  : "opacity-100"
              }
            `}
          >
            {/* Glow spotlight */}
            {active === i && (
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 to-transparent blur-2xl"></div>
            )}

            {/* Quote Icon */}
            <Quote className="text-red-500 mb-4 opacity-70" size={36} />

            {/* Image */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md border-4 border-white mb-6">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className="object-cover"
              />
            </div>

            {/* Review */}
            <p className="text-gray-700 italic mb-6 text-center">
              "{item.review}"
            </p>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              {item.name}
            </h3>

            <p className="text-red-600 text-center font-medium">
              {item.course}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
