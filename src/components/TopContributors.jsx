import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { LiaCommentDots } from "react-icons/lia";

const topContributors = [
  {
    name: "Shaida Khanom Sharna",
    image: "https://i.ibb.co/jv81Z19r/girl1.jpg",
    articles: 12,
    comments: 20,
  },
  {
    name: "Sanjida Akter Saba",
    image: "https://i.ibb.co/LXxHXP5g/girl2.jpg",
    articles: 8,
    comments: 15,
  },
  {
    name: "Sadika Alom Chowa",
    image: "https://i.ibb.co/v6TrY4pZ/girl3.jpg",
    articles: 5,
    comments: 12,
  },
  {
    name: "Shraboni Saha",
    image: "https://i.ibb.co.com/PG2t59xS/student3.webp",
    articles: 5,
    comments: 12,
  },
];

const TopContributors = () => {
  return (
    <div className="my-28 px-4 md:px-14 mx-auto">
      <h2 className="text-3xl md:text-4xl flex items-center justify-center gap-3 font-bold mb-14 text-[#773d30]"><FaStarHalfAlt color=""/> Top Contributors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topContributors.map((user, index) => (
          <div
            key={index}
            className="shadow-md bg-[#F4B7A8] rounded-2xl p-6 text-center transition hover:scale-105 duration-300"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-700"
            />
            <h3 className="text-xl mb-3 font-semibold">{user.name}</h3>
            <p className="text-gray-600 flex justify-center items-center  gap-3"><LuNotebookPen size={20}/> Articles: {user.articles}</p>
            <p className="text-gray-600 flex justify-center items-center gap-3"><LiaCommentDots size={24}/>  Comments: {user.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopContributors;