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

const _ProjectReadme = ({ str }: IStr) => {
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

export const ProjectReadme = withLayout({ Layout: Main })(_ProjectReadme);
