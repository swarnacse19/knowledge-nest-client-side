import { useEffect, useState } from "react";
import Article from "./Article";
import Loading from "./Loading";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const res = await fetch(
          "https://b11a11-server-side-swarnacse19.vercel.app/articles"
        );
        const data = await res.json();

        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 12);

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
    <div className="my-20 px-4 lg:px-14 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#8d493a]">Featured Articles</h2>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {articles.map((article) => (
            <Article key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedArticles;
