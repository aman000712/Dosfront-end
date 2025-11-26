'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navbars = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%]"
    >
      <div
        className={`
          backdrop-blur-xl border rounded-full px-10 py-4 shadow-lg
          flex justify-between items-center transition-all duration-300
          ${scrolled
            ? "bg-white border-black/10 shadow-black/20"
            : "bg-white/10 border-white/20 shadow-red-600/20"
          }
        `}
      >
        {/* LOGO */}
        <div
          className={`
            font-bold text-xl tracking-wide transition-colors duration-300
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          DOS<span className={`${scrolled ? "text-red-600" : "text-red-500"}`}>.</span>
        </div>

        {/* NAVIGATION */}
        <div className="flex gap-10">
          {navbars.map((val, i) => (
            <Link key={i} href={val.link}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`
                  font-medium cursor-pointer transition-colors duration-300
                  ${scrolled ? "text-black hover:text-red-600" : "text-white hover:text-red-500"}
                `}
              >
                {val.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
