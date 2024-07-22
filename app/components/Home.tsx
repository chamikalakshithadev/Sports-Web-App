"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import TrendingNews from "./TrendingNews/TrendingNews";
import LatestNews from "./latestNews/LatestNews";
import MatchHighlights from "./MatchHighlights/MatchHighlights";
import LatestPost from "./LatestPost/LatestPost";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div>
      <Hero />
      <TrendingNews />
      <LatestNews />
      <MatchHighlights />
      <LatestPost />
    </div>
  );
};

export default Home;
