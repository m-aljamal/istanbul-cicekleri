import React from "react";

const calculatePercentage = (start: Date, end: Date) => {
  const today = new Date();
  const prs = Math.round(((+today - +start) / (+end - +start)) * 100);
  return prs;
};

const CircularProgressBar = ({
  start,
  end,
  number,
  text,
}: {
  number: number;
  text: string;
  start: Date;
  end: Date;
}) => {
  const sqSize = 100;

  const radius = (sqSize - 2) / 2;

  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  const dashArray = radius * Math.PI * 2;

  const dashOffset =
    dashArray - (dashArray * calculatePercentage(start, end)) / 100;
  return (
    <div>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${2}px`}
        />

        <circle
          className="circle-progress "
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${2}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />

        <text
          className="circle-text font-bold text-2xl"
          x="50%"
          y="40%"
          dy=".3em"
          textAnchor="middle"
        >
          {number}
        </text>

        <text
          className="circle-text"
          x="50%"
          y="65%"
          dy=".3em"
          textAnchor="middle"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
