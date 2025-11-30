"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonial = [
  {
    name: "Aakash Thapa",
    image: "/herosection.jpg",
    course: "Korean Language (EPS)",
    review:
      "I passed my EPS exam on the first attempt. The teachers explain everything clearly and motivate you throughout.",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    image: "/herosection.jpg",
    course: "Graphic Designing",
    review:
      "The best institute for design! I learned Photoshop, Illustrator, and landed a junior designer job after training.",
    rating: 5,
  },
  {
    name: "Sujal Karki",
    image: "/herosection.jpg",
    course: "Full Stack Development",
    review:
      "Amazing course! I built real-world projects and improved my coding skills. Highly recommended for IT students.",
    rating: 4,
  },
  {
    name: "Nirajan Magar",
    image: "/herosection.jpg",
    course: "Web Development",
    review:
      "The instructors helped me build real projects and boosted my confidence.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 text-white overflow-hidden bg-linear-to-b from-gray-300 to-gray-100">
      <h2 className="text-center text-5xl font-extrabold text-gray-900">
        Student's <span className="text-red-500">Testimonials</span>
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4 md:text-lg text-sm">
        Hear what our students say about their experience with us.
      </p>

      <div className="relative mt-12">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {testimonial.map((val, idx) => (
            <div key={idx} className="flex flex-col gap-5 ">
              <div className="group relative w-[400px] min-h-[300px] cursor-pointer bg-white px-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200 flex flex-col justify-center">
                <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-gray-300/40" />

                <div className="flex items-center mb-4 gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-400 shadow-lg">
                    <Image
                      src={val.image}
                      alt={val.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {val.name}
                    </h3>
                    <p className="text-sm text-gray-500">{val.course}</p>
                  </div>
                </div>

                <div className="bg-gray-100 text-gray-800 p-4 rounded-xl relative w-full shadow-inner min-h-[120px] flex items-start overflow-visible">
                  <p className="leading-tight w-full whitespace-normal font-extralight italic text-gray-600 ">
                    '{val.review}'
                  </p>

                  <div className="absolute -bottom-3 left-6 w-4 h-4 rotate-45 bg-gray-100"></div>
                </div>

                <div className="flex gap-1 text-yellow-500 mt-6 justify-between text-xl">
                  <div className="flex">
                  {[...Array(val.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                    </div>
                  <div className="text-sm text-yellow-500 font-medium"> {val.rating}/5 rating</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
