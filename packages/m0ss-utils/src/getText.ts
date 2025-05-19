import * as E from "fp-ts/Either";

export const getText = async (url: string): Promise<E.Either<any, string>> => {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return E.right(text);
    } catch (e) {
        return E.left(e);
    }
};
