"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};


interface BlogItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  category: string;
  details: string;
}


const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Top 5 Programming Languages to Learn in 2026",
    desc: "Stay ahead in tech with these high-demand programming languages.",
    img: "/bgg.jpg",
    category: "IT & Technology",
    details: "We discuss Python, JavaScript, Go, Rust, and TypeScript — why they are trending and how our courses help you master them."
  },
  {
    id: 2,
    title: "5 Tips to Improve Your English for Professional Success",
    desc: "Boost your communication skills to excel in interviews and meetings.",
    img: "/bgg.jpg",
    category: "Languages",
    details: "From pronunciation to professional vocabulary, learn effective strategies that help you succeed in the workplace."
  },
  {
    id: 3,
    title: "AI & Machine Learning Trends in 2025",
    desc: "How AI is reshaping businesses and what skills you need to stay relevant.",
    img: "/bgg.jpg",
    category: "IT & Technology",
    details: "Explore emerging AI technologies, career opportunities, and how our IT programs prepare you for the future."
  },
  {
    id: 4,
    title: "Mastering English for IT Interviews",
    desc: "A guide for IT professionals to ace interviews with fluent communication.",
    img: "/bgg.jpg",
    category: "Career Tips",
    details: "Learn how technical vocabulary, interview etiquette, and clear communication can help you land your dream job."
  },
  {
    id: 5,
    title: "Upcoming Language & Tech Workshops",
    desc: "Join our interactive workshops to improve language and IT skills.",
    img: "/bgg.jpg",
    category: "Workshops & Events",
    details: "Our upcoming sessions include Python bootcamps, AI workshops, and English conversation classes."
  },
  {
    id: 6,
    title: "Success Stories: Students Who Landed Jobs After Our Courses",
    desc: "Real-life examples of learners achieving career milestones.",
    img: "/bgg.jpg",
    category: "Career Tips",
    details: "Hear how our combined language and IT training helped students get hired in top companies."
  },
];

const categories = [
  "All",
  "Languages",
  "IT & Technology",
  "Career Tips",
  "Workshops & Events",
];

export default function BlogPage() {
  const [selectedActivity, setSelectedActivity] = useState<BlogItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">

     
      <section className="relative h-[50vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/herosection.jpg"
            alt="Blog Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center"
          variants={staggerParent}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Our Blogs
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
          >
            Read the latest updates, tips, and insights from our consultancy and IT company.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 w-full left-0 py-2 flex gap-2 items-center backdrop-blur-2xl text-white px-14 bg-black/10 border-white/20">
          <FaArrowLeft />
          <Link href="/" className="font-medium hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium underline underline-offset-2">
            Blogs
          </span>
        </div>
      </section>

     
      <section className="px-6 md:px-20 mt-4 py-10">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

    
      <section className="pb-10 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 transition-all duration-500"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 flex flex-col mx-auto  justify-between   h-[28vh] gap-4 w-full">
                <h3 className="text-xl font-bold ">{blog.title}</h3>
                <p className="text-gray-600">{blog.desc}</p>

                <button
                  className="text-red-600 font-semibold hover:underline text-left cursor-pointer"
                  onClick={() => setSelectedActivity(blog)}
                >
                  Read More 
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No blogs found matching your search criteria.</p>
          </div>
        )}
      </section>

     
      {selectedActivity && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>

         
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
  <div className="bg-white flex flex-col rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
   
   
    <div className="flex justify-between items-center p-6 border-b border-red-200 bg-red-100">
      <h3 className="text-2xl md:text-3xl font-bold text-[#0B0C28]">
        {selectedActivity.title}
      </h3>
      <button
        onClick={() => setSelectedActivity(null)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <RxCross2 className="text-xl" />
      </button>
    </div>

  
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 overflow-y-auto">
      
   
      <div>
        <div className="relative w-full md:w-80 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={selectedActivity.img}
            alt={selectedActivity.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex flex-col gap-4
        
        ">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg bg-white/50 p-4 rounded-xl backdrop-blur-sm">
            {selectedActivity.desc}
          </p>

          <div className="bg-white/70 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-gray-800 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {selectedActivity.details}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
          
        </>
      )}
    </div>
  );
}
