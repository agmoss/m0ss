import dynamic from "next/dynamic";

const ReactCircles = dynamic<any>(
    () =>
        import("../../src/pages/ReactCircles").then(
            (mod) => mod.ReactCirclesDemo
        ),
    {
        ssr: false,
    }
);

export default ReactCircles;
