import { Container, Grid, Typography } from "@material-ui/core";
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from "@material-ui/core/styles";
import React from "react";
import { ReactMdRenderer } from "react-md-renderer/v4";
import SyntaxHighlighter from "react-syntax-highlighter";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            overflowWrap: "break-word",
        },
    })
);
/**
 * @param md
 * @returns
 */
export const withMarkdownView =
    (md: string): React.FC =>
    // eslint-disable-next-line react/display-name
    () => {
        const classes = useStyles();
        const theme = useTheme();
        const opts = {
            overrides: {
                h3: {
                    component: Typography,
                    props: { gutterBottom: true, variant: "h5" },
                },
                code: {
                    component: SyntaxHighlighter,
                    props: {
                        customStyle: {
                            display: "inline",
                            background: "transparent",
                            padding: "1.5px",
                            color: theme.palette.secondary.main,
                        },
                        wrapLongLines: true,
                    },
                },
            },
            forceBlock: true,
        };
        return (
            <>
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
                                <ReactMdRenderer options={opts}>
                                    {md}
                                </ReactMdRenderer>
                            </Grid>
                        </Grid>
                    </main>
                </Container>
            </>
        );
    };
