import React, { useEffect, useRef, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { LiaCommentDots } from "react-icons/lia";

const topContributors = [
  {
    name: "Shaida Khanom Sharna",
    image: "https://i.ibb.co/jv81Z19r/girl1.jpg",
    articles: 12,
    comments: 20,
    text: "Sharna is one of the most active contributors, sharing valuable articles and engaging with peers.",
    bg: "bg-[#f7e1da]",
  },
  {
    name: "Sanjida Akter Saba",
    image: "https://i.ibb.co/LXxHXP5g/girl2.jpg",
    articles: 8,
    comments: 15,
    text: "Saba always provides helpful comments and insightful content for the community.",
    bg: "bg-[#f7e1da]",
  },
  {
    name: "Sadika Alom Chowa",
    image: "https://i.ibb.co/v6TrY4pZ/girl3.jpg",
    articles: 5,
    comments: 12,
    text: "Chowa contributes consistently with her thoughtful posts and discussions.",
    bg: "bg-[#f7e1da]",
  },
  {
    name: "Shraboni Saha",
    image: "https://i.ibb.co.com/PG2t59xS/student3.webp",
    articles: 5,
    comments: 12,
    text: "Shraboni shares meaningful perspectives and interacts actively with others.",
    bg: "bg-[#f7e1da]",
  },
];

const TopContributors = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => {
      setVh(window.innerHeight);
      setVw(window.innerWidth);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const rect = containerRef.current?.getBoundingClientRect();
  const containerTop = containerRef.current ? rect.top + window.scrollY : 0;
  const containerHeight = rect?.height ?? 0;
  const n = topContributors.length;
  const segment = containerHeight / n;

  // 📱 iPhone & small screen optimization
  const cardHeight = vw < 640 ? 65 : 80; // vh per card

  return (
    <section className="my-24 relative">
      <h2 className="text-3xl md:text-4xl flex items-center justify-center gap-3 font-bold mb-20 text-[#773d30]">
        <FaStarHalfAlt /> Top Contributors
      </h2>

      <div
        className="relative"
        ref={containerRef}
        style={{ height: `${n * cardHeight}vh` }}
      >
        <div className="sticky top-20 h-[50vh] w-[92%] md:w-[70%] mx-auto">
          {topContributors.map((user, i) => {
            const progressRaw =
              (scrollY - containerTop - i * segment + vh * 0.3) / segment;
            const progress = Math.max(0, Math.min(1, progressRaw));

            const translateY = -progress * 120; // % shift
            const scale = 1 - progress * 0.05;
            const opacity = 1 - progress * 0.05;

            const style = {
              transform: `translateY(${translateY}%) scale(${scale})`,
              opacity,
              zIndex: 1000 - i,
              willChange: "transform, opacity", // smoother animation
              pointerEvents: progress === 1 ? "none" : "auto", // bg card inactive
            };

            return (
              <div
                key={i}
                className={`${user.bg} absolute inset-0 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6`}
                style={style}
              >
                {/* Left: image */}
                <div className="flex-shrink-0">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
                  />
                </div>

                {/* Right: info */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                    {user.name}
                  </h3>
                  <p className="text-gray-800 mb-4">{user.text}</p>
                  <p className="text-gray-900 flex items-center justify-center md:justify-start gap-2">
                    <LuNotebookPen size={22} />{" "}
                    <span className="font-medium">Articles:</span>{" "}
                    {user.articles}
                  </p>
                  <p className="text-gray-900 flex items-center justify-center md:justify-start gap-2">
                    <LiaCommentDots size={24} />{" "}
                    <span className="font-medium">Comments:</span>{" "}
                    {user.comments}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;
