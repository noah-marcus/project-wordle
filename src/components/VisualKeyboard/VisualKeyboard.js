import React from "react";
import { createKeyboardArray } from "../../game-helpers";

function VisualKeyboard({ validatedGuesses }) {
  const keyboard = createKeyboardArray(validatedGuesses);
  console.log(keyboard);

  return (
    <div className="visual-keyboard">
      {keyboard.map((letterRow, index) => {
        return (
          <div key={index} className="visual-keyboard-row">
            {letterRow.map((letterData, index) => {
              return (
                <div
                  key={index}
                  className={`visual-keyboard-cell ${letterData.status}`}
                >
                  {letterData.letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default VisualKeyboard;
