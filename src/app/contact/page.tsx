"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};
const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const contactInfo = [
  {
    icon: <Phone className="text-red-600" size={32} />,
    value: "+977-9800000000",
  },
  {
    icon: <Mail className="text-red-600" size={32} />,
    value: "info@dosmultiservices.com",
  },
  {
    icon: <MapPin className="text-red-600" size={32} />,
    value: "Kathmandu, Nepal",
  },
];

export default function page() {
  return (
    <div className="w-full bg-white">
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          className="w-full h-full object-cover"
          src="/herosection.jpg"
          alt="About Banner"
          fill
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
            Contact Us
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
            Contact
          </h1>
        </div>
      </section>

      <div className="w-full min-h-screen flex items-center justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-11/12 max-w-6xl mx-auto">

         
          <motion.div
            variants={fadeUp}
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
           
            <Formik
              initialValues={{ fullName: "", email: "", message: "" }}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form className="space-y-6">

               
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 text-sm">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 transition-colors outline-none"
                  />
                  <p className="text-red-500 text-sm">
                    <ErrorMessage name="fullName" />
                  </p>
                </div>

                
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 text-sm">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 transition-colors outline-none"
                  />
                  <p className="text-red-500 text-sm">
                    <ErrorMessage name="email" />
                  </p>
                </div>

            
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 text-sm">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Write your message..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 transition-colors outline-none resize-none"
                  />
                  <p className="text-red-500 text-sm">
                    <ErrorMessage name="message" />
                  </p>
                </div>

                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow"
                >
                  Send Message <Send size={18} />
                </motion.button>

              </Form>
            </Formik>
          </motion.div>

       
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-red-600 text-3xl font-bold"
            >
              Contact Information
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4 p-4 w-3/4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div>{item.icon}</div>
                  <p className="text-gray-700">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

    
      <div className="w-10/12 mx-auto h-lvh rounded-2xl overflow-hidden p-8 flex flex-col gap-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl font-bold text-red-600 text-center tracking-wide"
        >
          Visit Us
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="flex-1 rounded-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3532.8658961844417!2d83.45987317491965!3d27.690539376192216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1762065893461!5m2!1sen!2snp"
            className="h-[70vh] w-full border-0 shadow-2xl shadow-red-200 rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>

    </div>
  );
}
