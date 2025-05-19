import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import React from "react";

import { PostData } from "../data";
import { Paths } from "../utils/paths";

const Root = styled(Card)(({ theme }) => ({
    minWidth: 275,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
}));

export const ArticleCard = (data: PostData) => {
    const router = useRouter();

    return (
        <Root variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        </Root>
    );
};
