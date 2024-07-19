import React from "react";
import Hero from "./Hero/Hero";
import TrendingNews from "./TrendingNews/TrendingNews";
import LatestNews from "./latestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingNews />
      <LatestNews />
    </div>
  );
};

export default Home;
