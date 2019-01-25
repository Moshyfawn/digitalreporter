import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { PopularCard } from 'src/elements';

class PopularList extends PureComponent {
  render() {
    const { popularArticles } = this.props

    let popularArticlesList = []
    if(popularArticles.length > 0){
      popularArticlesList = popularArticles.map(popularArticle =>
        <PopularCard popularArticle={popularArticle} key={popularArticle.id} id={popularArticle.id} section={popularArticle.section} body={popularArticle.body} date={popularArticle.date} /> 
      );
    };

    return (
      <Container>
        <Section>Популярное</Section>
        {popularArticlesList.length > 0 && popularArticlesList}
      </Container>
    )
  }
}

const Container = styled.div`

`;

const Section = styled.div`
  font-weight: 300;
  font-size: 26px;
  color: #191919;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export default PopularList;