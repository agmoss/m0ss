import * as E from "fp-ts/lib/Either";
import { IStr, postData } from "../data";
import { pipe } from "fp-ts/lib/function";

export const getText = async (url: string) => {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return E.right(text);
    } catch (e) {
        return E.left(e);
    }
};



export const getPostData = async ({ str }: IStr) => {
    const link = postData.find((p) => p.slug === str);

    if (!link) {
        throw new Error("not found");
    }

    return pipe(
        await getText(link.mdLink),
        E.fold(
            (_l) => "error",
            (r) => r
        )
    );
};
