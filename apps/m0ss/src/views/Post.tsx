"use client";

import { withMarkdownView } from "@m0ss/core";
import {
    Container,
    Typography,
    Box,
    Divider,
    Button,
    Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { GitHub, ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

import type { IStr } from "../data";
import { Paths } from "../utils/paths";

const Root = styled("div")(({ theme }) => ({
    "& h1": {
        ...theme.typography.h4,
        fontWeight: 700,
        marginBottom: theme.spacing(3),
    },
    "& h2": {
        ...theme.typography.h5,
        fontWeight: 600,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    "& h3": {
        ...theme.typography.h6,
        fontWeight: 600,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    "& p": {
        ...theme.typography.body1,
        marginBottom: theme.spacing(2),
        lineHeight: 1.7,
    },
    "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    "& ul, & ol": {
        paddingLeft: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    "& li": {
        marginBottom: theme.spacing(1),
    },
    "& blockquote": {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: theme.spacing(2),
        fontStyle: "italic",
        margin: theme.spacing(2, 0),
    },
    "& code": {
        fontFamily: "monospace",
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.shape.borderRadius,
        fontSize: "0.9em",
    },
    "& pre": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        overflowX: "auto",
        marginBottom: theme.spacing(2),
        "& code": {
            backgroundColor: "transparent",
            padding: 0,
        },
    },
    "& img": {
        maxWidth: "100%",
        height: "auto",
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(2),
    },
    "& table": {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: theme.spacing(2),
        "& th, & td": {
            border: `1px solid ${theme.palette.divider}`,
            padding: theme.spacing(1, 2),
            textAlign: "left",
        },
        "& th": {
            backgroundColor:
                theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.05)",
        },
    },
}));

const PostHeader = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const TagChip = styled(Chip)(({ theme, color }) => ({
    marginRight: theme.spacing(1),
    backgroundColor:
        color === "primary"
            ? theme.palette.primary.main
            : color === "info"
            ? theme.palette.info.main
            : undefined,
    color:
        color === "primary" || color === "info"
            ? theme.palette.common.white
            : undefined,
}));

export const Post = ({ str }: IStr) => {
    const PostView = withMarkdownView(str);
    const router = useRouter();
    const slug = router.query.slug as string;

    // Extract metadata from the markdown content
    const getMetadata = () => {
        const lines = str.split("\n");
        const title =
            lines.find((line) => line.startsWith("# "))?.replace("# ", "") ||
            slug;

        // Try to extract tags from content
        const tags = [];
        if (str.toLowerCase().includes("react")) tags.push("React");
        if (
            str.toLowerCase().includes("typescript") ||
            str.toLowerCase().includes("ts")
        )
            tags.push("TypeScript");
        if (
            str.toLowerCase().includes("javascript") ||
            str.toLowerCase().includes("js")
        )
            tags.push("JavaScript");
        if (str.toLowerCase().includes("graphql")) tags.push("GraphQL");
        if (str.toLowerCase().includes("api")) tags.push("API");
        if (
            str.toLowerCase().includes("nextjs") ||
            str.toLowerCase().includes("next.js")
        )
            tags.push("Next.js");

        return { title, tags };
    };

    const metadata = getMetadata();

    return (
        <Root>
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => router.push(Paths.POSTS)}
                    sx={{ mb: 4 }}
                >
                    Back to Posts
                </Button>

                <PostHeader>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {metadata.title}
                    </Typography>

                    {metadata.tags.length > 0 && (
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                mb: 3,
                            }}
                        >
                            {metadata.tags.map((tag) => (
                                <TagChip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    color={
                                        tag === "React"
                                            ? "info"
                                            : tag === "TypeScript"
                                            ? "primary"
                                            : "default"
                                    }
                                />
                            ))}
                        </Box>
                    )}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                        }}
                    >
                        <Typography variant="body2" color="textSecondary">
                            Project: {slug}
                        </Typography>

                        <Button
                            variant="outlined"
                            startIcon={<GitHub />}
                            href={`https://github.com/agmoss/${slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                        >
                            View on GitHub
                        </Button>
                    </Box>
                </PostHeader>

                <Box sx={{ mb: 6 }}>
                    <PostView />
                </Box>

                <Divider sx={{ my: 6 }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button
                        startIcon={<ArrowBack />}
                        onClick={() => router.push(Paths.POSTS)}
                    >
                        Back to Posts
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        href={`https://github.com/agmoss/${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore the Code
                    </Button>
                </Box>
            </Container>
        </Root>
    );
};
