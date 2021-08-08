import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

import { PostData } from "../data";
import { Paths } from "../utils/Paths";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const ArticleCard = (data: PostData) => {
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

export default ArticleCard;
