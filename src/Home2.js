import { useState, useEffect } from "react";
import "./Home2.css";
function Home2() {
  const text =
    "My name is Khan. Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.";
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#5CB270");
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [initialTime, setInitialTime] = useState(0);
  var today = new Date();
  const [finalTime, setFinalTime] = useState(
    60 * today.getMinutes() + today.getSeconds()
  );
  const [wrongChInput, setWrongChInput] = useState(0);

  const [flag, setFlag] = useState(true);

  const onKeyPressed = (e) => {
    setFinalTime(
      1000 * (60 * today.getMinutes() + today.getSeconds()) +
        today.getMilliseconds()
    );

    if (e.key === text[0] && flag === true) {
      setInitialTime(
        1000 * (60 * today.getMinutes() + today.getSeconds()) +
          today.getMilliseconds()
      );
      setFlag(false);
      setCount(count + 1);
      setColor("#5CB270");
    } else if (e.key === text[count]) {
      setCount(count + 1);
      setColor("#5CB270");
    } else if (e.key !== "Backspace" && e.key !== "Shift") {
      console.log(e.key);
      setWrongChInput((wrongChInput) => {
        return wrongChInput + 1;
      });
      setColor("red");
    }
  };

  useEffect(() => {
    setAccuracy(Math.ceil((count / (count + wrongChInput)) * 100));
    setSpeed(Math.floor((count / (finalTime - initialTime)) * 60 * 1000));
  }, [finalTime]);

  return (
    <div onKeyDown={onKeyPressed} tabIndex="0">
      <div className="maintext">
        <span style={{ color: "green" }}>{text.substring(0, count)}</span>
        <span style={{ color: "black", backgroundColor: color }}>
          {text.charAt(count)}
        </span>
        <span className="rest">{text.substring(count + 1)}</span>
      </div>

      <h3>Speed: {Math.floor(speed / 5.1)} wpm </h3>
      <h3>Accuracy: {accuracy} </h3>
    </div>
  );
}

export default Home2;
