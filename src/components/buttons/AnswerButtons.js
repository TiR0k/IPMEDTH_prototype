import Main from "../../hoc/Main";

export default function AnswerButtons(props) {

    const addAnswer = (value) => {
        let obj = {
            fabric: props.fabric,
            answer: value,
            options: props.options,
            correct: (value === props.options[0])
        }

        props.setLog([
            ...props.log,
            obj
        ])

        props.setIndex(props.index + 1);
    }

    return (
        Math.floor(Math.random() * 2) === 0 ?
            <div className={"buttonBox"}>
                <button className="answer" onClick={() => addAnswer(props.options[0])}>{props.options[0]}</button>
                <button className="answer" onClick={() => addAnswer(props.options[1])}>{props.options[1]}</button>
            </div> :
            <div className={"buttonBox"}>
                <button className="answer" onClick={() => addAnswer(props.options[1])}>{props.options[1]}</button>
                <button className="answer" onClick={() => addAnswer(props.options[0])}>{props.options[0]}</button>
            </div>

    )
}