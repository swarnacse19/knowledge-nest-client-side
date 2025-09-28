import React, { useState } from "react";
import { FaStarHalfAlt, FaArrowDown } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { LiaCommentDots } from "react-icons/lia";

const topContributors = [
  {
    name: "Shaida Khanom Sharna",
    image: "https://i.ibb.co/jv81Z19r/girl1.jpg",
    articles: 12,
    comments: 20,
    text: "Sharna is one of the most active contributors, sharing valuable articles and engaging with peers.",
    bg: "bg-[#773d30]",
  },
  {
    name: "Sanjida Akter Saba",
    image: "https://i.ibb.co/LXxHXP5g/girl2.jpg",
    articles: 8,
    comments: 15,
    text: "Saba always provides helpful comments and insightful content for the community.",
    bg: "bg-[#773d30]",
  },
  {
    name: "Sadika Alom Chowa",
    image: "https://i.ibb.co/v6TrY4pZ/girl3.jpg",
    articles: 5,
    comments: 12,
    text: "Chowa contributes consistently with her thoughtful posts and discussions.",
    bg: "bg-[#773d30]",
  },
  {
    name: "Shraboni Saha",
    image: "https://i.ibb.co.com/PG2t59xS/student3.webp",
    articles: 5,
    comments: 12,
    text: "Shraboni shares meaningful perspectives and interacts actively with others.",
    bg: "bg-[#773d30]",
  },
];

const TopContributors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === topContributors.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="my-28 relative">
      <h2 className="text-3xl md:text-4xl flex items-center justify-center gap-3 font-bold mb-10 text-[#773d30]">
        <FaStarHalfAlt /> Top Contributors
      </h2>

      {/* Slider container */}
      <div className="relative h-[400px] overflow-hidden ">
        <div
          className="transition-transform duration-500"
          style={{
            transform: `translateY(-${currentIndex * 400}px)`,
          }}
        >
          {topContributors.map((user, index) => (
            <div
              key={index}
              className={`${user.bg} flex flex-col md:flex-row items-center justify-center h-[400px] p-8`}
            >
              {/* Left: image */}
              <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg border-4 border-white"
                />
              </div>

              {/* Right: info */}
              <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-4">{user.name}</h3>
                <p className="text-black mb-6 text-lg">{user.text}</p>
                <p className="text-gray-900 flex items-center justify-center md:justify-start gap-2 mb-3">
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
          ))}
        </div>

        {/* Arrow button inside slider */}
        <button
          onClick={handleNext}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-white text-black"
        >
          <FaArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default TopContributors;
