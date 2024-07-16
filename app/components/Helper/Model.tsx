import React from "react";
interface Props {
  hideModel: () => void;
}

const Model = ({ hideModel }: Props) => {
  return (
    <div className="relative ">
      {/* model overlay */}
      <div
        onClick={hideModel}
        className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000e1] z-[20]"
      ></div>

      {/* main model */}
      <div className="fixed top-[50%] left-[50%] w-[350px] h-[250px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[500px] z-[21] translate-x-[-50%] translate-y-[-50%]">
        <iframe
          src="https://youtu.be/Pir8IUxfVdU?list=PLiBlzp_IFt2WPn0nPHByA06ucc7HkU_MY"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Model;
