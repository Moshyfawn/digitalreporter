import React, { PureComponent } from 'react'
import styled from 'styled-components';

import CardMin from '../../elements/cards/cardMin';

class CardMinList extends PureComponent {
    render() {
        const { cards } = this.props

        let cardsList = []
        if(cards.length > 0){
            cardsList = cards.map(card =>
                 <CardMin card={card} key={card.id} section={card.section} body={card.body} date={card.date} /> 
            );
        };
        return (
          <Container>
            {cardsList.length > 0 && cardsList}
          </Container>  
        );
    };
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > :last-child {
        margin-right: 0 !important;
    }
`;

export default CardMinList;

