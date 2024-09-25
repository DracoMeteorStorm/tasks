import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript <br></br>
                by Tolu
                <br></br>
                Hello World
                <h1>header text</h1>
                {/* <img src={God} alt="god" /> */}
                <ul>
                    <li>yummerzzzzzzzz.</li>
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

            <DoubleHalf></DoubleHalf>

            <hr />
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <div> can you type real text</div>
            <hr />

            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
        </div>
    );
}

export default App;
