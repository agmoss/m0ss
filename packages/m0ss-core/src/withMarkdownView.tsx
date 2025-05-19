// @ts-nocheck
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
/**
 * @param md
 * @returns
 */
export const withMarkdownView =
    (md: string): React.FC =>
    // eslint-disable-next-line react/display-name
    () => {
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
        } as const;
        return (
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container
                        spacing={5}
                        justifyContent="center"
                        direction="column"
                        sx={{ mt: 3, mb: 3, overflowWrap: "break-word" }}
                    >
                        <div>
                            <Markdown options={opts as any}>{md}</Markdown>
                        </div>
                    </Grid>
                </main>
            </Container>
        );
    };
