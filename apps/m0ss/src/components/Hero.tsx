// @ts-nocheck
import { DualGrid } from "@m0ss/core";
import { Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import AM from "../../public/andrew-moss.jpeg";
import { metaData } from "../data";

const Main = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    boxShadow: theme.shadows[4],
    [theme.breakpoints.down("sm")]: {
        minHeight: "300px",
    },
}));

const MainImage = styled(Image)({
    objectFit: "cover",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

const MainContent = styled(Paper)(({ theme }) => ({
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}));

const HighlightText = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
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
                        priority={true}
                        placeholder="blur"
                        quality={90}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </Main>
            }
            Right={
                <MainContent>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                        }}
                    >
                        {metaData.name}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h3"
                        paragraph
                        sx={{
                            lineHeight: 1.6,
                            fontWeight: 400,
                            mb: 4,
                        }}
                    >
                        {bio.split(" ").map((word, index) => {
                            if (
                                word.includes("software") ||
                                word.includes("developer") ||
                                word.includes("CTO")
                            ) {
                                return (
                                    <HighlightText key={index}>
                                        {word}{" "}
                                    </HighlightText>
                                );
                            }
                            return word + " ";
                        })}
                    </Typography>
                </MainContent>
            }
        />
    );
};
