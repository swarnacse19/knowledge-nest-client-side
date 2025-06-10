import { Link, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const AllArticles = () => {
  const initialArticles = useLoaderData();
  const [articles, setArticles] = useState(initialArticles);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFilteredArticles = async () => {
      setLoading(true);
      let url = "http://localhost:5000/articles";

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (category) {
          const filteredData = data.filter(
            (article) => article.category === category
          );
          setArticles(filteredData);
        } else {
          setArticles(data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredArticles();
  }, [category]);

  return (
    <div className="max-w-11/12 mx-auto my-7">
      <label className="font-semibold">
        Filter by Category:
        <select
          className="border font-normal ml-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
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
            <div key={article._id} className="card border w-96">
              <div className="card-body">
                <h2 className="card-title">{article.title}</h2>
                <p className="text-sm text-gray-600">
                By {article.author_name} <br /> {new Date(article.date).toLocaleDateString()}
              </p>
                <div className="card-actions justify-end">
                  <Link to={`/article/${article._id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
