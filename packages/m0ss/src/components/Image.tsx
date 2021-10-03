import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100%",
    },
    dBlock: {
        display: "block",
    },
}));

interface ImageProps {
    className?: string;
    src: string;
    srcSet?: string;
    alt?: string;
    lazyProps?: object;
    lazy?: boolean;
    width?: number | string;
    height?: number | string;
    [x: string]: any;
}

export const Image = ({
    src,
    srcSet,
    alt = "...",
    lazyProps = {
        width: "auto",
        height: "auto",
    },
    className,
    width,
    height,
    ...rest
}: ImageProps): JSX.Element => {
    const classes = useStyles();
    return (
        <LazyLoadImage
            className={clsx("image", classes.root, classes.dBlock, className)}
            alt={alt}
            src={src}
            srcSet={srcSet}
            effect="opacity"
            {...lazyProps}
            {...rest}
        />
    );
};
