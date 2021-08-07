import * as E from "fp-ts/lib/Either";

export const getText = async (url: string) => {
    try {
        const response = await fetch(url);
        const text = await response.text()
        return E.right(text);
    } catch (e) {
        return E.left(e);
    }
};
