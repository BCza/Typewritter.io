import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import TotalTimer from "./Timer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CopyToClipboard from "react-copy-to-clipboard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: { padding: theme.spacing(2, 2, 0) },
    paper: { paddingBottom: 50 },
    list: { marginBottom: theme.spacing(2) },
    subheader: { backgroundColor: theme.palette.background.paper },
    appBar: { top: "auto", bottom: 0, backgroundColor: "black" },
    grow: { width: "32%" },
    buttons: {
      color: "white",
      borderColor: "white",
      marginLeft: "2%",
      height: "75%",
    },
  })
);

type BottomAppBarProps = {
  clearClicked: () => void;
  copyClicked: () => void;
  textValue: string;
  wordCount: (text: string) => number;
};

export default function BottomAppBar(props: BottomAppBarProps) {
  const classes = useStyles();

  const { clearClicked, textValue, wordCount, copyClicked } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            alignContent="center"
            width={"100%"}
          >
            <Box display="flex" flexGrow={2} justifyContent="flex-start" alignItems="center">
              <TotalTimer />
              <Button
                onClick={clearClicked}
                className={classes.buttons}
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
                    className={classes.buttons}
                    onClick={copyClicked}
                  >
                    Copy
                  </Button>
                </CopyToClipboard>
            </Box>

            <Box flexGrow={1} />
            <Box flexGrow={1} />

            <Box display="flex" flexGrow={2} justifyContent={"flex-end"}>
                <div className={classes.grow} />
                <div className={classes.buttons}>
                  <h2>Word Count: {wordCount(textValue)}</h2>
                </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
