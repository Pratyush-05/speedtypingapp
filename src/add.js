import { useState } from "react"

export default function Add(props) {
    let [number, setNumber] = useState(props.num)
    return <div>
        <h1>{number}</h1>

        <button onClick={() => setNumber(number + 5)}>
            Add
        </button>
    </div>
}
