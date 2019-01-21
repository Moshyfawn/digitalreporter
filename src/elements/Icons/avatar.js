import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

class Avatar extends PureComponent {
  render() { 
    return (
      <Container>
        <Outline>
          <Text>КК</Text>
        </Outline>
      </Container>        
    )
  }
}

const Container = styled.div`
  display: flex;
  
`;

const Outline = styled.div`
  font-size: 38px;
  border: 1px solid ${prop('theme.colors.primaryGrey')};
  border-radius: 100%;
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const Text = styled.div`
  color: ${prop('theme.colors.primaryGrey')};
  font-weight: 300;
  line-height: 1.1;
`;

export default Avatar;