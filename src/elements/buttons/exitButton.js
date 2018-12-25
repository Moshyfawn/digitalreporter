import React, { PureComponent } from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { ifProp } from 'styled-tools';

class exitButton extends PureComponent {
    render() {
        return (
            <Button>{this.props.text}</Button>
        );
    };
};









const Button = styled.div`
    font-weight: 500;
    font-size: 18px;
    color: #d52b2b;                
    padding: 0 8px 3px 8px;

    &:hover {
        cursor: pointer;
    }
    
    &::after {
        display: block;
        padding-top: 4px;        
    }


`;

export default exitButton;