import { withMarkdownView } from "@m0ss/core";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";

import { IStr } from "../data";
import {Main} from "../layouts/main/main";
import {withLayout} from "../layouts/main/withLayout";

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

const _Post = ({ str }: IStr) => {
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

export const Post = withLayout({ Layout: Main })(_Post);
