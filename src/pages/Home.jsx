import React from 'react';
import Banner from '../components/Banner';
import FeaturedArticles from './FeaturedArticles';
import Categories from './Categories';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedArticles></FeaturedArticles>
      <Categories></Categories>
    </div>
  );
}

export default Home;