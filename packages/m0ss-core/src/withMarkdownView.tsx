import {
    Container,
    createStyles,
    Grid,
    Link,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import ReactMdRenderer from "markdown-to-jsx";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    })
);
/**
 * @deprecated This is not fully compatible with muiv4
 * @param md
 * @returns
 */
export const withMarkdownView =
    (md: string): React.FC =>
    // eslint-disable-next-line react/display-name
    () => {
        const classes = useStyles();
        const opts = {
            overrides: {
                h1: {
                    component: Typography,
                    props: {
                        gutterBottom: true,
                        variant: "h1",
                    },
                },
                h2: {
                    component: Typography,
                    props: { gutterBottom: true, variant: "h2" },
                },
                h3: {
                    component: Typography,
                    props: { gutterBottom: true, variant: "h3" },
                },
                h4: {
                    component: Typography,
                    props: { gutterBottom: true, variant: "h4" },
                },
                h5: {
                    component: Typography,
                    props: { gutterBottom: true, variant: "h5" },
                },
                h6: {
                    component: Typography,
                    props: { gutterBottom: true, variant: "h6" },
                },
                p: {
                    component: Typography,
                    props: { paragraph: true, variant: "body1" },
                },
                a: { component: Link, props: { variant: "body1" } },
                code: {
                    component: Typography,
                    props: {
                        paragraph: true,
                        variant: "caption",
                        style: {
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                        },
                    },
                },
                img: {
                    props: {
                        style: {
                            maxWidth: "100%",
                            height: "auto",
                            pointerEvents: "none",
                            textAlign: "center",
                        },
                        align: "center",
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
