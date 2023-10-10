import logo from './logo.svg';
import './App.css';
import Tracker from "./components/tracking/Tracker";
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="grid">
                <div className="x"></div>
                <div className="y"></div>
            </div>
            <Tracker/>
        </div>
    );
}

export default App;
