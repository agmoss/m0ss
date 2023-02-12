import { AboutPaper } from "@m0ss/core";
import { severity, Snacks } from "@m0ss/core";
import {
    Container,
    createStyles,
    Divider,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import randomWords from "random-words";
import React, { useState } from "react";
import { ReactMdRenderer } from "react-md-renderer";

import { IStr } from "../data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebarSection: {
            padding: theme.spacing(2),
        },
        sidebarAboutBox: {
            padding: theme.spacing(2),
        },
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        landingTypography: {
            "@global": {
                h2: {
                    ...theme.typography.h4,
                },
                h3: {
                    ...theme.typography.h5,
                    fontWeight: theme.typography.fontWeightBold,
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1),
                },
                h4: {
                    ...theme.typography.body1,
                    paddingBottom: theme.spacing(1.5),
                },
            },
        },
        customDivider: {
            backgroundColor: theme.palette.primary.main,
            marginBottom: theme.spacing(3),
        },
    })
);

export const MainContent = ({ str }: IStr) => {
    const classes = useStyles();
    const [openSnack, setOpenSnack] = useState(false);

    const [message, setMessage] = useState(
        randomWords({ exactly: 5, join: " " })
    );
    const [level, setLevel] = useState(Math.floor(Math.random() * 4) + 1);

    const handleOpen = () => {
        setOpenSnack(!openSnack);
        if (openSnack === false) {
            setMessage(
                randomWords({
                    exactly: Math.floor(Math.random() * 6) + 1,
                    join: " ",
                })
            );
            setLevel(Math.floor(Math.random() * 4) + 1);
        }
    };

    return (
        <>
            <Snacks
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                level={severity[level]}
            />
            <Container maxWidth="lg">
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Grid item xs={12} md={4}>
                        <AboutPaper handleOpen={handleOpen} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        className={classes.landingTypography}
                    >
                        <Typography variant="h5" gutterBottom>
                            Rant
                        </Typography>
                        <Divider className={classes.customDivider} />
                        <ReactMdRenderer>{str}</ReactMdRenderer>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
