import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ---
// CONSTANTS
// ---

export const GET_ARTICLES = 'articles/GET_ARTICLES'
export const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAIL = 'articles/GET_ARTICLES_FAIL'

// ---
// ACTION CREATORS
// ---

export const getArticles = createAction(GET_ARTICLES)
export const getArticlesSuccess = createAction(GET_ARTICLES_SUCCESS)
export const getArticlesFail = createAction(GET_ARTICLES_FAIL)

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  articles: [],
  error: '',
  isLoading: false,
})

// ---
// REDUCER
// ---

export default handleActions(
  {
    [GET_ARTICLES]: (state, action) =>
      Immutable.merge(state, { isLoading: true }),
    [GET_ARTICLES_SUCCESS]: (state, action) =>
      Immutable.merge(state, { articles: action.payload, isLoading: false }),
    [GET_ARTICLES_FAIL]: (state, action) =>
      Immutable.merge(state, { error: action.payload, isLoading: false }),
  },
  initialState
)