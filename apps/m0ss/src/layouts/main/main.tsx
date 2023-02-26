import { ApplyAos } from "@m0ss/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ILayout } from "./withLayout";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowX: "hidden",
            backgroundColor: theme.palette.background.default,
        },
    })
);

export const Main = ({
    children,
    themeToggler,
    themeMode,
}: React.PropsWithChildren<ILayout>) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header themeMode={themeMode} themeToggler={themeToggler} />
            <ApplyAos>{children}</ApplyAos>
            <Footer />
        </div>
    );
};
