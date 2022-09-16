import { useState } from "react"

function Display(){
    const [name, setName] = useState("")
    return <div>
        Name:- <input type="text" onChange={(event) => {setName(event.target.value)}}/>
        {
            (name.toLowerCase() === "anup") &&  <div>
                Hi {name}
            </div>
        }

    </div>
}

export default Display