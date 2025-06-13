export const filteredData = async (category) => {
  let url = "http://localhost:5000/articles";
  if (category) {
    url += `?category=${category}`;
  }
  const res = await fetch(url);
  return await res.json();
};
