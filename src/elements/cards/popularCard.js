import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { prop } from 'styled-tools';

// maybe merge popularCard with CardMin
class PopularCard extends PureComponent {
  render() {
    const { section, body, date, id } = this.props
    return (
      <Container>
        <NavLinkStyled exact to={`/articles/${id}`}>
          <Section>{section}</Section>
          <Body>{body}</Body>
          <Date>{date}</Date>
        </NavLinkStyled>
      </Container>
    );
  };
};

const Container = styled.div`
  margin-bottom: 20px;
  transform: translateX(0);
  box-shadow: 0 0 0 0 #191919;
  padding-left: 10px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: -10px 0 0 0 #191919;
    transform: translateX(-10px);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  line-height: 1.28;
  color: #191919;
`;

const Section = styled.div`
  color: ${prop('theme.colors.danger')};
  padding-bottom: 8px;
`;

const Body = styled.div`
`;

const Date = styled.p`
  color: #6b6767;
  margin-top: 5px;
`;

export default PopularCard;