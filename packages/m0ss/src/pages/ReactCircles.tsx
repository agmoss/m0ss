import Circles from "react-circles";

export const ReactCirclesDemo = () => (
    <div
        style={{
            height: window.innerHeight,
            width: window.innerWidth,
            maxWidth: "100%",
            maxHeight: "100%",
            overflowX: "hidden",
            overflowY: "hidden",
            backgroundColor: "black",
        }}
    >
        <Circles numCircles={60} speed="slow" />
    </div>
);
