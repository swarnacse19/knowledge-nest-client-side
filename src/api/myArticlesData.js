export const myArticlesData = async (userId, accessToken) => {
  const res = await fetch(`http://localhost:5000/articles/author?uid=${userId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });
  return await res.json();
};
