import dynamic from "next/dynamic";

const ReactCircles = dynamic<any>(
    () =>
        import("../../page-views/ReactCircles").then(
            (mod) => mod.ReactCirclesDemo
        ),
    {
        ssr: false,
    }
);

export default ReactCircles;
