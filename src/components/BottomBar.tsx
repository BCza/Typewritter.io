import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
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
    },
  })
);

type BottomAppBarProps = {
  clearClicked: () => void;
  textValue: string;
  wordCount: (text: string) => number;
};

export default function BottomAppBar(props: BottomAppBarProps) {
  const classes = useStyles();

  const { clearClicked, textValue, wordCount } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <div className={classes.grow} /> */}
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            alignContent="center"
            width={"100%"}
          >
            <Box display="flex">
              <Box flexGrow={1}>
                <Button
                  variant="outlined"
                  onClick={clearClicked}
                  style={{ margin: "0% 16% 0% 0%" }}
                  className={classes.buttons}
                >
                  DELETE
                </Button>
              </Box>

              <Box flexGrow={1}>
                <CopyToClipboard
                  text={textValue}
                  options={{ format: "text/plain" }}
                >
                  <Button variant="outlined" className={classes.buttons}>
                    Copy
                  </Button>
                </CopyToClipboard>
              </Box>
            </Box>

            <Box display="flex" flexGrow={3} justifyContent={"flex-end"}>
              <Box>
                <div className={classes.grow} />
                <div className={classes.buttons}>
                  <h2>Word Count: {wordCount(textValue)}</h2>
                </div>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
