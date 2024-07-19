import React from "react";
import NewsCard from "../Helper/NewsCard";
import SmallNewsCard from "../Helper/SmallNewsCard";

const LatestNews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">Latest News</h1>
      <div className="w-[80%] mx-auto pt-[4rem] gird grid-cols-1 lg:grid-cols-5 gap-[2rem] ">
        {/* big card */}
        <div className="col-span-3">
          <NewsCard
            image="/images/n1.jpg"
            date="July 17 , 2024"
            title="What's new in team england"
            height="h-[400px]"
          />
        </div>
        {/* small card */}
        <div className="col-span-2">
          <div className="">
            {/* small card */}
            <SmallNewsCard
              image="/images/n1.jpg"
              date="July 17,2024"
              title="Whats new in england team"
            />
          </div>
          <div className="mt-[1.4rem] mb-[1.4rem]">
            {/* small card */}
            <SmallNewsCard
              image="/images/n2.jpg"
              date="July 17,2024"
              title="Whats new in england team"
            />
          </div>
          <div className="">
            {/* small card */}
            <SmallNewsCard
              image="/images/n3.jpg"
              date="July 17,2024"
              title="Whats new in england team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
