import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './navigation/header';
import Footer from './navigation/footer';

export default class PageWrapper extends Component {
  render() {
    return(
      <Container>
        <Header />
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </Container>
    );
  };
};

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  padding: 0 64px;
`;