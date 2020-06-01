import React, { KeyboardEvent, useState } from "react";
import "./App.css";
import { TextField } from "@material-ui/core";

function App() {
  const [textValue, setTextValue] = useState("");

  const wordcount = textValue.split(" ").length - 1;

  const clearClicked = () => {
    setTextValue("");
  };

  const copyClicked = () => {
    const copyText = document.getElementById("typeWritterField");
    if (!copyText) {
      alert("Sorry, could not copy text");
    } else {
      navigator.clipboard.writeText(copyText.innerHTML);
    }
  };

  const handleChange = (change: KeyboardEvent<HTMLDivElement>) => {
    if (
      ((change.keyCode >= 48 && change.keyCode <= 90) || // Letters & Numbers
      change.keyCode === 32 || // Space Key
      change.keyCode >= 185 || // Puncuation
      change.keyCode === 9 || // Tab
        change.keyCode === 13) && // Enter
      change.key !== "Meta"
    ) {
      if (change.key === "Enter") {
        setTextValue(textValue + "\n");
      } else if (change.key === "Tab") {
        setTextValue(textValue + "\t");
      } else {
        setTextValue(textValue + change.key);
      }
    }
  };

  return (
    <div className="App">
      <button onClick={clearClicked}>Clear</button>
      <button onClick={copyClicked}>Copy</button>
      <div>WordCount: {wordcount}</div>
      <TextField
        multiline
        onKeyDown={handleChange}
        value={textValue}
        id="typeWritterField"
        autoFocus={true}
        rows={10000}
      />
    </div>
  );
}

export default App;
