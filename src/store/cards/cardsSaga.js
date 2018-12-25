import { takeLatest, put, call, all } from 'redux-saga/effects';
import { GET_CARDS, getCardsSuccess, getCardsFail } from 'src/store/cards';
import { _getCards } from './cardsAPI';

function * getCardsSaga () {
  try {
    const data = yield call(_getCards)
    yield put(getCardsSuccess(data))
  } catch (error) {
    yield put(getCardsFail(error))
  }
}

export default function * () {
  yield all([
    takeLatest(GET_CARDS, getCardsSaga)
  ])
}
