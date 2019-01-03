import React, {PureComponent} from 'react';
import styled from 'styled-components';



class Article extends PureComponent {
  render() {
    const { article } = this.props
    return (
      <Container>
        <Title>{article.title}</Title>
        <Info>
          <Section>{article.section}</Section>
          <Date>{article.date}</Date>
        </Info>
        <Text>{article.text}</Text>
        {article.img[0]
          && <Img src={article.img[0]}/>
        }
      </Container>
    )
  }
} 

const Container = styled.div`
`;

const Title = styled.div`
  font-size: 40px;
  color: #030303;
  line-height: 44px;
`;

const Date = styled.div`
  color: #6b6767;
`;

const Section = styled.div`
 color: #d3241c;
 margin-right: 12px;
`;

const Text = styled.div`
  line-height: 26px;
`;

const Img = styled.img`
    max-width: 100%;
    height: auto;
`;

const Info = styled.div`
  display: flex;
  margin: 12px 0 50px 0;
`;

export default Article;