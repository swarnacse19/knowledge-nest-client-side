import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

function Banner() {
  return (
    <div
      className="hero h-[570px]"
      style={{
        backgroundImage: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0) 80%,
        rgba(0, 0, 0, 0.4) 100%
        ), url('https://i.ibb.co/qLm7tttG/bg2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content text-center text-black">
        <div className="max-w-2xl">
          <motion.h1
            animate={{
              color: ["#006400", "#800000", "#310062"],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="mb-5 text-2xl md:text-5xl font-bold"
          >
            Share Your Knowledge
          </motion.h1>
          <p className="mb-8 text-lg font-medium text-gray-700">
            An interactive platform designed for students to share insightful
            articles, exchange knowledge, and foster meaningful discussions
            through comments and collaboration.
          </p>
          <Link
            to="/articles"
            className="py-3 rounded-md px-12 bg-black text-white font-semibold"
          >
            Explore Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
