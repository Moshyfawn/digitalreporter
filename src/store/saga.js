import { fork } from 'redux-saga/effects'

import { userSaga } from 'src/store/user'
import { articlesSaga } from 'src/store/articles'

export default function* rootSaga () {
  yield fork(userSaga)
  yield fork(articlesSaga)
}
