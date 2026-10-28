import React from "react";

import Banner from "../Banner";

function LostBanner({ answer, handleReset }) {
  return (
    <Banner type="sad" handleReset={handleReset}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
