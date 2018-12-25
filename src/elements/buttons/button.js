import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';

class Button extends PureComponent {
    render() {
        return (
            <ButtonStyled type='submit' disabled={this.props.disabled} name={this.props.name}><span>{this.props.name}</span></ButtonStyled>
        );
    };
};

const ButtonStyled = styled.button`

    background-color: white;
    color: #131313;
    border: 1px solid #131313;
    width: 100%;
    padding: 10px 0 13px 0;
    font-size: 18px;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        position: relative;
    }

    & > span {
        display: inline-block;
        position: relative;
        transition: 0.3s;
    }

    &:hover:enabled {
        cursor: pointer;
    }

    &:enabled > span:after {
    
    ${switchProp("name", {
    Далее:`
        content: '\\00bb';
    `,
    Войти:`
        content: '\\1F464';
    `
})}

    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.3s;
    }

    &:hover:enabled > span {
        ${switchProp("name", {
    Далее:`
        padding-right: 15px;
    `,
    Войти:`
        padding-right: 25px;
    `
})}
    
    }

    &:hover:enabled > span:after {
    opacity: 1;
    right: 0;
    }

    &:active:enabled {
        box-shadow: inset 0 0 3px #000000;
        transform: scale(.98);
    }
`;

export default Button;