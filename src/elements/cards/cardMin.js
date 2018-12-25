import React, { PureComponent } from 'react';
import styled from 'styled-components';

class CardMin extends PureComponent {
    render() {
        const { section, body, date } = this.props
        return (
            <Container>
                <Text>
                    <Title>{section}:</Title>
                    <Body>{body}</Body>
                </Text>
                <Date>{date}</Date>
            </Container>
        );
    };
};

const Container = styled.div`
    flex: 1;
    font-size: 18px;
    line-height: 1.28;
    margin: 0 20px 10px 0;
`;

const Text = styled.div`
`;

const Title = styled.span`
    font-weight: 700;
    padding-right: 4px;
`;

const Body = styled.span`
`;

const Date = styled.p`
    color: #6b6767;
    margin-top: 5px;
`;

export default CardMin;