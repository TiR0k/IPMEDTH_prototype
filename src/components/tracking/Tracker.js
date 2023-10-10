import "./css/Tracker.css"
import React, {useEffect, useState} from "react";
export default function Tracker(){
    const [positions, setPositions] = useState({x: 0, y: 0})


    useEffect(() => {
        window.addEventListener('mousemove', (event)=>{
            setPositions({x: event.clientX, y: event.clientY})
        })
    }, []);

    const style = {
        left: positions.x -5 + "px",
        top: positions.y -5 + "px"

    }

    return (<div className="tracker">
        <p>x: {positions.x}, y: {positions.y}</p>
        <div className="tracer" style={style}></div>
        {/*<p>y: {positions.y}</p>*/}
    </div>)
}