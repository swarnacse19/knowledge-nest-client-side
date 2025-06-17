import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Article from "./Article";
import { filteredData } from "../api/filteredData";

const CategoryPage = () => {
  const { name } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await filteredData(name);
        setArticles(data);
      } catch (err) {
        console.error("Error loading category articles", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [name]);

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Articles in "{name}"</h2>
      {loading ? (
        <Loading />
      ) : articles.length === 0 ? (
        <p>No articles found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Article key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
