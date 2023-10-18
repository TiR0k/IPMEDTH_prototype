import "./css/Tracker.css"
import React, {useEffect, useState} from "react";
import Vibrate from "../vibrations/Vibrate";

export default function Tracker() {
    // const firstTouchEvent = e.touches[0];
    navigator.vibrate = (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate);

    const [positions, setPositions] = useState({x: 0, y: 0});
    const [hit, setHit] = useState(false)
    const posArray = [100, 300, 500, 700, 900];

    useEffect(() => {
        if ('ontouchstart' in window) {
            window.addEventListener('pointermove', (event) => {
                setPositions({x: event.touches[0].clientX, y: event.touches[0].clientY})
            })
        } else {
            window.addEventListener('mousemove', (event) => {
                setPositions({x: event.clientX, y: event.clientY})
                // console.log(event.clientX)
                // posArray.forEach((pos) => {

                if ((event.clientX >= (posArray[0] - 10)) && (event.clientX <= (posArray[0] + 10))) {
                    setHit(true);
                    navigator.vibrate([100, 1]);
                } else {
                    setHit(false);
                }
                })
            // })
        }
    },);

    const style = {
        left: positions.x - 5 + "px",
        top: positions.y - 5 + "px",
        background: hit ? "red" : "aqua",
    }

    return (<div className="tracker">
        <p>x: {positions.x}</p>
        <p>y: {positions.y}</p>
        <div className="tracer" style={style}></div>
    </div>)
}