import { makeStyles } from "@material-ui/core";
import { clamp } from "lodash-es";
import React, { ComponentType } from "react";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-with-gesture";

const useStyles = makeStyles(() => ({
    cursorInteract: {
        cursor: "pointer",
        "&:hover": {
            cursor: "grab",
        },
        "&:active": {
            overflow: "hidden",
            zIndex: 10000,
            cursor: "grabbing",
        },
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
    },
}));

// eslint-disable-next-line @typescript-eslint/ban-types
export const withPull = <P extends object>(
    WrappedComponent: ComponentType<P>
): React.FC<P> => ({ ...props }) => {
    const classes = useStyles();

    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
    const bind = useGesture(({ down, delta, velocity }) => {
        const clampVel = clamp(velocity, 1, 8);
        set({
            xy: down ? delta : [0, 0],
            config: { mass: clampVel, tension: 500 * clampVel, friction: 50 },
        });
    });

    const translate = (x: number, y: number) =>
        `translate3d(${x}px, ${y}px, 0)`;

    return (
        <animated.div
            className={classes.cursorInteract}
            {...bind()}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={{ transform: xy.interpolate(translate as any) }}
        >
            <WrappedComponent {...(props as P)} />
        </animated.div>
    );
};
