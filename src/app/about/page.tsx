"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import backgroundImage from "../../../public/background.jpg";
import { GrView } from "react-icons/gr";
import { MdTextsms } from "react-icons/md";

import Testimonials from "@/Components/Testimonials";

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

const founders = [
  {
    name: "Mrs. Rajeshwori Mehta",
    title: "Chaiperson",
    image: "/human1.jpg",
  },
  {
    name: "Prof. Tika Devi",
    title: "Academic Head",
    image: "/human2.jpg",
  },
  {
    name: "Mrs. Neeta Sharma",
    title: "Founder and Dean",
    image: "/human3.jpg",
  },
  {
    name: "Mr. Rajesh Bhandari",
    title: "Co-Founder",
    image: "/human1.jpg",
  },
  {
    name: "Miss Aarati Thapa",
    title: "Member",
    image: "/human2.jpg",
  },
  {
    name: "Mrs. Bijaya Kunwar",
    title: "Memeber",
    image: "/human3.jpg",
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
            className="text-4xl md:text-6xl font-extrabold"
          >
            About DOS Multi Services Pvt. Ltd.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="mt-4 text-sm md:text-xl max-w-3xl mx-auto text-white/90"
          >
            Empowering careers through international language training,
            professional accounting skills, and modern IT education.
          </motion.p>
        </motion.div>

        <div
          className="absolute bottom-0 w-full left-0 py-2 flex gap-2 items-center  backdrop-blur-2xl text-white px-14
         bg-black/10 border-white/20 shadow-red-600/20"
        >
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
          className="flex flex-col md:flex-row gap-12 text-justify  md:text-left"
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
           <Testimonials/>
      <section className="md:py-20 py-6 w-full mx-auto   px-2 md:px-20  ">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-black-600"
        >
          Why Students <span className="text-red-600"> Choose Us</span>
        </motion.h2>

        <div className="mt-16 flex flex-col md:flex-row items-center  justify-center gap-6">
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
            className="md:w-1/2 w-11/12  flex flex-col gap-6"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={cardUp}
                className="md:px-6 px-3 bg-red-100 py-2 flex gap-4 w-full md:w-fit rounded-2xl shadow hover:shadow-xl transition-all hover:scale-102 cursor-pointer duration-700"
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

      <section className="relative py-16 h-full flex flex-col items-center justify-start gap-8 text-black text-center bg-gray-100 ">
        <div className="flex flex-col items-center justify-start mx-auto gap-4 h-fit  w-full ">
          <h1 className="md:text-5xl  text-3xl font-bold "> Our Team</h1>
          <p className="text-gray-500 text-lg">
            This is the team member section of our institution who have given
            their contributions
          </p>
        </div>

        <div className="py-6 md:py-8 overflow-hidden w-11/13 grid grid-cols-1 md:grid-cols-3 gap-10 h-full  md:px-8 px-4">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="py-6 rounded-2xl  bg-linear-to-r from-red-100 to-white cursor-pointer shadow hover:shadow-xl hover:scale-105 transition duration-700"
            >
              <div className="relative w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-gray-600 border-2">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl text-gray-700 font-semibold">
                {founder.name}
              </h3>
              <p className="text-gray-500 font-medium pb-2">{founder.title}</p>
            </motion.div>
          ))}
        </div>
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
