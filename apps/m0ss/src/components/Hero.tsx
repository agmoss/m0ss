// @ts-nocheck
import { DualGrid } from "@m0ss/core";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";

import AM from "../../public/andrew-moss.jpeg";
import { metaData } from "../data";

const Main = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
        minHeight: "200px",
    },
}));

const MainImage = styled(Image)({
    objectFit: "cover",
});

const MainContent = styled(Paper)(({ theme }) => ({
    height: "100%",
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
}));

export const Hero = ({
    bio,
}: {
    primary: string;
    secondary: string;
    bio: string;
}) => {
    return (
        <DualGrid
            Left={
                <Main>
                    <MainImage
                        src={AM}
                        alt={metaData.name}
                        priority={false}
                        placeholder="blur"
                        quality={75}
                        fill
                        sizes="100vw"
                    />
                </Main>
            }
            Right={
                <MainContent>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {metaData.name}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h3"
                        paragraph
                        gutterBottom
                    >
                        {bio}
                    </Typography>
                </MainContent>
            }
        />
    );
};
