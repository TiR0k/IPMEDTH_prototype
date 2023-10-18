export default function Tulle() {

    const handleOver = () => {
        navigator.vibrate([18, 1])
    }

    return (
        <div className={"tulle"}>
            {[...Array(100)].map((x, i) =>
                <div className={"row"} style={{position: "absolute", top: 30 * i}} onPointerOver={handleOver}/>
            )}
            {[...Array(1000)].map((x, i) =>
                <div className={"column"} style={{position: "absolute", left: 30 * i}} onPointerOver={handleOver}/>
            )}
        </div>
    )
}