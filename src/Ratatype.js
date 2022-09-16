import { useState } from 'react';
import './Ratacolor.css';

function Ratatype() {

    const paragraph = "this is first line"
    const [color, setColor] = useState('color-green')
    console.log(color)

    return <div >
      
        {paragraph}<br></br>
        <input type="text" className={color} onChange={(event) => {
            const inputString = event.target.value
            let inputLength = inputString.length
            let temp =    (paragraph.substring(0, inputLength) !== inputString) ? setColor('color-red') : setColor('color-green')
        }} />
    </div>
}
export default Ratatype