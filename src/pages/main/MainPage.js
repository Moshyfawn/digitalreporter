import React, { PureComponent, Fragment } from 'react'

import PageWrapper from '../../modals/pageWraper';
import Divider from '../../elements/markup/divider';
import CardMinList from '../../modals/lists/cardMinList';
import CardList from '../../modals/lists/cardList';
import Button from '../../elements/links/button';

class MainPage extends PureComponent {
  
componentDidMount = () => {
  this.props.getArticles();
}

  render () {
    const { lgCards, mdCards, smCards } = this.props
    
    return (
      <PageWrapper>
        <Fragment>
          {smCards.length > 0 && <CardMinList cards={smCards} />}
          <Divider />
          {lgCards.length > 0 && <CardList size='lg' cards={lgCards} />}
          {mdCards.length > 0 && <CardList size='md' cards={mdCards} />}
          <Divider />
          {smCards.length > 0 && <CardList  size='sm' cards={smCards} />}
          {smCards.length > 0 && <CardMinList cards={smCards} />}
          <Button name='Все статьи' />
          <Divider>Популярное</Divider>
          {mdCards.length > 0 && <CardList size='md' cards={mdCards} />}
          {smCards.length > 0 && <CardList  size='sm' cards={smCards} />}
          {smCards.length > 0 && <CardMinList cards={smCards} />}
        </Fragment>
      </PageWrapper>
    )
  }
}

export default MainPage
