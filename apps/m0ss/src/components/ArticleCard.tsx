import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React from "react";

import { PostData } from "../data";
import { Paths } from "../utils/paths";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 275,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            fontSize: 14,
        },
    })
);

export const ArticleCard = (data: PostData) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {data.slug}
                </Typography>
                <Typography variant="body2" component="p">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => router.push(`${Paths.POSTS}${data.slug}`)}
                    size="small"
                >
                    View
                </Button>
            </CardActions>
        </Card>
    );
};
