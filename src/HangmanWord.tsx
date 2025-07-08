import type { HangmanWordProps } from './types/HangmanWordProps';

export function HangmanWord({ reveal = false, guessedLetters, wordToGuess }: HangmanWordProps) {

    const isFullyGuessed = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

    return (
        <div
            style={{
                display: 'flex',
                gap: '.25em',
                fontSize: '6em',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
            }}
        >
            {wordToGuess.split('').map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                const isHidden = !isGuessed && !reveal;

                return (
                    <span style={{ borderBottom: '.1em solid black' }} key={index}>
                        <span
                            style={{
                                visibility: isHidden ? 'hidden' : 'visible',
                                color: isFullyGuessed || isGuessed ? 'black' : reveal ? 'red' : 'transparent',
                            }}
                        >
                            {letter}
                        </span>
                    </span>
                );
            })}
        </div>
    );
}
