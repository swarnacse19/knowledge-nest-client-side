import { useEffect, useState } from "react";
import Article from "./Article";
import Loading from "./Loading";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const res = await fetch("http://localhost:5000/articles");
        const data = await res.json();

        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);

        setArticles(sorted);
      } catch (err) {
        console.error("Failed to fetch featured articles:", err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="my-10 max-w-11/12 mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-center">Featured Articles</h2>
      {loading ? (
        <Loading></Loading>
      ) : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <Article key={article._id} article={article} />
        ))}
      </div>
      }
    </div>
  );
};

export default FeaturedArticles;
