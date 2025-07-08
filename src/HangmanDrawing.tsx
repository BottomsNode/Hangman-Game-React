import { LEFT_ARM } from "./body-parts/arm-left"
import { RIGHT_ARM } from "./body-parts/arm-right"
import { BODY } from "./body-parts/body"
import { HEAD } from "./body-parts/head"
import { LEFT_LEG } from "./body-parts/leg-left"
import { RIGHT_LEG } from "./body-parts/leg-right"
import type { HangmanDrawingProps } from "./types/HangmanDrawingProps"

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        {/* little hanging line for man */}
        <div style={{ height: "55px", width: "6px", background: "black", position: "absolute", top: 0, right: 0 }} />
        {/* upper horizontal line*/}
        <div style={{ height: "6px", width: "200px", background: "black", marginLeft: "122px" }} />
        {/* for vertical line */}
        <div style={{ height: "400px", width: "6px", background: "black", marginLeft: "122px" }} />
        {/* for the horizontal line */}
        <div style={{ height: "6px", width: "250px", background: "black" }} />
    </div>
}
