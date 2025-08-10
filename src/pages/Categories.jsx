import { useEffect, useState } from "react";
import { Link } from "react-router";

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
    <div className="my-20 px-14 mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {categories.map((cat, index) => (
          <Link
            to={`/category/${cat}`}
            key={index}
            className="px-5 text-center text-black py-2 bg-white border border-blue-700 rounded-2xl hover:bg-gray-300 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
