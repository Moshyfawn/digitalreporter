import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Card from '../../elements/cards/card';

class CardList extends PureComponent {
    // Card will get an array of cards from MainPage.js 
    render() {
        const { to, size, cards } = this.props
        let cardsList = []
        if(cards.length > 0){
            cardsList = cards.map(card =>
                <Card card={card} key={card.id} img={card.img} section={card.section} to={to} size={size} title={card.title} body={card.body} date={card.date} /> 
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
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > :last-child {
        margin-right: 0 !important;
    }
`;

export default CardList;

