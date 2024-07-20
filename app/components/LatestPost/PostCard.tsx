import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  date: string;
  image: string;
}

const PostCard = ({ date, image, title }: Props) => {
  return (
    <div className="flex h-[200px] items-center space-x-6 mb-[1.5rem] bg-[#1f1d1d]">
      {/* image */}
      <div className="h-[100%] hidden sm:block">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-[100%] object-cover"
        />
      </div>
      {/* content */}
      <div className="">
        <div className="flex items-center space-x-4">
          <h1 className="px-4 py-1 bg-red-500 text-[10px] sm:text-[12px] md:text-[14px] text-white uppercase">
            FootBall
          </h1>
          <p className="text-white text-[10px] sm:text-[12px] md:text-[14px]">
            {date}
          </p>
        </div>
        <h1 className="text-[14px] sm:text-[16px] md:text-[20px] font-semibold hover:text-red-500 hover:underline cursor-pointer transition-all duration-300 mt-[1rem] text-white">
          {title}
        </h1>
        <p className="mt-[2rem] hover:text-red-500 hover:underline cursor-pointer transition-all duration-300 text-white text-[12px] sm:text-[14px] md:text-[17px] font-semibold w-fit">
          Read More
        </p>
      </div>
    </div>
  );
};

export default PostCard;
