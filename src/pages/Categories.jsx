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

  // Soft linear gradient backgrounds for each card
  // const gradients = [
  //   "bg-gradient-to-br from-pink-50 to-red-100",
  //   "bg-gradient-to-br from-purple-50 to-indigo-100",
  //   "bg-gradient-to-br from-blue-50 to-cyan-100",
  //   "bg-gradient-to-br from-green-50 to-teal-100",
  //   "bg-gradient-to-br from-yellow-50 to-orange-100",
  //   "bg-gradient-to-br from-rose-50 to-pink-100",
  //   "bg-gradient-to-br from-sky-50 to-blue-100",
  //   "bg-gradient-to-br from-emerald-50 to-green-100",
  // ];

  const iconColors = [
    "text-pink-500",
    "text-indigo-500",
    "text-cyan-500",
    "text-green-500",
    "text-orange-500",
    "text-rose-500",
    "text-blue-500",
    "text-emerald-500",
  ];

  return (
    <section className="py-20 my-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-[#773d30]">
            Explore Our Categories
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Discover diverse hobby categories and connect with like-minded
            people in your area.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, index) => {
            const Icon = categoryIcons[cat] || FaBook;
            // const gradient = gradients[index % gradients.length];
            const iconColor = iconColors[index % iconColors.length];

            return (
              <Link
                to={`/category/${cat}`}
                key={index}
                className={`p-6 md:p-8 rounded-xl shadow-md border border-gray-100 
                            transition-all duration-300 transform 
                            hover:shadow-xl hover:-translate-y-1 cursor-pointer 
                            flex flex-col items-center text-center bg-gradient-to-br from-[#f7e1da] to-white`}
              >
                {/* Icon */}
                <div
                  className={`p-4 mb-4 rounded-full bg-white shadow-md ${iconColor}`}
                >
                  <Icon size={36} />
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  {cat}
                </h3>

                <p className="text-sm text-gray-600">Explore Groups</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
