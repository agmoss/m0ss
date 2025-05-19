// @ts-nocheck
import { Grid, Paper, Typography, IconButton } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";
import React from "react";

export const AboutPaper = ({ handleOpen }: { handleOpen: () => void }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, bgcolor: "background.paper" }}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5" gutterBottom>
                                About
                            </Typography>
                            <Typography>Welcome to my account</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleOpen}>
                                <ThumbUp />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};
