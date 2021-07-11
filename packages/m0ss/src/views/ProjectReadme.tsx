import { IArticleTarget } from "blog-types";
import React, { useEffect, useState } from "react";
import { LOGO_URL, README_URL } from "../utils/constants";

import { Article } from "./article";

export const README = () => {
    const [md, setMd] = useState("");

    useEffect(() => {
        fetch(README_URL)
            .then((response) => response.text())
            .then((text) => setMd(text));
    }, []);

    const a: IArticleTarget = {
        id: 0,
        slug: "andrew-moss-readme",
        title: "Andrew Moss README",
        description: "Project Readme",
        internalLink: null,
        markdown: md,
        _markdown: { content: md },
        externalLink: null,
        image: LOGO_URL,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    return <Article article={a} />;
};
