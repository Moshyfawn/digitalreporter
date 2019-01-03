import { takeLatest, put, call, all } from 'redux-saga/effects';
import { 
  CREATE_USER,
  createUserSuccess,
  createUserFail,
  GET_USER,
  getUserSuccess,
  getUserFail } from 'src/store/user';
import { _createUser, _getUser } from './userAPI';

function * createUserSaga (action) {
  const user = action.payload;
  try {
    const data = yield call(_createUser, user)
    yield put(createUserSuccess(data))
  } catch (error) {
    yield put(createUserFail(error))
  }
}

function * getUserSaga () {
  try {
    const data = yield call(_getUser)
    yield put(getUserSuccess(data))
  } catch (error) {
    yield put(getUserFail(error))
  }
}

export default function * () {
  yield all([
    takeLatest(CREATE_USER, createUserSaga),
    takeLatest(GET_USER, getUserSaga)
  ])
}