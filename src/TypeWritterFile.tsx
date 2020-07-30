import React from "react";
import "./App.css";
import { TextField } from "@material-ui/core";

interface TWritterProps {
  typeWritterId: string;
  textValue: String;
  handleChange: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

function TypeWritterField({
  typeWritterId,
  textValue,
  handleChange,
}: TWritterProps) {
  return (
    <TextField
      multiline
      onKeyDown={handleChange}
      value={textValue}
      id={typeWritterId}
      autoFocus={true}
      rows={16}
      spellCheck={false}
      InputProps={{ disableUnderline: true }}
    />
  );
}

export default TypeWritterField;
