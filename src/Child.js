import { useState } from "react";

function Add(props){

    const {first, second} = props;
    const [result, setResult] = useState(0);
    return <div>
        <button  type="submit"  disabled={!(first && second)} onClick={() => {setResult(first+second)}}>Add</button><br></br> 
         {result}
    </div>
}

export default Add