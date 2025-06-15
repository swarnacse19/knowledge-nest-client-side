import { useEffect, useState } from "react";
import { Link } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="my-10 max-w-11/12 mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-center">Categories</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat, index) => (
          <Link
            to={`/category/${cat}`}
            key={index}
            className="px-7 py-2 bg-gray-200 rounded-2xl hover:bg-gray-300 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
