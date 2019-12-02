import React from "react";

const Square = () => {
  return (
    <div>
      <svg width="100" height="100">
        <rect
          x="50"
          y="50"
          width="50"
          height="50"
          style={{
            fill: "blue",
            stroke: "pink",
            strokeWidth: 5,
            fillOpacity: 0.1,
            strokeOpacity: 0.9
          }}
        />
      </svg>
    </div>
  );
};

export default Square;
