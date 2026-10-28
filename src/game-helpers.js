/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

import { keyboardArray } from "./keyboard-letters";

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = "incorrect";
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i],
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function createKeyboardArray(guesses) {
  // The same letter might have multiple matched statuses.
  // For example, if the answer is "APPLE" and the user guesses
  // "PAPER", then the letter "P" is misplaced (for the first P)
  // and correct (for the second P).
  //
  // We want to prioritize the statuses in this order:
  const STATUS_RANKS = {
    correct: 1,
    misplaced: 2,
    incorrect: 3,
    unused: 4,
  };

  const keyboardArrayReturn = [...keyboardArray];

  const guessedLetters = guesses.flat();

  guessedLetters.forEach(({ letter, status }) => {
    keyboardArrayReturn.forEach((letterRow) => {
      letterRow.forEach((keyboardLetter) => {
        const currentStatus = keyboardLetter.status;

        if (keyboardLetter.letter == letter) {
          const currentStatusRank = STATUS_RANKS[currentStatus];
          const nextStatusRank = STATUS_RANKS[status];

          if (nextStatusRank < currentStatusRank) {
            keyboardLetter.status = status;
          }
          return;
        }
      });
    });
  });

  return keyboardArrayReturn;
}
