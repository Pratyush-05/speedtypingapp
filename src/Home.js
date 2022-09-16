import * as React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Home() {
  const [value, setValue] = React.useState("");
  const [wrong, setWrong] = React.useState(false);
  const [initialTime, setInitialTime] = React.useState(0);
  var today = new Date();
  const [finalTime, setFinalTime] = React.useState(
    60 * today.getMinutes() + today.getSeconds()
  );
  const [flag, setFlag] = React.useState(true);
  const [speed, setSpeed] = React.useState(0);
  const [accuracy, setAccuracy] = React.useState(100);
  const [wrongChInput, setWrongChInput] = React.useState(0);
  const [helperText, setHelperText] = React.useState("Beware of cases!");
  const text =
    "My name is Khan. Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.";
  let inputText = "";

  const handleChange = (event) => {
    inputText = event.target.value;
    setFinalTime((1000*(60 * today.getMinutes() + today.getSeconds())+today.getMilliseconds()));

    if (inputText[0] === text[0] && flag === true) {
      setInitialTime((1000*(60 * today.getMinutes() + today.getSeconds())+today.getMilliseconds()));
      setFlag(false);
    }
    
    if (text.substring(0, inputText.length) === inputText) {
      setValue(inputText);
      setHelperText("All Good, Beware of cases!");
      setWrong(false);
    } else {
      setWrongChInput((wrongChInput)=>{
        return wrongChInput+1;
      });
      setWrong(true);
      setHelperText("Ah! Mistake made");
    }
    
    if (inputText[inputText.length-1] === text[text.length-1] && inputText.length === text.length ) {
      alert("U have completd the test");
    }
  };
  
  React.useEffect(() => {
    setAccuracy(Math.ceil((value.length/(value.length+wrongChInput))*100));
    setSpeed(Math.floor((value.length / (finalTime - initialTime)) * 60*1000));
  }, [finalTime]);
  return (
    <div>
      <hr />
      <h2>The Text you need to enter:</h2>
      <div className="input-text">{text}</div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 4, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          error={wrong}
          id="outlined-multiline-flexible"
          label="Check your Speed"
          multiline
          maxRows={6}
          value={value}
          onChange={handleChange}
          helperText={helperText}
          fullWidth={true}
        />
      </Box>
      <h3>Speed: {speed} ch/min</h3>
      <h3>Accuracy: {accuracy} </h3>
    </div>
  );
}

export default Home;
