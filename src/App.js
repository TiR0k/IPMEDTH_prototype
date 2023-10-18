import './App.css';
import Tracker from "./components/tracking/Tracker";
import React from "react";
import Vibrate from "./components/vibrations/Vibrate";
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
            <div className="App">
                <div className="grid">
                    <div className="x"></div>
                    <div className="y"></div>
                </div>
                <Tracker/>
                <Vibrate/>
                {/*<Layout/>*/}
            </div>

    );
}

export default App;
