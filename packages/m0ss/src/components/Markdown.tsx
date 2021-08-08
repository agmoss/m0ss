import { Link, Typography } from "@material-ui/core";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import React from "react";

const options = {
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
                variant: "body1",
                paragraph: true,
                color: "secondary",
                display: "inline",
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

const Markdown = <P extends []>(md: string, ...props: P) => (
    <ReactMarkdown options={options as MarkdownToJSX.Options} {...props}>
        {md}
    </ReactMarkdown>
);

export default Markdown;
