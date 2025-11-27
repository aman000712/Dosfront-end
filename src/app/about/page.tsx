"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Users } from "lucide-react";

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

      <section className="w-full py-32 bg-linear-to-r from-red-600 to-red-400 text-white text-center px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold"
          >
            About DOS Multi Services Pvt. Ltd.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
          >
            Empowering careers through international language training,
            professional accounting skills, and modern IT education.
          </motion.p>
        </motion.div>
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

      <section className="py-20 bg-linear-to-r from-red-600 to-red-400 text-white text-center px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Ready to Start Your Learning Journey?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl text-white/90"
          >
            Connect with us and take your first step toward a successful future.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            className="mt-8 px-10 py-4 bg-white text-red-600 font-bold rounded-full shadow-xl text-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}
