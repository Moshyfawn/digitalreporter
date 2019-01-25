import React, { PureComponent } from 'react'
import styled from 'styled-components';

import PageWrapper from '../../modals/pageWraper';
import CardMinList from '../../modals/lists/cardMinList';
import CardList from '../../modals/lists/cardList';
import { Divider, NavBigButton } from 'src/elements';

class MainPage extends PureComponent {
  componentDidMount = () => {
    this.props.getArticles();
  }

  render () {
    const { lgCards, mdCards, smCards } = this.props
    return (
      <PageWrapper>
        <Break />
        {smCards.length > 0 && <CardMinList cards={smCards} />}
        <Break />
        <Divider />
        <Break />
        {lgCards.length > 0 && <CardList size='lg' cards={lgCards} />}
        {mdCards.length > 0 && <CardList size='md' cards={mdCards} />}
        <Break />
        <Divider />
        <Break />
        {smCards.length > 0 && <CardList  size='sm' cards={smCards} />}
        {smCards.length > 0 && <CardMinList cards={smCards} />}
        <Break />
        <NavBigButton text='Все статьи' />
        <Break />
        <Divider>Популярное</Divider>
        <Break />
        {mdCards.length > 0 && <CardList size='md' cards={mdCards} />}
        {smCards.length > 0 && <CardList  size='sm' cards={smCards} />}
        {smCards.length > 0 && <CardMinList cards={smCards} />}
        <Break />
      </PageWrapper>
    )
  }
}

const Break = styled.div`
  margin-top: 25px;
`;

export default MainPage
