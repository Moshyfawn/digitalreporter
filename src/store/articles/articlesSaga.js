import { takeLatest, put, call, all } from 'redux-saga/effects';
import { GET_ARTICLES, getArticlesSuccess, getArticlesFail } from 'src/store/articles';
import { _getArticles } from './articlesAPI';

function * getArticlesSaga () {
  try {
    const data = yield call(_getArticles)
    yield put(getArticlesSuccess(data))
  } catch (error) {
    yield put(getArticlesFail(error))
  }
}

export default function * () {
  yield all([
    takeLatest(GET_ARTICLES, getArticlesSaga)
  ])
}
