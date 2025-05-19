"use client";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    Box,
    Chip,
    CardHeader,
    Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { ArrowRight, GitHub } from "@mui/icons-material";

import type { PostData } from "../data";
import { Paths } from "../utils/paths";

const Root = styled(Card)(({ theme }) => ({
    minWidth: 275,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: theme.shadows[8],
    },
    borderRadius: theme.shape.borderRadius * 2,
    overflow: "hidden",
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));

const CardActionsStyled = styled(CardActions)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
}));

const CategoryChip = styled(Chip)(({ theme, color }) => ({
    marginTop: theme.spacing(1),
    backgroundColor:
        color === "primary"
            ? theme.palette.primary.main
            : color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.grey[300],
    color:
        color === "primary" || color === "secondary"
            ? theme.palette.common.white
            : theme.palette.text.primary,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    fontWeight: "bold",
}));

// Function to determine a category based on the slug or description
const getCategory = (data: PostData) => {
    const text = (data.slug + data.description).toLowerCase();

    if (
        text.includes("react") ||
        text.includes("nextjs") ||
        text.includes("mui")
    ) {
        return { name: "Frontend", color: "primary" };
    } else if (
        text.includes("graphql") ||
        text.includes("api") ||
        text.includes("serverless")
    ) {
        return { name: "API", color: "secondary" };
    } else if (
        text.includes("data") ||
        text.includes("analytics") ||
        text.includes("regression")
    ) {
        return { name: "Data", color: "success" };
    } else if (text.includes("iot") || text.includes("simulation")) {
        return { name: "IoT", color: "warning" };
    } else if (text.includes("ts") || text.includes("typescript")) {
        return { name: "TypeScript", color: "info" };
    } else {
        return { name: "Tool", color: "default" };
    }
};

export const ArticleCard = (data: PostData) => {
    const router = useRouter();
    const category = getCategory(data);

    return (
        <Root variant="outlined">
            <CardHeader
                avatar={
                    <StyledAvatar
                        sx={{
                            bgcolor: (theme) =>
                                category.color === "primary"
                                    ? theme.palette.primary.main
                                    : category.color === "secondary"
                                    ? theme.palette.secondary.main
                                    : category.color === "success"
                                    ? theme.palette.success.main
                                    : category.color === "warning"
                                    ? theme.palette.warning.main
                                    : category.color === "info"
                                    ? theme.palette.info.main
                                    : theme.palette.grey[500],
                        }}
                    >
                        {data.slug.charAt(0).toUpperCase()}
                    </StyledAvatar>
                }
                title={
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ fontWeight: 600 }}
                    >
                        {data.slug}
                    </Typography>
                }
                subheader={
                    <CategoryChip
                        label={category.name}
                        size="small"
                        color={
                            category.color as
                                | "default"
                                | "primary"
                                | "secondary"
                                | "error"
                                | "info"
                                | "success"
                                | "warning"
                        }
                    />
                }
            />
            <CardContentStyled>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{ lineHeight: 1.6 }}
                >
                    {data.description}
                </Typography>
            </CardContentStyled>
            <CardActionsStyled>
                <Button
                    onClick={() => router.push(`${Paths.POSTS}${data.slug}`)}
                    size="medium"
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowRight />}
                    sx={{ borderRadius: 2 }}
                >
                    View
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    variant="outlined"
                    startIcon={<GitHub />}
                    sx={{ borderRadius: 2 }}
                >
                    GitHub
                </Button>
            </CardActionsStyled>
        </Root>
    );
};
