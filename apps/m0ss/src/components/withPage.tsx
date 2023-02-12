import { ApplyAos } from "@m0ss/core";
import { createStyles, makeStyles } from "@material-ui/core";
import React, { ComponentType } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowX: "hidden",
        },
    })
);

export const withPage =
    <T extends object>(WrappedComponent: ComponentType<T>): React.FC<T> =>
    // eslint-disable-next-line react/display-name
    ({ ...props }) => {
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <Header />
                <ApplyAos>
                    <WrappedComponent {...(props as T)} />
                </ApplyAos>
                <Footer />
            </div>
        );
    };
