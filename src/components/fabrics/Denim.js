export default function Denim() {

    const handleOver = () => {
        navigator.vibrate([10, 1])
    }

    return (
        <div className={"denim"}>
            {[...Array(100)].map((x, i) =>
                <div key={i} className={"row"} style={{position: "absolute", top: 28 * i}} onPointerOver={handleOver}/>
            )}

        </div>
    )
}