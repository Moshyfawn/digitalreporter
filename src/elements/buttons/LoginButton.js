import React, { PureComponent } from 'react';
import styled from 'styled-components';

class ExitButton extends PureComponent {
  render() {
    return (
      <Button onClick={this.props.onClick}>{this.props.text}</Button>
    );
  };
};

const Button = styled.div`
  font-weight: 500;
  color: #d52b2b;
  &:hover {
    cursor: pointer;
  }
`;

export default ExitButton;