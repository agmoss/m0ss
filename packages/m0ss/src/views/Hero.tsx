import { metaData } from "@data";
import {
    Container,
    createStyles,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

import AM from "../../public/andrew-moss.jpeg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            position: "relative",
            width: "100%",
            height: "100%",
            [theme.breakpoints.down("sm")]: {
                minHeight: "200px",
            },
        },
        img: {
            objectFit: "cover",
        },
        mainContent: {
            height: "100%",
            marginBottom: "auto",
            overflow: "auto",
            padding: theme.spacing(6),
        },
    })
);

const CtaCard = ({ className, bio }: { className: string; bio: string }) => (
    <Paper className={className}>
        <Typography variant="h3" component="h1" gutterBottom>
            {metaData.name}
        </Typography>
        <Typography variant="h5" component="h3" paragraph gutterBottom>
            {bio}
        </Typography>
    </Paper>
);

export const Hero = ({
    primary,
    secondary,
    bio,
}: {
    primary: string;
    secondary: string;
    bio: string;
}) => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <div className={classes.main}>
                            <Image
                                className={classes.img}
                                src={AM}
                                alt={metaData.name}
                                layout="fill"
                                priority={true}
                                placeholder="blur"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={8}>
                        <CtaCard className={classes.mainContent} bio={bio} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
