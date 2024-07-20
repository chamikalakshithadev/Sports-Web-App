import React from "react";
import PostCard from "./PostCard";

const LatestPost = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      {/* heading */}
      <h1 className="heading">Latest Posts</h1>
      <div className="w-[80%] mx-auto mt-[3rem]">
        {/* postCards */}

        {/* postcard 1*/}
        <div className="">
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN CLUB BETWEEN POLICY SOLUTION"
            image="/images/n1.jpg"
            date="20 JULY 2024"
          />
        </div>
        {/* Postcard 2 */}
        <div className="">
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN CLUB BETWEEN POLICY SOLUTION"
            image="/images/n2.jpg"
            date="21 JULY 2024"
          />
        </div>
        {/* postcard 3*/}
        <div className="">
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN CLUB BETWEEN POLICY SOLUTION"
            image="/images/n3.jpg"
            date="22 JULY 2024"
          />
        </div>
        {/* postcard 4*/}
        <div className="">
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN CLUB BETWEEN POLICY SOLUTION"
            image="/images/n4.jpg"
            date="23 JULY 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
