import React, { KeyboardEvent, useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import TypeWritterFile from "./TypeWritterFile";
import TotalTimer from "./components/Timer";
import ChickenCheck from "./components/ChickenCheck";
import CopyToClipboard from "react-copy-to-clipboard";

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

  const clearClicked = () => {
    setShowChickenCheck(true);
    setTextValue("");
    setFocusOnTypeWritter();
  };

  const handleChange = (change: KeyboardEvent<HTMLDivElement>) => {
    const keyValue = change.key;

    console.log(change.key);

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
      <ChickenCheck showChickenCheck={showChickenCheck} />
      <TypeWritterFile
        handleChange={handleChange}
        textValue={textValue}
        typeWritterId={typeWritterId}
      />
      <Button
        variant="outlined"
        onClick={clearClicked}
        style={{ margin: "0px 40px 0px 0px" }}
      >
        DELETE
      </Button>

      <CopyToClipboard text={textValue}>
        <Button variant="outlined">Copy</Button>
      </CopyToClipboard>
      <div>WordCount: {wordCount(textValue)}</div>
    </div>
  );
}

export default App;
