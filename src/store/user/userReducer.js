import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ---
// CONSTANTS
// ---

export const CREATE_USER = 'user/CREATE_USER';
export const CREATE_USER_SUCCESS = 'user/CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'user/CREATE_USER_FAIL';

export const GET_USER = 'user/GET_USER';
export const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'user/GET_USER_FAIL';

export const LOGOUT = 'user/LOGOUT' ;

// ---
// ACTION CREATORS
// ---

export const createUser = createAction(CREATE_USER);
export const createUserSuccess = createAction(CREATE_USER_SUCCESS);
export const createUserFail = createAction(CREATE_USER_FAIL);

export const getUser = createAction(GET_USER);
export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserFail = createAction(GET_USER_FAIL);

export const logout = createAction(LOGOUT);

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  user: {},
  error: '',
  isLoading: false,
  isAuthenticated: false
})

// ---
// REDUCER
// ---

export default handleActions(
  {
    [CREATE_USER]: (state) =>
      Immutable.merge(state, { isLoading: true }),
    [CREATE_USER_SUCCESS]: (state, action) =>
      Immutable.merge(state, { user: action.payload, isLoading: false, isAuthenticated: true }),
    [CREATE_USER_FAIL]: (state, action) =>
      Immutable.merge(state, { error: action.payload, isLoading: false }),

    [GET_USER]: (state) =>
      Immutable.merge(state, { isLoading: true }),
    [GET_USER_SUCCESS]: (state, action) =>
      Immutable.merge(state, { user: action.payload, isLoading: false, isAuthenticated: true }),
    [GET_USER_FAIL]: (state, action) =>
      Immutable.merge(state, { error: action.payload, isLoading: false }),

    [LOGOUT]: (state) =>
    Immutable.merge(state, {user: {}, isAuthenticated: false}),

  },
  initialState
)