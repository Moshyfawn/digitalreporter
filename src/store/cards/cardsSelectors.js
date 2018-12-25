import { createSelector } from 'reselect';

const getCardsSelector = state => state.cardsReducer.cards

export const getLgCardsSelector = createSelector(
  getCardsSelector,
  (cards) => {
    if(cards[0]) {
      return [cards[0]]
    } else {
      return []
    }
  }
)

export const getMdCardsSelector = createSelector(
  getCardsSelector,
  (cards) => {
    if(cards[0]) {
      return cards.slice(0,2)
    } else {
      return []
    }
  }
)

export const getSmCardsSelector = createSelector(
  getCardsSelector,
  (cards) => {
    if(cards[0]) {
      return cards.slice(0,4)
    } else {
      return []
    }
  }
)