import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Banner() {
  return (
    <div
      className="relative hero min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/shutterstock/videos/1017418033/thumb/1.jpg?ip=x480')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div> */}

      <div className="hero-content text-white px-4 max-w-7xl relative z-10">
        <div className="flex justify-between items-center">
          <div className="">
            <motion.h1
              animate={{
                color: ["#884f3d", "#ef4444", "#773d30"],
                transition: {
                  duration: 4,
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
              className="py-3 rounded-md px-8 md:px-12 bg-black text-white font-semibold hover:bg-[#773d30] transition-colors duration-300"
            >
              Explore Articles
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* First Image (shifted right) */}
              <motion.img
                src={img1}
                alt="First"
                className="ml-8 rounded-lg min-h-28 shadow-lg"
                animate={{ x: [0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                
              />

              {/* Second Image (normal position) */}
              <motion.img
                src={img2}
                alt="Second"
                className="rounded-lg shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                
              />
            </div>

            {/* Right Column */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={img3} alt="Third" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
