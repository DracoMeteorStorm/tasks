import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Helper function to "roll" the die.
 * Returns a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dieOne, rollDieOne] = useState<number>(3);
    const [dieTwo, rollDieTwo] = useState<number>(5);

    function rollFirst(): void {
        rollDieOne(d6);
    }

    function rollSecond(): void {
        rollDieTwo(d6);
    }

    const isSnakeEyes = dieOne === 1 && dieTwo === 1;
    const isMatch = dieOne === dieTwo && !isSnakeEyes;

    return (
        <div>
            <Button onClick={rollFirst}>Roll Left</Button>
            <span data-testid="left-die">{dieOne}</span>
            <div></div>
            <Button onClick={rollSecond}>Roll Right</Button>
            <span data-testid="right-die">{dieTwo}</span>
            <div></div>
            {isSnakeEyes ?
                <span>You Lose...</span>
            : isMatch ?
                <span>You Win!</span>
            :   <span>Keep Rolling!</span>}
        </div>
    );
}
