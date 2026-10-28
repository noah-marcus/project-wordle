import React from "react";

import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter ? letter : undefined}</span>;
}

function Guess({ value }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((index) => {
          const status = value && value[index].status;
          const letter = value && value[index].letter;

          return <Cell key={index} letter={letter} status={status}></Cell>;
        })}
      </p>
    </div>
  );
}

export default Guess;
