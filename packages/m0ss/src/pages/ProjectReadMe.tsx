import { Grid, Theme, createStyles, makeStyles } from "@material-ui/core";

import React from "react";
import { withMarkdownView } from "../components/withMarkdownView";

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

export interface IProjectReadMe {
    md: string;
}

const ProjectReadme = ({ md }: IProjectReadMe) => {
    const ProjectReadmeView = withMarkdownView(md);

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

export default ProjectReadme;
