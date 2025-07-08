export type KeyboardsProps = {
    disabled?: boolean
    activeLetter: string[],
    inactiveLetters: string[],
    addGuessedLetters: (letter: string) => void
}