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
      <h2 className="text-3xl md:text-4xl text-[#773d30] font-bold mb-10 text-center">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {categories.map((cat, index) => (
          <Link
            to={`/category/${cat}`}
            key={index}
            className="px-5 text-center text-white font-medium py-2 bg-[#8f4939] rounded-2xl hover:bg-[#7f4132] transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
