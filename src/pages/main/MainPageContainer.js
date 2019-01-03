import { connect } from 'react-redux'
import MainPage from './MainPage'
import { getArticles } from '../../store/articles/';
import {getLgArticlesSelector, getMdArticlesSelector, getSmArticlesSelector} from 'src/store/articles/articlesSelectors'

const mapStateToProps = (state) => ({
  cards: state.articlesReducer.articles,
  lgCards: getLgArticlesSelector(state),
  mdCards: getMdArticlesSelector(state),
  smCards: getSmArticlesSelector(state),
  isLoading: state.articlesReducer.isLoading
})

const mapDispatchToProps = {
  getArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
