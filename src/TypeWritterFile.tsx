import React from "react";
import { TextField } from "@material-ui/core";
import "./styling/main.css";
import { StylesProvider } from "@material-ui/core/styles";
import { css } from "@emotion/core";

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
    <StylesProvider>
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
    </StylesProvider>
  );
}

export default TypeWritterField;
