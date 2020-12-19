import React, { KeyboardEvent, useState } from "react";
import "./App.css";
import "./styling/main.css";
import TypeWritterFile from "./TypeWritterFile";
import TotalTimer from "./components/Timer";
import ChickenCheck from "./components/ChickenCheck";
import BottomBar from "./components/BottomBar";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import _times from "lodash/times";

const typeWritterId = "typeWritterField";
const spaceRegex = /\s+/;
const enterKeyValue = "\n";
const tabKeyValue = "\t";

const funcNoInputArray = () => _times(12, (i) => `F${i + 1}`);

const noInputValues = ["Delete", "Backspace", "Shift", "Control"].concat(
  funcNoInputArray()
);

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
      <IconButton
        onClick={clearClicked}
        id="DeleteButton"
        style={{ height: "50px", width: "50px" }}
      >
        <HighlightOffIcon
          style={{ fontSize: "48px", color: "black", paddingTop: "8px" }}
        />
      </IconButton>
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
