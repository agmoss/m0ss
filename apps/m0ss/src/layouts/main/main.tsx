import { ApplyAos } from "@m0ss/core";
import React from "react";
import { styled } from "@mui/material/styles";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ILayout } from "./withLayout";
import { Box } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflowX: "hidden",
    backgroundColor: theme.palette.background.default,
}));

export const Main = ({
    children,
    themeToggler,
    themeMode,
}: React.PropsWithChildren<ILayout>) => {
    return (
        <Root>
            <Header themeMode={themeMode} themeToggler={themeToggler} />
            <Box sx={{ mt: 10 }}>
                <ApplyAos>{children}</ApplyAos>
            </Box>
            <Footer />
        </Root>
    );
};
