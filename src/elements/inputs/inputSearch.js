import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import magnify from '../../assets/search.svg';


export default class InputSearch extends PureComponent {
    render() {
        return (
            <Wrapper>
                <InputIcon />
                <InputWithIcon type='text' placeholder='Поиск по сериалам именам новостям' />
            </Wrapper>
        );
    };
};

const Wrapper = styled.div`
    border-bottom: 1px solid #ddd;    
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex: 1;
`;

const InputIcon = styled.span`
    background-image: url(${magnify});
    padding: 12px;
`;

const InputWithIcon = styled.input`
    border: none;
    flex: 1;
    padding: 6px 0;
    font-family: Lora;
    font-size: 28px;
    font-weight: 300;
    text-align: left;
    color: #6a6a6a;
`;