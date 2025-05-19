// @ts-nocheck
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";

import { ArticleCard } from "../components/ArticleCard";
import { PostData } from "../data";

const HeroContent = styled("div")(({ theme }) => ({
    padding: theme.spacing(8, 0, 6),
}));

const CardGrid = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
}));

export const Posts = ({ data }: { data: PostData[] }) => {

    return (
        <>
            <HeroContent>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Articles
                    </Typography>
                </Container>
            </HeroContent>
            <CardGrid maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="stretch"
                    direction="row"
                >
                    {data.map((d) => (
                        <Grid item xs={12} md={6} key={d.slug} sx={{ display: "flex" }}>
                            <ArticleCard {...d} />
                        </Grid>
                    ))}
                </Grid>
            </CardGrid>
        </>
    );
};
