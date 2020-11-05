import React, { KeyboardEvent, useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import TypeWritterFile from "./TypeWritterFile";
import ChickenCheck from "../src/styling/components/ChickenCheck";

const typeWritterId = "typeWritterField";
const spaceRegex = /\s+/;
const enterKeyValue = "\n";
const tabKeyValue = "\t";

const wordCount: (t: string) => number = (t: string) =>
  t.split(spaceRegex).length - 1;

const setFocusOnTypeWritter = () =>
  document.getElementById(typeWritterId)?.focus();

function App() {
  const [textValue, setTextValue] = useState("");
  const [showChickenCheck, setShowChickenCheck] = useState(true);

  const clearClicked = () => {
    setShowChickenCheck(true);
    setTextValue("");
    setFocusOnTypeWritter();
  };

  const copyClicked = () => {
    const copyText = document.getElementById("typeWritterField");
    if (!copyText) {
      alert("Sorry, could not copy text");
      return;
    }

    navigator.clipboard.writeText(copyText.innerHTML);
    setFocusOnTypeWritter();
  };

  const handleChange = (change: KeyboardEvent<HTMLDivElement>) => {
    const keyValue = change.keyCode;

    // Letters & Numbers
    // Space Key
    // Puncuation
    if (
      (keyValue >= 48 && keyValue <= 90) ||
      keyValue === 32 ||
      keyValue >= 185
    ) {
      setTextValue(textValue + change.key);
    }

    // Enter
    if (keyValue === 13) {
      setTextValue(textValue + enterKeyValue);
    }
    // Tab
    if (keyValue === 9) {
      setTextValue(textValue + tabKeyValue);
    }
    if (change.metaKey) {
      return;
    }
  };

  return (
    <div className="App">
      {/* <ChickenCheck showChickenCheck={showChickenCheck} /> */}
      <TypeWritterFile
        handleChange={handleChange}
        textValue={textValue}
        typeWritterId={typeWritterId}
      />
      <Button variant="outlined" onClick={clearClicked}>
        Clear
      </Button>
      <Button variant="outlined" onClick={copyClicked}>
        Copy
      </Button>
      <div>WordCount: {wordCount(textValue)}</div>
    </div>
  );
}

export default App;
