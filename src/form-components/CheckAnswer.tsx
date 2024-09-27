import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateGivenAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    const isCorrect = givenAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={givenAnswer}
                onChange={updateGivenAnswer}
                placeholder="Enter your answer"
            />
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
