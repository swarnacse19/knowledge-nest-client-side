import React from 'react';
import Banner from '../components/Banner';
import FeaturedArticles from './FeaturedArticles';
import Categories from './Categories';
import StudentSpotlight from '../components/StudentSpotlight';
import TopContributors from '../components/TopContributors';
import GoogleMapSection from '../components/GoogleMapSection';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedArticles></FeaturedArticles>
      <Categories></Categories>
      <TopContributors></TopContributors>
      <StudentSpotlight></StudentSpotlight>
      <GoogleMapSection></GoogleMapSection>
    </div>
  );
}

export default Home;