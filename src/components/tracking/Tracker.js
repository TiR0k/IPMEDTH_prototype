import "./css/Tracker.css"
import React, {useEffect, useState} from "react";
export default function Tracker(){
    // const firstTouchEvent = e.touches[0];
    const [positions, setPositions] = useState({x: 0, y: 0})


    useEffect(() => {
        window.addEventListener('touchmove', (event)=>{
            setPositions({x: event.touches[0].clientX, y: event.touches[0].clientY})
            // console.log(event)
        })
    }, []);

    const style = {
        left: positions.x -5 + "px",
        top: positions.y -5 + "px"

    }

    return (<div className="tracker" >
        <p>x: {positions.x}</p>
        <p>y: {positions.y}</p>
        <div className="tracer" style={style}></div>
        {/*<p>y: {positions.y}</p>*/}
    </div>)
}