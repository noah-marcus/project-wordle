import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import VisualKeyboard from "../VisualKeyboard/VisualKeyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  // running, won, lost
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length > 5) {
      setGameStatus("lost");
    }
  }

  function handleReset() {
    setGuesses([]);
    setGameStatus("running");
    setAnswer(sample(WORDS));
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessList
        validatedGuesses={validatedGuesses}
        answer={answer}
      ></GuessList>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      ></GuessInput>
      <VisualKeyboard validatedGuesses={validatedGuesses}></VisualKeyboard>

      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleReset={handleReset}
        ></WonBanner>
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleReset={handleReset}></LostBanner>
      )}
    </>
  );
}

export default Game;
