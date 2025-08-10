import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Article from "./Article";
import { filteredData } from "../api/filteredData";

const AllArticles = () => {
  const initialArticles = useLoaderData();
  const [articles, setArticles] = useState(initialArticles);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://b11a11-server-side-swarnacse19.vercel.app/categories"
        );
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const data = await filteredData(category);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="px-14 mx-auto py-5 my-20">
      <label className="font-semibold">
        Filter by Category:
        <select
          className="border font-normal ml-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className="text-black" value="">
            All
          </option>
          {categories.map((cat, idx) => (
            <option className="text-black" key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {articles.map((article) => (
            <Article key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
