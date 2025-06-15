import React from "react";

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
];

const TopContributors = () => {
  return (
    <div className="mt-16 mb-20 max-w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">🌟 Top Contributors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topContributors.map((user, index) => (
          <div
            key={index}
            className="bg-base-200 shadow-md rounded-2xl p-6 text-center transition hover:scale-105 duration-300"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-700"
            />
            <h3 className="text-xl font-semibold text-black">{user.name}</h3>
            <p className="text-gray-600">📝 Articles: {user.articles}</p>
            <p className="text-gray-600">💬 Comments: {user.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopContributors;
