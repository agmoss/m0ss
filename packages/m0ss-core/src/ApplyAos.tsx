import React from "react";

export const ApplyAos: React.FC<React.PropsWithChildren<{}>> = (
    props: React.PropsWithChildren<{}>
) => <div data-aos="fade-up">{props.children}</div>;
