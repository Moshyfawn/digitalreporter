import React, { PureComponent, Fragment } from 'react'

import PageWrapper from '../../modals/pageWraper';
import PageDivider from '../../elements/dividers/pageDivider';
import CardMinList from '../../modals/lists/cardMinList';
import CardList from '../../modals/lists/cardList';
import Button from '../../elements/links/button';

class NewsPage extends PureComponent {

  componentDidMount = () => {
    this.props.getArticles();
  }

  render () {
    const { lgCards, mdCards, smCards } = this.props
    
    return (
      <PageWrapper>
        <Fragment>
          <PageDivider text='Новости' />
          {smCards.length > 0 && <CardMinList cards={smCards} />}
          {mdCards.length > 0 && <CardList to={mdCards.section} size='md' cards={mdCards} />}
          {lgCards.length > 0 && <CardList to={lgCards.section} size='lg' cards={lgCards} />}
          {mdCards.length > 0 && <CardList to={mdCards.section} size='md' cards={mdCards} />}
          <PageDivider isEmpty />
          {smCards.length > 0 && <CardMinList cards={smCards} />}
          <Button name='Все статьи' />
          <PageDivider text='Популярное' />
          {mdCards.length > 0 && <CardList to={mdCards.section} size='md' cards={mdCards} />}
          {smCards.length > 0 && <CardList size='sm' cards={smCards} />}
          {smCards.length > 0 && <CardMinList cards={smCards} />}
        </Fragment>
      </PageWrapper> 
    )
  }
}

export default NewsPage;
