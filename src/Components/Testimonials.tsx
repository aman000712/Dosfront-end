"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  {
    name: "Nirajan Magar",
    image: "/students/sample.jpg",
    course: "Web Development",
    review:
      "The instructors helped me build real projects and boosted my confidence.",
  },
];

export default function TestimonialCards() {
  return (
    <section className="py-24  text-white overflow-hidden">
      <h2 className="text-center text-5xl font-extrabold">
        Student <span className="text-red-500">Testimonials</span>
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
        Hear what our students say about their experience with us.
      </p>

      {/* Infinite Scroll Wrapper */}
      <div className="relative mt-20">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
              bg-linear-r from-red-400 to-red-900 
                rounded-3xl p-6 w-[330px] h-[260px]
                shadow-lg hover:shadow-red-500/20
                transition backdrop-blur-xl
              "
            >
              <p className="text-gray-200 italic text-sm leading-relaxed">
                “{item.review}”
              </p>

              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border border-white/10"
                  alt={item.name}
                />

                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-red-400 text-sm">{item.course}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
