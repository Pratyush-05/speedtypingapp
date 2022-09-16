import * as React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Home() {
  const [value, setValue] = React.useState("");
  const [wrong, setWrong] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Beware of cases!");

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio voluptates saepe, eum nulla rerum nam. Eum libero ut recusandae, velit ipsam repudiandae porro consequatur dolores neque atque delectus obcaecati non assumenda nesciunt molestiae omnis laborum eius iure quis facere repellendus aspernatur earum repellat? Impedit quos soluta in nam non.";

  const handleChange = (event) => {
    console.log(event);
    let inputText = event.target.value;
    setValue(inputText);
    if (text.substring(0, inputText.length) === inputText) {
      setHelperText("All Good, Beware of cases!");
      setWrong(false);
    } else {
      setWrong(true);
      setHelperText("Ah! Mistake made");
    }
  };
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
    </div>
  );
}

export default Home;
