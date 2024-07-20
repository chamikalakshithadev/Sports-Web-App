import React from "react";
import HighlightsCard from "./HighlightsCard";

const MatchHighlights = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">Match Highlights</h1>
      <div className="mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
        {/* cards */}
        <div className="">
          {/* HighlightsCard */}
          <HighlightsCard
            image="/images/h1.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="19 July 2024"
          />
        </div>
        <div className="">
          {/* HighlightsCard */}
          <HighlightsCard
            image="/images/h2.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="20 July 2024"
          />
        </div>
        <div className="">
          {/* HighlightsCard */}
          <HighlightsCard
            image="/images/h3.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="21 July 2024"
          />
        </div>
        <div className="">
          {/* HighlightsCard */}
          <HighlightsCard
            image="/images/h4.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="22 July 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchHighlights;
