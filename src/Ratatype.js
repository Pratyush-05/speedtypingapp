import { useState } from 'react';
import './Ratacolor.css';

function Ratatype() {

    // const
    const paragraph = "this is first line"

    //state
    const [color, setColor] = useState('color-green')
    const [speed, setSpeed] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [wrongInputCount, setWrongInputCount] = useState(0)
    const [rightInputCount, setRightInputCount] = useState(0)
    const [isFirstInput, setIsFirstInput] = useState(false)
    const [myvalue, setMyvalue] = useState()

    const inputChangeHandler = (event) => {
        if (!isFirstInput) {
            setIsFirstInput(true)
            setStartTime(new Date())
        }

        const inputString = event.target.value
        let inputLength = inputString.length



        let isTypingCorrect = (paragraph.substring(0, inputLength) !== inputString) ? false : true;
        isTypingCorrect ? setRightInputCount(rightInputCount + 1) : setWrongInputCount(wrongInputCount + 1)
        isTypingCorrect ? setColor('color-green') : setColor('color-red');
        isTypingCorrect && calculateSpeed(startTime, inputLength);
        if (isTypingCorrect) {
            setMyvalue(event.target.value)
        }
        


    }
    const calculateSpeed = (startTime, inputLength) => {
        const currentTime = new Date()
        const timeTaken = (currentTime - startTime) / 1000
        setSpeed(parseInt((inputLength / timeTaken) * 12))
    }


    return <div >

        {paragraph}<br></br><br></br>
        <input type="text" className={color} value={myvalue} onChange={inputChangeHandler} />
        <br></br><br></br>
        speed: {speed} WPM<br></br><br></br>
        accuracy : {(parseInt((rightInputCount) / (rightInputCount + wrongInputCount) * 100)) || 100}
    </div>
}
export default Ratatype