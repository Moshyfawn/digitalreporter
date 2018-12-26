import React, { PureComponent } from 'react';
import styled from 'styled-components';

class BaseInput extends PureComponent {
    render() {
        return (
            <Input name={this.props.name} value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} onBlur={this.props.onBlur} />
        );
    };
};

BaseInput.defaultProps = {
    value: ''
}

const Input = styled.input`
    border: none;
    font-size: 20px;
    font-weight: 300;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    width: 100%;

    &::placeholder {
        color: #bfbfbf;
        font-family: Roboto;
        font-weight: 300;
    }
`;

export default BaseInput;