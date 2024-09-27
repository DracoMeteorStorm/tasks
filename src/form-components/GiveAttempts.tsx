import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    // State to track the number of attempts left and the requested number of attempts
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    // Handler for using an attempt (decreases by 1)
    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    // Handler for gaining attempts (increases by the requested amount)
    const gainAttempts = () => {
        const gain = parseInt(requestedAttempts);
        if (!isNaN(gain)) {
            setAttemptsLeft(attemptsLeft + gain);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
                placeholder="Enter attempts to gain"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
