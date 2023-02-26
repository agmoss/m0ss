import { Grid, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ThumbUp } from "@material-ui/icons";
import React from "react";

import { IconButton } from "./IconButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebarAboutBox: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export const AboutPaper = ({ handleOpen }: { handleOpen: () => void }) => {
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
