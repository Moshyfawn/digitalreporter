import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class navBigButton extends PureComponent {
  render() {
    return (
      <NavElement exact to='/'>{this.props.text}</NavElement>
    );
  };
};

const NavElement = styled(NavLink)`
  background-color: white;
  color: #131313;
  border: 1px solid #000000;
  padding: 20px 95px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
`;

export default navBigButton;