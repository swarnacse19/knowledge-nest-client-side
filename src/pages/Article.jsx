import React from "react";
import { Link } from "react-router";

function Article({ article }) {
  return (
    <div className="flex bg-[#F4B7A8] border border-gray-200 rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
      {/* Left Side - Thumbnail */}
      <div className="w-1/3">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h2>

        {/* Author Section */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={article.author_photo}
            alt={article.author_name}
            className="w-10 h-10 rounded-full border border-gray-300 object-cover"
          />
          <div className="text-sm text-gray-600">
            <p className="font-medium">{article.author_name}</p>
            <p>{new Date(article.date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-right">
          <Link
            to={`/article/${article._id}`}
            className="inline-block px-4 py-2 bg-[#773d30] text-white text-sm rounded-md hover:bg-[#5c2f24]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
