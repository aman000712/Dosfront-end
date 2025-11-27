"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Users } from "lucide-react";
import { GrView } from "react-icons/gr";
import { MdTextsms } from "react-icons/md";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

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
  {
    icon: <ShieldCheck size={40} className="text-red-600" />,
    title: "Trusted & Registered",
    desc: "A legally certified and reliable training institute with strong reputation.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="w-full py-32 bg-linear-to-r from-red-600 to-red-400 text-white text-center px-6">
        <motion.div variants={staggerParent} initial="hidden" animate="show">
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

      
      <section className="py-20 px-6 md:px-24 bg-gray-200 w-full h-full">
  <motion.div
    variants={staggerParent}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-col md:flex-row gap-12 text-center  md:text-left"
  >
  
    <motion.div
      variants={fadeUp}
      className="flex flex-col bg-white rounded-lg shadow-md cursor-pointer hover:scale-102 duration-700 transition-all hover:shadow-2xl overflow-hidden"
    >
    
      <div className="h-48 md:h-60 w-full">
        <img
          src="/image.jpg"
          alt="Our Mission"
          className="w-full h-full object-cover "
        />
      </div>

    
      <div className="p-6 md:p-6 flex flex-col gap-2">
        <div className="flex items-center gap-4 ">
          <h1 className="text-3xl text-red-600 mt-2">
            <GrView />
          </h1>
          <motion.h2 className="text-2xl md:text-3xl font-bold text-red-600">
            Our Mission
          </motion.h2>
        </div>
        <motion.p className="mt-4 text-gray-700 text-lg leading-relaxed">
          To deliver job-oriented, high-quality, and practical education
          that prepares individuals to compete globally across languages,
          accounting, and IT fields.
        </motion.p>
      </div>
    </motion.div>

  
    <motion.div
      variants={fadeUp}
      className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-102 duration-700 transition-all  hover:shadow-2xl"
    >

      <div className="h-48 md:h-60 w-full">
        <img
          src="/image.jpg"
          alt="Our Vision"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="p-6 md:p-6 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl text-red-600 mt-2">
            <MdTextsms />
          </h1>
          <motion.h2 className="text-2xl md:text-3xl font-bold text-red-600">
            Our Vision
          </motion.h2>
        </div>
        <motion.p className="mt-4 text-gray-700 text-lg leading-relaxed">
          To empower students with skills and knowledge to succeed in a
          rapidly changing global environment and create impactful careers
          in diverse industries.
        </motion.p>
      </div>
    </motion.div>
  </motion.div>
</section>

      <section className="md:py-20 py-12 w-full mx-auto   px-6 md:px-20  ">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-black-600"
        >
          Why Students <span className="text-red-600"> Choose Us</span>
        </motion.h2>

        <div className="mt-16 flex flex-col md:flex-row items-center h-fit justify-center gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className=" flex justify-center items-center  "
          >
            <Image
              src="/image.jpg"
              alt="Description of image"
              width={400}
              height={50}
              className="rounded-xl object-cover h-[75vh] w-[70vh]  "
            />
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-1/2 flex flex-col gap-6"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={cardUp}
                className="px-6 bg-gray-100 py-2 flex gap-4 rounded-2xl shadow hover:shadow-xl transition-all hover:scale-102 cursor-pointer duration-700"
              >
                <div className="my-4 flex text-center ">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-red-500 to-red-200 text-white text-center px-6">
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
            whileHover={{ scale: 1.06 }}
            className="mt-8 px-10 py-4 bg-white text-red-600 font-bold rounded-full shadow-xl text-lg cursor-pointer duration-500 "
          >
            Contact Us
          </motion.button>
        </motion.div>


      </section>
    </div>
  );
}

