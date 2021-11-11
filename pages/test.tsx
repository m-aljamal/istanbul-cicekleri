import React from "react";
import CircularProgressBar from "src/components/CircularProgressBar";
const test = () => {
  return (
    <div>
      <CircularProgressBar strokeWidth="10" sqSize="200" percentage={25} />
    </div>
  );
};

export default test;
