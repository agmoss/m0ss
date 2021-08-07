import {
    Container,
    CssBaseline,
    Grid,
    Theme,
    createStyles,
    makeStyles,
} from "@material-ui/core";

import MarkdownComponent from "./Markdown";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    })
);

export const withMarkdownView =
    (md: string): React.FC =>
    () => {
        const classes = useStyles();
        return (
            <>
                <CssBaseline />
                <Container maxWidth="lg">
                    <main>
                        <Grid
                            container
                            spacing={5}
                            justifyContent="center"
                            direction="column"
                            className={classes.mainGrid}
                        >
                            <Grid item xs={12}>
                                {MarkdownComponent(md)}
                            </Grid>
                        </Grid>
                    </main>
                </Container>
            </>
        );
    };
