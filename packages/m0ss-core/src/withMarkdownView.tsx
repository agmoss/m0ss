import {
    Container,
    createStyles,
    Grid,
    makeStyles,
    Theme,
} from "@material-ui/core";
import React from "react";
import ReactMdRenderer from "markdown-to-jsx";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
        const options = {
            // overrides: {
            //     code: {
            //         component: SyntaxHighlighter,
            //         props: {
            //             customStyle: {
            //                 display: "inline",
            //                 background: "transparent",
            //                 padding: "1.5px",
            //             },
            //             style: monokai,
            //             wrapLongLines: true,
            //         },
            //     },
            // },
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
