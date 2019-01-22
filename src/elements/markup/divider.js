import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

class Divider extends PureComponent {
  render() {
    return (
      <Line>
        {this.props.children &&
          <Content>
            {this.props.children} 
          </Content>  
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
  color: #9b9b9b;
  margin: 10px auto;
  width: 100%;
  
   
    
  &::before, &::after {
    content: '';
    flex-grow: 1;
    background: #9b9b9b;
    height: 1px;
  }
`;

const Content = styled.div`
  padding: 0 10px;
  color: ${prop('theme.colors.primaryGrey')};
  font-family: Lora;
  font-weight: 400;
  font-size: 23px;
  letter-spacing: 21.94px;
  text-transform: uppercase;
  padding-left: 30px;
`;

export default Divider;