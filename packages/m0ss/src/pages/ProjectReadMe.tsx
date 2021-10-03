import { Grid, Theme, createStyles, makeStyles } from "@material-ui/core";
import { IStr } from "@data";
import React from "react";
import { withMarkdownView } from "@components";

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
