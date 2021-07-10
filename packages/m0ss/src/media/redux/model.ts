import { IMedia } from "blog-types";
import { ActionType, action } from "typesafe-actions";
import * as O from "fp-ts/lib/Option";
import { RemoteData } from "../../utils/RemoteData";

interface IMediaModel {
    media: RemoteData<O.Option<IMedia[]>>;
}

const initialState: IMediaModel = {
    media: "Init",
};

export const actions = {
    resetArticleState: () => action("RESET_ARTICLE_STATE"),
    fetchMedia: () => action("FETCH_MEDIA"),
    receiveMedia: (v: IMedia[]) => action("RECEIVE_MEDIA", v),
    fetchMediaError: (e: string) => action("FETCH_MEDIA_ERROR", { e }),
};

export type MediaActionType = ActionType<typeof actions>;

export const reducer = (
    state: IMediaModel = initialState,
    action: MediaActionType
): IMediaModel => {
    switch (action.type) {
        case "FETCH_MEDIA":
            return {
                ...state,
                media: "Pend",
            };
        case "RECEIVE_MEDIA":
            return {
                ...state,
                media:
                    action.payload && action.payload.length >= 1
                        ? O.some(action.payload)
                        : O.none,
            };
        case "FETCH_MEDIA_ERROR": {
            return {
                ...state,
                media: "Fail",
            };
        }
        default:
            return state;
    }
};
