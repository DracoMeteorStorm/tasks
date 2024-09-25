import React, { useState } from "react";
import { Button } from "react-bootstrap";

// ShoveBoxButton component to handle button click and update position
function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(position + 4); // Increase position by 4
            }}
        >
            Shove the Box
        </Button>
    );
}

// MoveableBox component to render the box based on the current position
function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px", // Set the margin based on position
            }}
        ></div>
    );
}

// ShoveBox component that manages state for position
export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10); // Initialize position state

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}px</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} />
            </div>
        </div>
    );
}
