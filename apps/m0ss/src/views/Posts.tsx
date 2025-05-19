"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import type React from "react";
import { useState } from "react";
import {
    Box,
    TextField,
    InputAdornment,
    Tabs,
    Tab,
    Chip,
    Divider,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Paths } from "../utils/paths";

import { ArticleCard, type PostData } from "@m0ss/core";

const HeroContent = styled("div")(({ theme }) => ({
    padding: theme.spacing(8, 0, 6),
    textAlign: "center",
}));

const CardGrid = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        borderRadius: theme.shape.borderRadius * 2,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
    },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
        height: 3,
        borderRadius: 1.5,
    },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    fontWeight: 500,
    textTransform: "none",
    fontSize: "1rem",
}));

const EmptyStateBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
    padding: theme.spacing(8, 0),
}));

// Function to get all unique categories
const getCategories = (data: PostData[]): string[] => {
    const categories = new Set<string>();

    data.forEach((post) => {
        const text = (post.slug + post.description).toLowerCase();

        if (
            text.includes("react") ||
            text.includes("nextjs") ||
            text.includes("mui")
        ) {
            categories.add("Frontend");
        } else if (
            text.includes("graphql") ||
            text.includes("api") ||
            text.includes("serverless")
        ) {
            categories.add("API");
        } else if (
            text.includes("data") ||
            text.includes("analytics") ||
            text.includes("regression")
        ) {
            categories.add("Data");
        } else if (text.includes("iot") || text.includes("simulation")) {
            categories.add("IoT");
        } else if (text.includes("ts") || text.includes("typescript")) {
            categories.add("TypeScript");
        } else {
            categories.add("Tool");
        }
    });

    return ["All", ...Array.from(categories)];
};

export const Posts = ({ data }: { data: PostData[] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = getCategories(data);
    const router = useRouter();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (
        _event: React.SyntheticEvent,
        newValue: string
    ) => {
        setActiveCategory(newValue);
    };

    const handleViewClick = (slug: string) => {
        router.push(`${Paths.POSTS}${slug}`);
    };

    const filteredData = data.filter((post) => {
        const matchesSearch =
            post.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeCategory === "All") {
            return matchesSearch;
        }

        const text = (post.slug + post.description).toLowerCase();
        const matchesCategory =
            (activeCategory === "Frontend" &&
                (text.includes("react") ||
                    text.includes("nextjs") ||
                    text.includes("mui"))) ||
            (activeCategory === "API" &&
                (text.includes("graphql") ||
                    text.includes("api") ||
                    text.includes("serverless"))) ||
            (activeCategory === "Data" &&
                (text.includes("data") ||
                    text.includes("analytics") ||
                    text.includes("regression"))) ||
            (activeCategory === "IoT" &&
                (text.includes("iot") || text.includes("simulation"))) ||
            (activeCategory === "TypeScript" &&
                (text.includes("ts") || text.includes("typescript"))) ||
            (activeCategory === "Tool" &&
                !(
                    text.includes("react") ||
                    text.includes("nextjs") ||
                    text.includes("mui") ||
                    text.includes("graphql") ||
                    text.includes("api") ||
                    text.includes("serverless") ||
                    text.includes("data") ||
                    text.includes("analytics") ||
                    text.includes("regression") ||
                    text.includes("iot") ||
                    text.includes("simulation") ||
                    text.includes("ts") ||
                    text.includes("typescript")
                ));

        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <HeroContent>
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        color="textPrimary"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                        }}
                    >
                        Projects & Articles
                    </Typography>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        paragraph
                        sx={{ maxWidth: "700px", mx: "auto", mb: 4 }}
                    >
                        Explore my collection of open-source projects, tools,
                        and technical articles covering web development, data
                        visualization, and creative programming.
                    </Typography>

                    <Box sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}>
                        <SearchTextField
                            fullWidth
                            placeholder="Search projects..."
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <StyledTabs
                            value={activeCategory}
                            onChange={handleCategoryChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                        >
                            {categories.map((category) => (
                                <StyledTab
                                    key={category}
                                    label={category}
                                    value={category}
                                />
                            ))}
                        </StyledTabs>
                    </Box>
                </Container>
            </HeroContent>

            <CardGrid maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        {filteredData.length}{" "}
                        {filteredData.length === 1 ? "Project" : "Projects"}{" "}
                        {activeCategory !== "All" ? `in ${activeCategory}` : ""}
                    </Typography>

                    {searchTerm && (
                        <Chip
                            label={`Search: "${searchTerm}"`}
                            onDelete={() => setSearchTerm("")}
                            color="primary"
                            variant="outlined"
                        />
                    )}
                </Box>

                <Divider sx={{ mb: 4 }} />

                {filteredData.length > 0 ? (
                    <Grid
                        container
                        spacing={4}
                        alignItems="stretch"
                        direction="row"
                    >
                        {filteredData.map((d) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={d.slug}
                                sx={{ display: "flex" }}
                            >
                                <ArticleCard
                                    data={d}
                                    onViewClick={handleViewClick}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <EmptyStateBox>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            gutterBottom
                        >
                            No projects found
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Try adjusting your search or category filter
                        </Typography>
                    </EmptyStateBox>
                )}
            </CardGrid>
        </>
    );
};
