export const myArticlesData = async (userId, accessToken) => {
  const res = await fetch(
    `https://b11a11-server-side-swarnacse19.vercel.app/articles/author?uid=${userId}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return await res.json();
};
