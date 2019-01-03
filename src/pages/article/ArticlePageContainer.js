import { connect } from 'react-redux'
import ArticlePage from './ArticlePage'
import { getArticle,
  getArticles,
  getPopularArticlesSelector,
  getMdArticlesSelector,
  getSmArticlesSelector,
  getMoreArticlesSelector } from '../../store/articles/';

const mapStateToProps = (state) => ({
  article: state.articlesReducer.article,
  articles: state.articlesReducer.articles,
  popularArticles: getPopularArticlesSelector(state),
  mdCards: getMdArticlesSelector(state),
  smCards: getSmArticlesSelector(state),
  moreArticles: getMoreArticlesSelector(state),
  isLoading: state.articlesReducer.isLoading,
})

const mapDispatchToProps = {
  getArticle, getArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)
