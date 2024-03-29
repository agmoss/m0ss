import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React from "react";

export enum Severity {
    error = "error",
    warning = "warning",
    info = "info",
    success = "success",
}

export const severity = Object.values(Severity);

const Alert = (props: AlertProps) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
);

type SnacksProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    level: Severity;
};

export const Snacks = ({ open, setOpen, message, level }: SnacksProps) => (
    <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={(
            _event: React.SyntheticEvent | React.MouseEvent,
            reason?: string
        ) => {
            if (reason === "clickaway") {
                return;
            }
            setOpen(false);
        }}
    >
        <Alert
            onClose={() => {
                setOpen(false);
            }}
            severity={level}
        >
            {message}
        </Alert>
    </Snackbar>
);
