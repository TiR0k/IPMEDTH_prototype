import './App.css';
import Tracker from "./components/tracking/Tracker";
import React from "react";
import FabricBlock from "./components/fabrics/FabricBlock";
import AnswerButtons from "./components/buttons/AnswerButtons";

function App() {
    return (
        <div className="App">
            <div className="grid">
                <div className="x"></div>
                <div className="y"></div>
            </div>
            <FabricBlock/>
            <AnswerButtons/>
        </div>
    );
}

export default App;
