export default function Denim() {

    const handleOver = () => {
        navigator.vibrate([10, 1])
    }

    return (
        <div className={"denim"}>
            {[...Array(100)].map((x, i) =>
                <div className={"row"} style={{position: "absolute", top: 18 * i}} onPointerOver={handleOver}/>
            )}
            {[...Array(1000)].map((x, i) =>
                <div className={"column"} style={{position: "absolute", left: 18 * i}} onPointerOver={handleOver}/>
            )}
        </div>
    )
}