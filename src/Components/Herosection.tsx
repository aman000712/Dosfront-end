'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import herosection from '../../public/herosection.jpg';

const Herosection = () => {
  return (
    <div className="relative h-lvh w-full overflow-hidden bg-black">
      
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={herosection}
          alt="hero background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-b from-red-700/40 via-black/60 to-black/80"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-2xl leading-tight"
        >
          DOS Multi Services Pvt. Ltd.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.15 }}
          className="text-red-400 text-2xl md:text-3xl mt-2 font-semibold tracking-wide"
        >
          Empowering Skills. Shaping Careers.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="text-gray-200 text-lg md:text-xl mt-5 max-w-3xl leading-relaxed"
        >
          Professional training in Korean, Japanese & German languages, Accounting,
          Graphic Designing, Frontend, Backend & Full Stack Development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0px 0px 18px rgba(255,0,0,0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg shadow-red-600/40 shadow-lg transition-all"
          >
            Explore Courses
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
