import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

function Banner() {
  return (
    <div
      className="relative hero min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]"
      style={{
        backgroundImage: `url('https://i.ibb.co/qLm7tttG/bg2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

      <div className="hero-content text-center text-white px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            animate={{
              color: ["#22c55e", "#ef4444", "#3b82f6"],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="mb-5 text-xl sm:text-3xl md:text-5xl font-bold"
          >
            Share Your Knowledge
          </motion.h1>
          <p className="mb-8 text-sm sm:text-base md:text-lg font-medium text-gray-700">
            An interactive platform designed for students to share insightful
            articles, exchange knowledge, and foster meaningful discussions
            through comments and collaboration.
          </p>
          <Link
            to="/articles"
            className="py-3 rounded-md px-8 md:px-12 bg-black text-white font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Explore Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
