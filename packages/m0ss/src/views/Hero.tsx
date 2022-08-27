import { metaData } from "@data";
import {
    createStyles,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import { DualGrid } from "@src/components/DualGrid";
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
            padding: theme.spacing(6),
        },
    })
);


export const Hero = ({
    bio,
}: {
    primary: string;
    secondary: string;
    bio: string;
}) => {
    const classes = useStyles();
    return (
        <>
            <DualGrid
                Left={
                    <div className={classes.main}>
                        <Image
                            className={classes.img}
                            src={AM}
                            alt={metaData.name}
                            layout="fill"
                            priority={false}
                            placeholder="blur"
                            quality={75}
                        />
                    </div>
                }
                Right={
                    <Paper className={classes.mainContent}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            {metaData.name}
                        </Typography>
                        <Typography variant="h5" component="h3" paragraph gutterBottom>
                            {bio}
                        </Typography>
                    </Paper>
                }
            />
        </>
    );
};
