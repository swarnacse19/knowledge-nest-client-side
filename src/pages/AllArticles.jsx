import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const AllArticles = () => {
  const initialArticles = useLoaderData();
  const [articles, setArticles] = useState(initialArticles);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // Load categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Filtered articles fetch
  useEffect(() => {
    const fetchFilteredArticles = async () => {
      setLoading(true);
      let url = "http://localhost:5000/articles";
      if (category) {
        url += `?category=${category}`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching filtered articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredArticles();
  }, [category]);

  return (
    <div>
      <h2>All Articles</h2>

      <label>
        Filter by Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      {loading ? (
        <><Loading></Loading></>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article._id}>{article.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllArticles;
