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
    if(articles[3]) {
      return articles.slice(1,3)
    } else {
      return []
    }
  }
)

export const getSmArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    if(articles[8]) {
      return articles.slice(4,8)
    } else {
      return []
    }
  }
)

export const getPopularArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    if(articles[6]) {
      return articles.slice(0,6)
    } else {
      return []
    }
  }
)

export const getMoreArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    if(articles[3]) {
      return articles.slice(0,3)
    } else {
      return []
    }
  }
)

// creates an array of articles grouped by section

export const getSectionArticlesSelector = createSelector(
  getArticlesSelector,
  (articles) => {
    var result = articles.filter(item => {
      return item.section === 'Новости'
    })
    return result
  }
)