import React from "react";
import "./App.css";
import God from "./god.png";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript <br></br>
                by Tolu
                <br></br>
                Hello World
                <h1>header text</h1>
                <img src={God} alt="god" />
                <ul>
                    <li>yummers.</li>
                    <li>yummers,</li>
                    <li>yummers!</li>
                    <li>yummers?</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <div
                    style={{
                        width: "20px",
                        height: "10px",
                        backgroundColor: "red",
                    }}
                ></div>
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
