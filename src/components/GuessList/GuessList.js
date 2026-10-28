import React from "react";

import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ validatedGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => {
        return (
          <Guess
            key={crypto.randomUUID()}
            value={validatedGuesses[index]}
            answer={answer}
          ></Guess>
        );
      })}
    </div>
  );
}

export default GuessList;
