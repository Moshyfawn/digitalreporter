import { connect } from 'react-redux'
import NewsPage from './NewsPage'
import { getCards } from '../../store/cards/';
import {getLgCardsSelector, getMdCardsSelector, getSmCardsSelector} from 'src/store/cards/cardsSelectors'

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    lgCards: getLgCardsSelector(state),
    mdCards: getMdCardsSelector(state),
    smCards: getSmCardsSelector(state),
    isLoading: state.cardsReducer.isLoading
})

const mapDispatchToProps = {
    getCards
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
