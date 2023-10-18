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

    let fabrics = ["spijkerstof", "jute", "katoen", "tule", "wol"]
    // let fabrics = ["wol", "tule"]

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
            console.log(fabricsUsed.length, fabrics.length)
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
            // console.log(fabricsUsed, fabrics)
            downloadResults()
        }
    }, [index])

    return (
        fabrics.length !== index ? <>
                <FabricBlock fabric={fabric}/>
                <AnswerButtons fabric={fabric} log={log} setLog={setLog} options={options}
                               index={index} setIndex={setIndex}/>
            </> :
            <>

                {/*@todo maak eindscherm*/}
                <h1 className={"h1__end"}>Einde van de test</h1>
            </>

    )
        ;
}
