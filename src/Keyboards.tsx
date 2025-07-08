import { KEYS } from "./constants/keyboard.keys";
import styles from "./Keyboard.module.css";
import type { KeyboardsProps } from "./types/KeyboardsProps";

export function Keyboards({ disabled = false, activeLetter, inactiveLetters, addGuessedLetters }: KeyboardsProps) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(85px, 1fr))",
            gap: ".5rem"
        }} >
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button
                    onClick={() => addGuessedLetters(key)}
                    className={`
                    ${styles.btn}
                    ${isActive ? styles.active : ""}
                    ${isInactive ? styles.inactive : ""}
                    `}
                    disabled={isInactive || isActive || disabled}
                    key={key}>
                    {key}
                </button>
            })}
        </div>
    )
}
