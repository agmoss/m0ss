import { Container, Grid } from "@material-ui/core";
import React from "react";

export const DualGrid = ({
    Left,
    Right,
}: {
    Left: JSX.Element;
    Right: JSX.Element;
}) => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        {Left}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={8}>
                        {Right}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
