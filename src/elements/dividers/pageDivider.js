import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

class PageDivider extends PureComponent {
  render() {
    return (
      <Line empty={this.props.isEmpty} >
        {this.props.text &&
          <Text>{this.props.text}</Text>
        }
      </Line>
    );
  };
};



const Line = styled.div`
  display: flex;
	flex-basis: 100%;
  align-items: center;
  justify-content: center;
  color: ${prop('theme.colors.primaryGrey')};
  font-family: Lora;
  font-weight: 400;
  font-size: 23px;
  letter-spacing: 21.94px;
  text-transform: uppercase;
  margin: 50px auto;
  width: ${ifProp({ empty : true }, '20%', '50%' )};
   
    
  &::before, &::after {
    content: '';
    flex-grow: 1;
    background: ${prop('theme.colors.primaryGrey')};
    height: 1px;
    font-size: 0px;
    line-height: 0px; 
  }
`;

const Text = styled.span`
  margin: 0 0 0 21.94px;
`;

export default PageDivider;