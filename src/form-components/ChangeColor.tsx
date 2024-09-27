import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState("red");

    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                }}
            ></div>
            {colors.map((colorOption) => (
                <label key={colorOption}>
                    <input
                        type="radio"
                        name="color"
                        value={colorOption}
                        onChange={() => setColor(colorOption)}
                        role="radio"
                    />
                    {colorOption}
                </label>
            ))}
        </div>
    );
}
