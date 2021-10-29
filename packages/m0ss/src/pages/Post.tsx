import { Grid, Theme, createStyles, makeStyles } from "@material-ui/core";

import { IStr } from "@data";
import React from "react";
import { withMarkdownView } from "@src/components/withMarkdownView";

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

export const Post = ({ str }: IStr) => {
    const classes = useStyles();
    const PostView = withMarkdownView(str);

    return (
        <div className={classes.root}>
            <PostView />
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
