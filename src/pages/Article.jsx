import React from "react";
import { Link } from "react-router";

function Article({ article }) {
  return (
    <div className="card border border-gray-300 w-86 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p className="text-sm text-gray-500">
          By {article.author_name} <br />{" "}
          {new Date(article.date).toLocaleDateString()}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/article/${article._id}`} className="btn bg-[#773d30] text-white">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
