
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { ArticleCard } from "../components/ArticleCard";
import { PostData } from "../data";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cardWrapper: {
        display: "flex",
    },
}));

export const Posts = ({ data }: { data: PostData[] }) => {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
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
            </div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="stretch"
                    direction="row"
                >
                    {data.map((d) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={d.slug}
                            className={classes.cardWrapper}
                        >
                            <ArticleCard {...d} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
};
