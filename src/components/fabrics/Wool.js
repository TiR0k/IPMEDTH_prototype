export default function Wool() {

    const handleOver = () => {
        navigator.vibrate([2, 1])
    }

    return (
        <div className={"jute"}>
            {[...Array(100)].map((x, i) =>
                <div className={"row"} style={{position: "absolute", top: 60 * i}} onPointerOver={handleOver}/>
            )}
            {[...Array(1000)].map((x, i) =>
                <div className={"column"} style={{position: "absolute", left: 60 * i}} onPointerOver={handleOver}/>
            )}
        </div>
    )
}