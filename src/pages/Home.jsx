import React from 'react';
import Banner from '../components/Banner';
import FeaturedArticles from './FeaturedArticles';
import Categories from './Categories';
import StudentSpotlight from '../components/StudentSpotlight';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedArticles></FeaturedArticles>
      <Categories></Categories>
      <StudentSpotlight></StudentSpotlight>
    </div>
  );
}

export default Home;