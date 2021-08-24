import {
    Grid,
    Paper,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";

import { IconButton } from "./IconButton";
import React from "react";
import { ThumbUp } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebarAboutBox: {
            padding: theme.spacing(2),
        },
    })
);

interface IAboutPaper {
    handleOpen: () => void;
}

export const AboutPaper = ({ handleOpen }: IAboutPaper) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.sidebarAboutBox}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5" gutterBottom>
                                About
                            </Typography>
                            <Typography>Welcome to my account</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    handleOpen();
                                }}
                            >
                                <ThumbUp />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};
