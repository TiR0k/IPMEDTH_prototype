export default function Cotton() {

    const handleOver = () => {
        navigator.vibrate([1, 1])
    }

    return (
        <div className={"cotton"}>
            {[...Array(1000)].map((x, i) =>
                <div key={i} className={"row"} style={{position: "absolute", top: 10 * i}} onPointerOver={handleOver}/>
            )}
            {[...Array(1000)].map((x, i) =>
                <div key={i} className={"column"} style={{position: "absolute", left: 10 * i}} onPointerOver={handleOver}/>
            )}
        </div>
    )
}