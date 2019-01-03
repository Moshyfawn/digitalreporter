import React, { PureComponent } from 'react';
import styled from 'styled-components';

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
  border: 1px solid #9b9b9b;
  border-radius: 100%;
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const Text = styled.div`
  color: #9b9b9b;
  font-weight: 300;
  line-height: 1.1;
`;

export default Avatar;