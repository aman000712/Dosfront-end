"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import backgroundImage from "../../../public/background.jpg";

// FRAMER VARIANTS

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// WHY CHOOSE ITEMS
const whyChooseUs = [
  {
    icon: <Target size={40} className="text-red-600" />,
    title: "Expert Instructors",
    desc: "Learn from certified language trainers, IT professionals, and accounting experts.",
  },
  {
    icon: <ShieldCheck size={40} className="text-red-600" />,
    title: "Trusted & Registered",
    desc: "A legally certified and reliable training institute with strong reputation.",
  },
  {
    icon: <Users size={40} className="text-red-600" />,
    title: "Student-Focused Learning",
    desc: "Flexible timings, practical teaching, and personalized support for every learner.",
  },
];


export default function AboutPage() {
  return (
    <div className="w-full">

      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          className="w-full h-full object-cover"
          src="/herosection.jpg"
          alt="About Banner"
          fill
          priority
        />

        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center"
          variants={staggerParent}
          initial="hidden"
          animate="show"
          transition={{ duration: 2 }}
        >
          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            About DOS Multi Services Pvt. Ltd.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}

            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
          >
            Empowering careers through international language training,
            professional accounting skills, and modern IT education.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 w-full py-2 flex gap-2 items-center justify-start backdrop-blur-2xl text-white px-14
         bg-black/10 border-white/20 shadow-red-600/20">
          <FaArrowLeft />
          <button className="text-white font-medium hover:underline cursor-pointer">
            <Link href="/"> Home</Link>
          </button>
          <h1>/</h1>
          <h1 className="font-medium text-white underline underline-offset-2">
            About
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-red-600"
          >
            Our Mission
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed"
          >
            To deliver job-oriented, high-quality, and practical education
            that prepares individuals to compete globally across languages,
            accounting, and IT fields.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50 px-6 md:px-20">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-red-600"
          >
            Our Vision
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed"
          >
            To become Nepal’s most trusted institute for language preparation,
            professional accounting training, and IT career development —
            creating skilled individuals ready for global opportunities.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-red-600"
        >
          Why Students Choose Us
        </motion.h2>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              variants={cardUp}
              className="p-8 bg-gray-50 border rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>


      <section className="relative py-20 h-[50vh] flex items-center justify-center text-white text-center px-6">
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"

          />
          <div className="absolute inset-0 opacity-50 bg-black/50"></div>
        </div>


        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 2, staggerChildren: 0.3 }}   
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 1.6, ease: "easeOut" }}    
            className="text-4xl md:text-5xl font-extrabold"
          >
            Ready to Start Your Learning Journey?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-white/90"
          >
            Connect with us and take your first step toward a successful future.
          </motion.p>

          <motion.button
            variants={fadeUp}
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            className="mt-8 px-6 py-3 bg-white text-red-600 font-bold rounded-full shadow-xl text-lg cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>


      </section>

    </div>
  );
}

