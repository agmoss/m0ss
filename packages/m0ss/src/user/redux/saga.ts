import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAsyncAction } from "typesafe-actions";

import { client } from "../../utils/gqlClient";
import { IUserLogin } from "./model";

const fetcher = <F, P>(q: string, a?: F) => client.request<P>(q, a);

export const mutationLogin = `
    mutation login($loginInput:LoginInput!) {
        login(loginInput: $loginInput) {
            accessToken
        }
    }
`;

const userLoginAsync = createAsyncAction(
    "USER_LOGIN",
    "RECEIVE_USER_LOGIN",
    "USER_LOGIN_ERROR"
)<IUserLogin, string, Error>();

function* userLogin(action: ReturnType<typeof userLoginAsync.request>) {
    try {
        const response: Record<string, any> = yield call(
            fetcher,
            mutationLogin,
            {
                loginInput: {
                    email: action.payload.email,
                    password: action.payload.password,
                },
            }
        );
        yield put(userLoginAsync.success(response.accessToken));
    } catch (e) {
        yield put(userLoginAsync.failure(e.message));
    }
}

function* userLoginWatcher() {
    yield takeLatest("USER_LOGIN", userLogin);
}

export default function* rootSaga() {
    yield all([userLoginWatcher()]);
}
