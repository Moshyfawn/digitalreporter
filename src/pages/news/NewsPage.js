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
// CardList props.text/imgPath will come from a backend i.e text='' will become irrelevant !IMPORTANT
// CardList && CardMinList will get an object 'cards' with an array of cards data
  render () {
    const { lgCards, mdCards, smCards } = this.props
    
    return (
      <PageWrapper>
        <Fragment>
            <PageDivider text='Новости' />
            {smCards.length > 0 && <CardMinList cards={smCards} />}
            {mdCards.length > 0 && <CardList to={'/news'} size='md' cards={mdCards} />}
            {lgCards.length > 0 && <CardList to={'/lifehack'} size='lg' cards={lgCards} />}
            {mdCards.length > 0 && <CardList to={'/news'} size='md' cards={mdCards} />}
            <PageDivider isEmpty />
            {smCards.length > 0 && <CardMinList cards={smCards} />}
            <Button name='Все статьи' />
            <PageDivider text='Популярное' />
            {mdCards.length > 0 && <CardList to={'/news'} size='md' cards={mdCards} />}
            {smCards.length > 0 && <CardList size='sm' cards={smCards} />}
            {smCards.length > 0 && <CardMinList cards={smCards} />}
        </Fragment>
      </PageWrapper> 
    )
  }
}

export default NewsPage;

// const cardsMd = [
//   {
//     id: 0,
//     img: 'url', 
//     title: '',
//     body: '',
//     date: ''
//   }, {
//     id: 1,
//     img: 'url', 
//     title: '',
//     body: '',
//     date: ''
//   }
// ]
