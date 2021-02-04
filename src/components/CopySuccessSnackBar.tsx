import React, { KeyboardEvent, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";

type CopySuccessSnackBarProps = {
    onClose: () => void;
    showSnackBar: boolean;
};

const CopySuccessSnackBar = (props: CopySuccessSnackBarProps) => (
    <Snackbar
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        open={props.showSnackBar}
        autoHideDuration={6000}
        onClose={props.onClose}
        message="Copied Successfully!"
        action= {
            <React.Fragment>
            <IconButton
                onClick={props.onClose}
                style={{ backgroundColor: "white" }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
            </React.Fragment>
        }
    />
);      

export default CopySuccessSnackBar;