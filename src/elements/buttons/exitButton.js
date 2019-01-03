import React, { PureComponent } from 'react';
import styled from 'styled-components';

class ExitButton extends PureComponent {
  render() {
    return (
      <Button type='button' onClick={this.props.onClick} >{this.props.text}</Button>
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

export default ExitButton;