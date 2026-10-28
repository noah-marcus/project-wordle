import React from "react";

function Banner({ type, handleReset, children }) {
  return (
    <div className={`${type} banner`}>
      {children} <button onClick={handleReset}>Restart Game</button>
    </div>
  );
}

export default Banner;
