import React from "react";

import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleReset }) {
  return (
    <Banner type="happy" handleReset={handleReset}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} Guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
