import React from 'react';
import { useLoaderData } from 'react-router';

function ArticlesDetails() {
    const article = useLoaderData();
    console.log(article);
  return (
    <div>
      <h1>tumi ekhane aste parso</h1>
    </div>
  );
}

export default ArticlesDetails;