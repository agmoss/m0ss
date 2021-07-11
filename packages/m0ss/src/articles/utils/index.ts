import { IArticle, IArticleTarget } from "blog-types";

import { getText } from "../../utils/getData";

export const convertArticleToTarget = async (a: IArticle) => {
    const artTarget: IArticleTarget = {
        _markdown: {
            content: await getText(a.markdown),
        },
        ...a,
    };

    return artTarget;
};
