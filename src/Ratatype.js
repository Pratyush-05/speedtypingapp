import { useEffect, useState } from 'react';
import './Ratacolor.css';

function Ratatype() {

    let s = "Although most people consider piranhas to be quite dangerous, they are, for the most part, entirely harmless. Piranhas rarely feed on large animals; they eat smaller fish and aquatic plants. When confronted with humans, piranhas’ first instinct is to flee, not attack. Their fear of humans makes sense. Far more piranhas are eaten by people than people are eaten by piranhas. If the fish are well-fed, they won’t bite humans.";

    const [charIndex, setCharIndex] = useState(0);
    const [firstString, setFirstString] = useState("");
    const [midString, setmidString] = useState("");
    const [lastString, setlastString] = useState("");
    const [colorFocusedChar, setColorFocusedChar] = useState("wgreen");

    const onKeyDownEventHandler = (event) => {
        const currInput = event.key
        if (currInput === s[charIndex]) {
            // add green css for it
            setColorFocusedChar("wgreen")
            setCharIndex(charIndex + 1)
        }
        else {
            setColorFocusedChar("wred")
        }
    }

    useEffect(() => {
        console.log(charIndex, "********")
        setFirstString(s.slice(0, charIndex))
        setmidString(s[charIndex])
        setlastString(s.slice(charIndex + 1, s.length))
    }, [charIndex])
    return <div tabIndex="0" onKeyDown={onKeyDownEventHandler}>
        <br />
        <br />

        <div class="passed-text">{firstString}</div>
        <div class={colorFocusedChar}>{midString}</div>
        <div class="tobe-passed">{lastString}</div>
    </div>
}
export default Ratatype