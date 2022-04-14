import React from "react";
import { createStyles, Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import TotalTimer from "./Timer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CopyToClipboard from "react-copy-to-clipboard";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     text: { padding: theme.spacing(2, 2, 0) },
//     paper: { paddingBottom: 50 },
//     list: { marginBottom: theme.spacing(2) },
//     subheader: { backgroundColor: theme.palette.background.paper },
//     appBar: { top: "auto", bottom: 0, backgroundColor: "black" },
//     grow: { width: "32%" },
//     buttons: {
//       color: "white",
//       borderColor: "white",
//       marginLeft: "2%",
//     },
//   })
// );

type BottomAppBarProps = {
  clearClicked: () => void;
  copyClicked: () => void;
  textValue: string;
  wordCount: (text: string) => number;
};

export default function BottomAppBar(props: BottomAppBarProps) {
  const classes = {};

  const { clearClicked, textValue, wordCount, copyClicked } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" /*className={classes.appBar}*/>
        <Toolbar>
          <>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              alignContent="center"
              width={"100%"}
            >
              <Box display="flex" flexGrow={2} justifyContent="flex-start">
                <TotalTimer />
                <Button
                  onClick={clearClicked}
                  // className={classes.buttons}
                  variant="outlined"
                >
                  Delete
                </Button>
                <CopyToClipboard
                  text={textValue}
                  options={{ format: "text/plain" }}
                >
                  <Button
                    variant="outlined"
                    // className={classes.buttons}
                    onClick={copyClicked}
                  >
                    Copy
                  </Button>
                </CopyToClipboard>
              </Box>

              <Box flexGrow={1} />
              <Box flexGrow={1} />

              <Box display="flex" flexGrow={2} justifyContent={"flex-end"}>
                <div /*className={classes.grow}*/ />
                <div /*className={classes.buttons}*/>
                  <h2>Word Count: {wordCount(textValue)}</h2>
                </div>
              </Box>
            </Box>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
