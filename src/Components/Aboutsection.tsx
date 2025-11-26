'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function AboutSection() {
  return (
    <section className="w-full py-24 bg-white px-6 md:px-20">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        About <span className="text-red-600">DOS Multi Services</span>
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Building Skills. Empowering Futures.
          </h3>

          <p className="text-gray-600 leading-relaxed">
            DOS Multi Services Pvt. Ltd. is a trusted education and training center 
            offering high-quality programs in foreign languages, accounting, and 
            modern IT fields. Our mission is to help individuals gain practical skills 
            that open global job opportunities.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From Korean, Japanese, and German language training to professional accounting 
            courses and IT programs like Graphic Designing, Frontend, Backend, and Full 
            Stack Development — we guide our students with expert instructors and 
            industry-based curriculum.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-3xl font-bold text-red-600">10+</h4>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-red-600">1500+</h4>
              <p className="text-gray-700">Students Trained</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-red-600">15+</h4>
              <p className="text-gray-700">Expert Instructors</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-red-600">10+</h4>
              <p className="text-gray-700">Professional Courses</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/herosection.jpg" 
              alt="office"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-600/20 rounded-xl -z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection;
