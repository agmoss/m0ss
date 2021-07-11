import { IArticle, IArticleTarget, IArticles } from "blog-types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAsyncAction } from "typesafe-actions";
import { fetcher, fetcher2 } from "../../utils/fetcher";
import { convertArticleToTarget } from "../utils";

const fetchArticleAsync = createAsyncAction(
    "FETCH_ARTICLE",
    "RECEIVE_ARTICLE",
    "FETCH_ARTICLE_ERROR"
)<string, IArticleTarget, Error>();

export const queryArticle = `
    query article($slug: String!) {
        article(slug: $slug) {
            id
            title
            slug
            description
            image
            markdown
            externalLink
            internalLink
        }
    }
`;

function* fetchArticle(action: ReturnType<typeof fetchArticleAsync.request>) {
    try {
        const response: { article: IArticle } = yield call(
            fetcher2,
            queryArticle,
            {
                slug: action.payload,
            }
        );
        const article: IArticleTarget = yield convertArticleToTarget(
            response.article
        );
        yield put(fetchArticleAsync.success(article));
    } catch (e) {
        yield put(fetchArticleAsync.failure(e.message));
    }
}

function* fetchArticleWatcher() {
    yield takeLatest("FETCH_ARTICLE", fetchArticle);
}

const fetchArticlesAsync = createAsyncAction(
    "FETCH_ARTICLES",
    "RECEIVE_ARTICLES",
    "FETCH_ARTICLES_ERROR"
)<string, IArticleTarget[], Error>();

export const queryArticles = `
    query {
        articles {
            id
            title
            slug
            description
            image
            markdown
            externalLink
            internalLink
        }
    }
`;

function* fetchArticles(action: ReturnType<typeof fetchArticlesAsync.request>) {
    try {
        const response: IArticles = yield call(
            fetcher,
            queryArticles,
            action.payload
        );

        const createTargetArticles = async () => {
            return Promise.all(
                response.articles.map((a) => convertArticleToTarget(a))
            );
        };

        const articles: IArticleTarget[] = yield createTargetArticles();

        yield put(fetchArticlesAsync.success(articles));
    } catch (e) {
        yield put(fetchArticlesAsync.failure(e.message));
    }
}

function* fetchArticlesWatcher() {
    yield takeLatest("FETCH_ARTICLES", fetchArticles);
}

export default function* rootSaga() {
    yield all([fetchArticleWatcher(), fetchArticlesWatcher()]);
}
