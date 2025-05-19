import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { getText } from "@m0ss/utils";

import { IStr, postData, PostDataWithContent } from "../data";

export const getPostData = async ({ str }: IStr) => {
    const link = postData.find((p) => p.slug === str);

    if (!link) {
        throw new Error("not found");
    }

    return pipe(
        await getText(link.mdLink),
        E.fold<string, string, PostDataWithContent | string>(
            (_l) => {
                return "error";
            },
            (r) => {
                return {
                    content: r,
                    ...link,
                };
            }
        )
    );
};

export const isPostData = (
    postData: PostDataWithContent | string
): postData is PostDataWithContent =>
    (postData as PostDataWithContent).content !== undefined;
