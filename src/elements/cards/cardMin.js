import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class CardMin extends PureComponent {
  render() {
    const { section, body, date, id } = this.props
    return (
      <Container exact to={`/articles/${id}`}>
        <Text>
          <Title>{section}:</Title>
          <Body>{body}</Body>
        </Text>
        <Date>{date}</Date>
      </Container>
    );
  };
};

const Container = styled(NavLink)`
  flex: 1;
  font-size: 18px;
  line-height: 1.28;
  margin: 0 20px 10px 0;
  color: #191919;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
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