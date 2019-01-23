import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";
import { switchProp, prop } from 'styled-tools';

class NavButton extends PureComponent {
  render() {
    const { to, text, color } = this.props;
    return (
      <NavElement exact to={to} color={color}>{text}</NavElement>
    );
  };
};

const NavElement = styled(NavLink)`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  ${switchProp("color", {
    black: css`
      color: ${prop('theme.typo.primaryBlack')};
      &::after {
        border-bottom: 2px solid ${prop('theme.colors.danger')};
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
        content: '';
        padding-top: 3px;
      }
      &:hover::after {
        transform: scaleX(1);
      }
    `,
    white: css`
       color: ${prop('theme.typo.primaryWhite')};
    `
  })}
`;

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['black', 'white']),
}

export default NavButton;