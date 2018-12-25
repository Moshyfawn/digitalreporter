import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ---
// CONSTANTS
// ---

export const GET_CARDS = 'cards/GET_CARDS'
export const GET_CARDS_SUCCESS = 'cards/GET_CARDS_SUCCESS'
export const GET_CARDS_FAIL = 'cards/GET_CARDS_FAIL'

// ---
// ACTION CREATORS
// ---

export const getCards = createAction(GET_CARDS)
export const getCardsSuccess = createAction(GET_CARDS_SUCCESS)
export const getCardsFail = createAction(GET_CARDS_FAIL)

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  cards: [],
  error: '',
  isLoading: false,
})

// ---
// REDUCER
// ---

export default handleActions(
  {
    [GET_CARDS]: (state, action) =>
      Immutable.merge(state, { isLoading: true }),
    [GET_CARDS_SUCCESS]: (state, action) =>
      Immutable.merge(state, { cards: action.payload, isLoading: false }),
    [GET_CARDS_FAIL]: (state, action) =>
      Immutable.merge(state, { error: action.payload, isLoading: false }),
  },
  initialState
)