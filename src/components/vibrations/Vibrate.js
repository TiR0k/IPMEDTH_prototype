import {useEffect, useRef, useState} from "react";

export default function Vibrate() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    const handleEnter = () => {
        navigator.vibrate([100, 1])
    }
    const handleOver = () => {
        navigator.vibrate([75, 1])
    }
    const handleCapture = () => {
        navigator.vibrate([50, 1])
    }
    const handleMove = () => {
        navigator.vibrate([10, 1])
    }

    // INTENSITY BETWEEN 0.0 AND 1.0
    // DURATION IS VIBRATION TIME IN MS
    const genVibratorPattern = (intensity, duration) => {
        let dutyCycle = Math.abs((intensity * 2.0) - 1.0);
        let hWidth = (dutyCycle * (duration - 1)) + 1;
        let lWidth = dutyCycle === 1.0 ? 0 : 1;

        let pulseCount = (2.0 * (duration / (hWidth + lWidth)));
        let pattern = [pulseCount];

        pattern.map((pulseCount, index) => (
            pattern[index] = intensity < 0.5 ? (index % 2 === 0 ? hWidth : lWidth) : (index % 2 === 0 ? lWidth : hWidth)
        ))

        return pattern;
    }

    return (
        <>
            <div className={"block"} onPointerOver={handleMove}>1</div>
            <div className={"block1"} onPointerOver={handleCapture}>2</div>
            <div className={"block2"} onPointerOver={handleOver}>3</div>
            <div className={"block3"} onPointerOver={handleEnter}>4</div>
            {/*// <button className={"button1"} onClick={vibrateApp}>1</button>*/}

        </>
    )
}
