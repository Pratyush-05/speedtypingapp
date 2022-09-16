import { useState } from "react"
import Child from "./Child";

function Calculator(){
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    // const [result, setResult] = useState(0);
    // console.log("************************")
    // console.log(first, second)
    return  <div>
        first <input type="Number" onChange={(event) => {setFirst(Number(event.target.value))}}/><br></br>
        second <input type="Number" onChange={(event) => {setSecond(Number(event.target.value))}}/><br></br>
        {/* <button type="submit" onClick={() => {setResult(first+second)}}>Add</button><br></br> */}
        {/* {result} */}

        

        <Child first={first} second={second}/>
    </div>
    
}

export default Calculator