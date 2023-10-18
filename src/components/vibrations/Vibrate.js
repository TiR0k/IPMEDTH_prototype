import {useEffect, useRef, useState} from "react";
export default function Vibrate() {

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    const handleOver = (intensity) => {
        navigator.vibrate([intensity, 1])
    }
}
