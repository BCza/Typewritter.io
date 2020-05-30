import React, { KeyboardEvent, useState } from "react";
import "./App.css";

function App() {
  const [textValue, setTextValue] = useState("");

  const wordcount = textValue.split(" ").length - 1;

  const clearClicked = () => {
    setTextValue("");
  };

  const handleChange = (change: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      ((change.keyCode >= 48 && change.keyCode <= 90) || // Letters & Numbers
      change.keyCode === 32 || // Space Key
      change.keyCode >= 185 || // Puncuation
        change.keyCode === 13) && // Enter
      change.key !== "Meta"
    ) {
      if (change.key === "Enter") {
        setTextValue(textValue + "\n");
      } else {
        setTextValue(textValue + change.key);
      }
    }
  };

  return (
    <div className="App">
      <button onClick={clearClicked}>Clear</button>
      <button>Copy</button>
      <div>WordCount: {wordcount}</div>
      <textarea
        onKeyDown={handleChange}
        value={textValue}
        readOnly={true}
        id="typeWritterField"
        autoFocus={true}
      />
    </div>
  );
}

export default App;
