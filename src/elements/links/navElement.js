import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";
import { ifProp } from 'styled-tools';

class NavElement extends PureComponent {
  render() {
    return (
      <NavLinkStyled exact to={this.props.to} danger={this.props.danger} footer={this.props.footer} card={this.props.card} text={this.props.text} section={this.props.section}>
        {this.props.section 
          ? this.props.section 
          : this.props.text
        }
      </NavLinkStyled>
    );
  };
};

NavElement.propTypes = {
  to: PropTypes.string,
  section: PropTypes.string
}

NavElement.defaultProps = {
  danger: false,
  footer: false,
  card: false
}

const NavLinkStyled = styled(NavLink)`
  font-weight: ${ifProp({ danger : true }, '500', '400')};
  font-size: 18px;
  color: ${ifProp(
            { danger : true }, '#d52b2b',
              ifProp(
                { footer: true }, '#ffffff',
                  ifProp(
                    {card: true}, '#ffffff',
                      '#131313' 
                  )
              )
          )
      };
  padding: ${ifProp({ card : true }, '', '0 8px 3px 8px' )};

  &::after {
    display: block;
    padding-top: 4px;
    
    content: '';
    border-bottom: ${ifProp(
                      { danger : true }, '',
                        ifProp(
                          { footer : true }, '',
                            ifProp(
                              { card : true }, '2px solid #ffffff',
                                '2px solid #d0011b'
                              )
                        )
                    )
                };

    transform:  ${ifProp({ card : true }, `scaleX(0)`, `scaleX(0)`)};
    transition: transform 0.25s ease-in-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }

  ${ifProp('card', css`
    &::before {
      display: block;
      padding-bottom: 4px;
      content: '';
      border-top: 2px solid #ffffff;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
    }
    
    &:hover::before {
      transform: scaleX(1);
      transition: transform 0.25s ease-in-out;
  `)}
`;

export default NavElement;