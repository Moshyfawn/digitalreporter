import { createSelector } from 'reselect';

const getArticlesSelector = state => state.articlesReducer.articles

export const getLgArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    if(articles[0]) {
      return [articles[0]]
    } else {
      return []
    }
  }
)

export const getMdArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    if(articles[0]) {
      return articles.slice(0,2)
    } else {
      return []
    }
  }
)

export const getSmArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    if(articles[0]) {
      return articles.slice(0,4)
    } else {
      return []
    }
  }
)