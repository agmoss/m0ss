import React, { ComponentType } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import { Footer } from "../views/Footer";
import Header from "../views/Header";

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

const withPage =
        <T extends object>(WrappedComponent: ComponentType<T>): React.FC<T> =>
        ({ ...props }) => {
            const classes = useStyles();
            return (
                <div className={classes.root}>
                    <Header />
                    <WrappedComponent {...(props as T)} />
                    <Footer />
                </div>
            );
        };

export default withPage;
