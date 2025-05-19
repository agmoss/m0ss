// @ts-nocheck
import { Grid, Paper, Typography } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";
import React from "react";
import { StyledIconButton } from "./StyledIconButton";

export const AboutPaper = ({ handleOpen }: { handleOpen: () => void }) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Paper sx={{ p: 2, bgcolor: "background.paper" }}>
                    <Grid container justifyContent="space-between">
                        <Grid>
                            <Typography variant="h5" gutterBottom>
                                About
                            </Typography>
                            <Typography>Welcome to my account</Typography>
                        </Grid>
                        <Grid>
                            <StyledIconButton onClick={handleOpen}>
                                <ThumbUp />
                            </StyledIconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};
