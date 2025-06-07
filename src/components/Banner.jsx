import React from 'react';

function Banner() {
  return (
    <div
      className="hero h-[520px] rounded-2xl"
      style={{
        backgroundImage: "url('https://i.ibb.co/HL0qXW75/reading.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=""></div>

      <div className="hero-content text-center text-black">
        <div className="max-w-xl">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">Share Your Knowledge</h1>
          <p className="mb-5 text-lg">
            An interactive platform designed for students to share insightful articles,
            exchange knowledge, and foster meaningful discussions through comments and collaboration.
          </p>
          <a href="/articles" className="btn px-12 bg-black text-white font-semibold">
            Explore Articles
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
