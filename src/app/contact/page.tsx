"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

//FRAMER MOTION VARIANTS 
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const contactInfo = [
  {
    icon: <Phone className="text-red-600" size={32} />,
    title: "Phone",
    value: "+977-9800000000",
  },
  {
    icon: <Mail className="text-red-600" size={32} />,
    title: "Email",
    value: "info@dosmultiservices.com",
  },
  {
    icon: <MapPin className="text-red-600" size={32} />,
    title: "Location",
    value: "Kathmandu, Nepal",
  },
];

export default function page() {
  return (
    <div className="w-full bg-white">

      <section className="w-full py-28 bg-linear-to-r from-red-600 to-red-400 text-white text-center px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Contact Us
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90"
        >
          Have questions? We’re here to help you start your career journey.
        </motion.p>
      </section>

      <section className="py-20 px-6 md:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="p-8 bg-gray-50 rounded-2xl border shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50 px-6 md:px-20">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-red-600"
        >
          Send Us a Message
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12 max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg border"
        >
          <form className="grid grid-cols-1 gap-6">

            {/* NAME */}
            <div>
              <label className="font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-4 border rounded-xl outline-red-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-4 border rounded-xl outline-red-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-semibold text-gray-700">Message</label>
              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full mt-2 p-4 border rounded-xl outline-red-500"
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </motion.button>

          </form>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold text-red-600"
        >
          Visit Us
        </motion.h2>

        <div className="mt-10 w-full h-[350px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 font-semibold">
          Google Map Embed (Add Later)
        </div>
      </section>
    </div>
  );
}
