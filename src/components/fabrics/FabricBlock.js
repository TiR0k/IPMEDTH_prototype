import Jute from "./Jute";
import Denim from "./Denim";
import {useEffect} from "react";
import Cotton from "./Cotton";
import Tulle from "./Tulle";
import Wool from "./Wool";

export default function FabricBlock(props){

    const setBackground = (fabric) =>{
        switch (fabric){
            case "spijkerstof":
                return <Denim/>
            case "jute":
                return <Jute/>
            case "katoen":
                return <Cotton/>
            case "tule":
                return <Tulle/>
            case "wol":
                return <Wool/>
            default:
                return
        }
    }

    return(
        <div className={"fabricBlock"}>
            {setBackground(props.fabric)}
        </div>
    )

}