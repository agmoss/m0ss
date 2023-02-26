import React from "react";

export const ApplyAos: React.FC<React.PropsWithChildren<unknown>> = (
    props: React.PropsWithChildren<unknown>
) => <div data-aos="fade-up">{props.children}</div>;
