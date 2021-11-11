import React from "react";

const Circle = ({ text, number }: { text: string; number: number }) => {
  return (
    <div className=" relative rounded-full border-white md:h-24 md:w-24 w-20 h-20 flex items-center justify-center border border-opacity-80">
      <div className="text-white">
        <p className="text-center text-2xl font-bold">{number}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Circle;
