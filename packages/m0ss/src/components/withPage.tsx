import { createStyles, makeStyles } from "@material-ui/core";
import React, { ComponentType } from "react";

import { Footer } from "../views/Footer";
import Header from "../views/Header";
import ApplyAos from "./ApplyAos";

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
