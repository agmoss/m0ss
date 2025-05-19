// @ts-nocheck
import { Container, Grid } from "@mui/material";
import React from "react";

export const DualGrid = ({
    Left,
    Right,
}: {
    Left: React.ReactNode;
    Right: React.ReactNode;
}) => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        {Left as any}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={8}>
                        {Right as any}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
