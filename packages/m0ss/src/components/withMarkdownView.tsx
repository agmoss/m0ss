import {
    Container,
    CssBaseline,
    Grid,
    Theme,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ReactMdRenderer } from "react-md-renderer";
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
        const options = {
            overrides: {
                code: {
                    component: SyntaxHighlighter,
                    props: {
                        customStyle: {
                            display: "inline",
                            background: "transparent",
                            padding: "1.5px",
                        },
                        style: monokai,
                        wrapLongLines: true,
                    },
                },
            },
        };
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
                                <ReactMdRenderer options={options}>
                                    {md}
                                </ReactMdRenderer>
                            </Grid>
                        </Grid>
                    </main>
                </Container>
            </>
        );
    };
