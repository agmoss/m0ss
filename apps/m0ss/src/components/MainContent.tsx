// @ts-nocheck
import { AboutPaper } from "@m0ss/core";
import { severity, Snacks } from "@m0ss/core";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { generate } from "random-words";
import React, { useState } from "react";
import Markdown from "markdown-to-jsx";

import { IStr } from "../data";

const MainGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
}));

const LandingTypography = styled(Grid)(({ theme }) => ({
    "& h2": {
        ...theme.typography.h4,
    },
    "& h3": {
        ...theme.typography.h5,
        fontWeight: theme.typography.fontWeightBold,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    "& h4": {
        ...theme.typography.body1,
        paddingBottom: theme.spacing(1.5),
    },
}));

export const MainContent = ({ str }: IStr) => {
    const [openSnack, setOpenSnack] = useState(false);

    const [message, setMessage] = useState(generate({ exactly: 5, join: " " }));
    const [level, setLevel] = useState(Math.floor(Math.random() * 4) + 1);

    const handleOpen = () => {
        setOpenSnack(!openSnack);
        if (openSnack === false) {
            setMessage(
                generate({
                    exactly: Math.floor(Math.random() * 6) + 1,
                    join: " ",
                })
            );
            setLevel(Math.floor(Math.random() * 4) + 1);
        }
    };

    return (
        <Container maxWidth="lg">
            <Snacks
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                level={severity[level]}
            />
            <MainGrid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <AboutPaper handleOpen={handleOpen} />
                </Grid>
                <LandingTypography item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        Rant
                    </Typography>
                    <Divider sx={{ bgcolor: "primary.main", mb: 3 }} />
                    <Markdown>{str}</Markdown>
                </LandingTypography>
            </MainGrid>
        </Container>
    );
};
