import {
    Container,
    Grid,
    Paper,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";

import Image from "next/image";
import React from "react";
import { metaData } from "@data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            height: "100%",
            position: "relative",
            [theme.breakpoints.down("sm")]: {
                minHeight: "40vmin",
            },
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

interface IProps {
    primary: string;
    secondary: string;
    bio: string;
}

export const Hero = ({ primary, secondary, bio }: IProps) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <div className={classes.main}>
                            <Image
                                src={primary}
                                alt={metaData.name}
                                layout="fill"
                                priority={true}
                                objectFit="cover"
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={8}
                        style={{ height: "100%" }}
                    >
                        <CtaCard className={classes.mainContent} bio={bio} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
