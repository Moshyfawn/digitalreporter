import React, { PureComponent, Fragment } from 'react'

import PageWrapper from '../../modals/pageWraper';
import Divider from '../../elements/markup/divider';
import CardMinList from '../../modals/lists/cardMinList';
import CardList from '../../modals/lists/cardList';
import NavBigButton from '../../elements/buttons/navBigButton';

class NewsPage extends PureComponent {

  componentDidMount = () => {
    this.props.getArticles();
  }

  render () {
    const { lgCards, mdCards, smCards } = this.props
    
    return (
      <PageWrapper>
        <Fragment>
          <Divider>Новости</Divider>
          {smCards.length > 0 && <CardMinList cards={smCards} />}
          {mdCards.length > 0 && <CardList to={mdCards.section} size='md' cards={mdCards} />}
          {lgCards.length > 0 && <CardList to={lgCards.section} size='lg' cards={lgCards} />}
          {mdCards.length > 0 && <CardList to={mdCards.section} size='md' cards={mdCards} />}
          <Divider />
          {smCards.length > 0 && <CardMinList cards={smCards} />}
          <NavBigButton text='Все статьи' />
          <Divider>Популярное</Divider>
          {mdCards.length > 0 && <CardList to={mdCards.section} size='md' cards={mdCards} />}
          {smCards.length > 0 && <CardList size='sm' cards={smCards} />}
          {smCards.length > 0 && <CardMinList cards={smCards} />}
        </Fragment>
      </PageWrapper> 
    )
  }
}

export default NewsPage;
