import {
    Container,
    Grid,
    Paper,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";

import AM from "../../public/andrew-moss.jpeg"
import Image from "next/image";
import React from "react";
import { metaData } from "@data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            position: "relative",
            zIndex: 9,
            width: "100%",
            height: "100%",
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
                                className={classes.img}
                                src={AM}
                                alt={metaData.name}
                                placeholder="blur"
                                priority={false}
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
