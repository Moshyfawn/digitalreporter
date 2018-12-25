import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Button extends PureComponent {
    render() {
        // to={this.props.to}
        // 'Все статьи' will be swaped by this.props.buttonName
        return (
            <NavLinkStyled exact to='/'>{this.props.name}</NavLinkStyled>
        );
    };
};

const NavLinkStyled = styled(NavLink)`
    background-color: white;
    color: #131313;
    border: 1px solid #000000;
    padding: 20px 95px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 18%;
    margin: 40px;
`;

export default Button;