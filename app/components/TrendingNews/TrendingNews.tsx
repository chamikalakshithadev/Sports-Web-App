import React from "react";
import NewsCard from "../Helper/NewsCard";

const TrendingNews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">Trending News</h1>

      {/* card div */}
      <div className="pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
        {/* card 1 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className=""
        >
          {/* NewsCard */}
          <NewsCard
            image="/images/n1.jpg"
            date="March 21, 2024"
            title="Whats new in England Team"
            height="h-[300px]"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
          className=""
        >
          {/* NewsCard */}
          <NewsCard
            image="/images/n2.jpg"
            date="March 22, 2024"
            title="Whats new in England Team"
            height="h-[300px]"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
          className=""
        >
          {/* NewsCard */}
          <NewsCard
            image="/images/n3.jpg"
            date="March 23, 2024"
            title="Whats new in England Team"
            height="h-[300px]"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
          className=""
        >
          {/* NewsCard */}
          <NewsCard
            image="/images/n4.jpg"
            date="March 24, 2024"
            title="Whats new in England Team"
            height="h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
