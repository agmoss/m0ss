import { withMarkdownView } from "@m0ss/core";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";

import { IStr } from "../data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "@global": {
                h1: {
                    ...theme.typography.h4,
                    paddingBottom: theme.spacing(2),
                },
            },
        },
    })
);

export const ProjectReadme = ({ str }: IStr) => {
    const ProjectReadmeView = withMarkdownView(str);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ProjectReadmeView />
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justifyContent="center"
            ></Grid>
        </div>
    );
};
