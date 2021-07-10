import { IMedia } from "blog-types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAsyncAction } from "typesafe-actions";
import { loginFetcher } from "../../utils/fetcher";

const fetchMediaAsync = createAsyncAction(
    "FETCH_MEDIA",
    "RECEIVE_MEDIA",
    "FETCH_MEDIA_ERROR"
)<string, IMedia[], Error>();

export const queryMedia = `
    query {
        media {
            id
            title
            preview
            asset
            isActive
        }
    }
`;

function* fetchMedia(action: ReturnType<typeof fetchMediaAsync.request>) {
    try {
        const response: IMedia[] = yield call(loginFetcher, queryMedia);
        yield put(fetchMediaAsync.success(response));
    } catch (e) {
        yield put(fetchMediaAsync.failure(e.message));
    }
}

function* fetchMediaWatcher() {
    yield takeLatest("FETCH_MEDIA", fetchMedia);
}

export default function* rootSaga() {
    yield all([fetchMediaWatcher()]);
}
