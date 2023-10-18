// import Tracker from "./components/tracking/Tracker";
import React, {useEffect, useState} from "react";
import FabricBlock from "../components/fabrics/FabricBlock";
import AnswerButtons from "../components/buttons/AnswerButtons";


export default function Main() {

    const [index, setIndex] = useState(0);
    const [log, setLog] = useState([])
    const [options, setOptionsArr] = useState([])
    const [fabric, setFabric] = useState(null)
    const [fabricsUsed, setFabricsUsed] = useState([])

    let fabrics = ["denim", "jute"]

    const setOptions = (max) => {
        let option1 = Math.floor(Math.random() * max);
        let option2 = Math.floor(Math.random() * max);
        if (fabricsUsed.length !== fabrics.length) {
            while (fabricsUsed.includes(fabrics[option1])) {
                option1 = Math.floor(Math.random() * max);
            }
            while (option1 === option2) {
                option2 = Math.floor(Math.random() * max);
            }
            setFabric(fabrics[option1]);
            setOptionsArr([fabrics[option1], fabrics[option2]]);
            setFabricsUsed([...fabricsUsed, fabrics[option1]]);
            console.log(fabricsUsed)
        }

    }

    const downloadResults = () => {
        const fileData = JSON.stringify(log);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "test.txt";
        link.href = url;
        link.click();
    }


    useEffect(() => {
        setOptions(fabrics.length)
        // console.log(index)
        if (fabricsUsed.length === fabrics.length) {
            downloadResults()
        }
    }, [fabrics.length, index])

    return (
        fabrics.length !== fabricsUsed.length ? <>
                <FabricBlock fabric={fabric} options={options} index={index}/>
                <AnswerButtons fabric={fabric} log={log} setLog={setLog} options={options}
                               index={index} setIndex={setIndex}/>
            </> :
            <>

                {/*@todo maak eindscherm*/}
                <h1>Einde van de test</h1>
            </>

    )
        ;
}
