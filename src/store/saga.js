import { fork } from 'redux-saga/effects'

import { userSaga } from 'src/store/user'
import { cardsSaga } from 'src/store/cards'

export default function* rootSaga () {
  yield fork(userSaga)
  yield fork(cardsSaga)
}
