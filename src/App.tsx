import words from "./wordList.json"
import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboards } from "./Keyboards";

function App() {
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  console.log(wordToGuess)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLooser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLooser || isWinner) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },
    [guessedLetters, isWinner, isLooser]
  )

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (!key.match(/^[a-z]$/)) return

      event.preventDefault()
      addGuessedLetters(key)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler);
  }, [guessedLetters, addEventListener])

  return <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>

    {/* Winner/Looser Status */}
    <div style={{
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center"
    }}>
      {isWinner && "Winner! - Refresh to try again"}
      {isLooser && "Nice try! - Refresh to try again"}
    </div>

    {/* Hangman Body Parts*/}
    <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

    {/* Words Area */}
    <HangmanWord reveal={isLooser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

    {/* Keyboard Event for Word to Guess */}
    <div style={{ alignSelf: "stretch" }}>
      <Keyboards
        disabled={isWinner || isLooser}
        activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetters={addGuessedLetters}
      />
    </div>
  </div>
}

export default App
