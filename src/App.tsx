import React, { KeyboardEvent, useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import TypeWritterFile from "./TypeWritterFile";
import TotalTimer from "./components/Timer";
import ChickenCheck from "./components/ChickenCheck";
import CopyToClipboard from "react-copy-to-clipboard";
import BottomBar from "./components/BottomBar";

const typeWritterId = "typeWritterField";
const spaceRegex = /\s+/;
const enterKeyValue = "\n";
const tabKeyValue = "\t";

const noInputValues = ["Delete", "Backspace", "Shift", "Control"];

const wordCount: (t: string) => number = (t: string) =>
  t.split(spaceRegex).length - 1;

const setFocusOnTypeWritter = () =>
  document.getElementById(typeWritterId)?.focus();

function App() {
  const [textValue, setTextValue] = useState("");
  const [showChickenCheck, setShowChickenCheck] = useState(false);

  const clearClicked = () => setShowChickenCheck(true);

  const onChickenYesClicked = () => {
    setTextValue("");
    setFocusOnTypeWritter();
    setShowChickenCheck(false);
  };

  const onChickenNoClicked = () => setShowChickenCheck(false);

  const handleChange = (change: KeyboardEvent<HTMLDivElement>) => {
    const keyValue = change.key;

    if (noInputValues.includes(keyValue)) {
      return;
    }

    if (keyValue === "Enter") {
      setTextValue(textValue + enterKeyValue);
      return;
    } else if (keyValue === "Tab") {
      setTextValue(textValue + tabKeyValue);
      setFocusOnTypeWritter();
      change.preventDefault();
      return;
    } else if (change.metaKey) {
      // TODO make sure that we can do things like select all, copy and paste
      return;
    }

    // Default Action
    setTextValue(textValue + keyValue);
  };

  return (
    <div className="App">
      <TotalTimer />
      <ChickenCheck
        showChickenCheck={showChickenCheck}
        message="Are you sure you want to delete this?"
        onYesClicked={onChickenYesClicked}
        onNoClicked={onChickenNoClicked}
      />
      <TypeWritterFile
        handleChange={handleChange}
        textValue={textValue}
        typeWritterId={typeWritterId}
      />

      <BottomBar
        clearClicked={clearClicked}
        wordCount={wordCount}
        textValue={textValue}
      ></BottomBar>
    </div>
  );
}

export default App;
