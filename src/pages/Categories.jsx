"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router"; 
import {
  FaMusic,
  FaPaintBrush,
  FaBook,
  FaBiking,
  FaCamera,
  FaUtensils,
  FaChess,
  FaGamepad,
} from "react-icons/fa";

const categoryIcons = {
  Music: FaMusic,
  Art: FaPaintBrush,
  Literature: FaBook,
  Cycling: FaBiking,
  Photography: FaCamera,
  Cooking: FaUtensils,
  Chess: FaChess,
  Gaming: FaGamepad,
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch(
          "https://b11a11-server-side-swarnacse19.vercel.app/categories"
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    loadCategories();
  }, []);

  return (
    <section className="py-20 my-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-[#773d30]">
          Our Categories
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore a variety of hobby categories and join the ones you love.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => {
            const Icon = categoryIcons[cat] || FaBook; 
            const gradients = [
              "from-pink-500 to-red-500",
              "from-purple-500 to-indigo-500",
              "from-blue-500 to-cyan-500",
              "from-green-500 to-teal-500",
              "from-yellow-500 to-orange-500",
              "from-rose-500 to-pink-500",
              "from-sky-500 to-blue-500",
              "from-emerald-500 to-green-500",
            ];
            const bgColor = gradients[index % gradients.length];

            return (
              <Link
                to={`/category/${cat}`}
                key={index}
                className={`p-6 rounded-xl shadow-2xl transition-transform transform hover:scale-105 duration-300 relative overflow-hidden`}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className={`absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-30 blur-md bg-gradient-to-br ${bgColor}`}
                ></div>

                <div
                  className={`text-5xl mb-4 inline-block p-3 rounded-full bg-gradient-to-br ${bgColor} text-white shadow-lg`}
                >
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-[#773d30]">
                  {cat}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
