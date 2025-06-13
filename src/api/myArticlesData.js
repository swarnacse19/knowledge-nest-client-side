export const myArticlesData = async (userId) => {
  const res = await fetch(`http://localhost:5000/articles?uid=${userId}`);
  return await res.json();
};
