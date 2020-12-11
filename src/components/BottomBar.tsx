import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CopyToClipboard from "react-copy-to-clipboard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: { padding: theme.spacing(2, 2, 0) },
    paper: { paddingBottom: 50 },
    list: { marginBottom: theme.spacing(2) },
    subheader: { backgroundColor: theme.palette.background.paper },
    appBar: { top: "auto", bottom: 0 },
    grow: { flexGrow: 1 },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  })
);

type BottomAppBarProps = {
  clearClicked: () => void;
  textValue: string;
  wordCount: ((text: string) => number);
};

export default function BottomAppBar(props: BottomAppBarProps) {
  const classes = useStyles();

  const { clearClicked, textValue, wordCount } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Button
            variant="outlined"
            onClick={clearClicked}
            style={{ margin: "0px 40px 0px 0px" }}
          >
            DELETE
          </Button>

          <CopyToClipboard text={textValue} options={{ format: "text/plain" }}>
            <Button variant="outlined">Copy</Button>
          </CopyToClipboard>
          <div>WordCount: {wordCount(textValue)}</div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
