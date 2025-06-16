export const filteredData = async (category) => {
  let url = "https://b11a11-server-side-swarnacse19.vercel.app/articles";
  if (category) {
    url += `?category=${category}`;
  }
  const res = await fetch(url);
  return await res.json();
};
