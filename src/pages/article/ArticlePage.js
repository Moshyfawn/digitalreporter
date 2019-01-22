import React, { PureComponent } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageWrapper from '../../modals/pageWraper';
import Article from 'src/modals/articles/article';
import PopularList from 'src/modals/lists/popularList';
import Divider from 'src/elements/markup/divider';
import CardList from 'src/modals/lists/cardList';
import CardMinList from 'src/modals/lists/cardMinList';
import ShareButton from 'src/elements/buttons/ShareButton'

class ArticlePage extends PureComponent {
  // this.props.match.params.id
  componentDidMount = () => {
    if(this.props.articles.length > 0) {
      this.props.getArticle(this.props.match.params.id);
    } else {
      this.props.getArticles();
    }
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.articles.length === 0 && this.props.articles.length > 0){
      this.props.getArticle(this.props.match.params.id);
    }
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getArticle(this.props.match.params.id);
    }
  }
  render() {
    const { article, articles, popularArticles, moreArticles } = this.props
    return (
      <PageWrapper>
        <Grid fluid>
          <Row>
            {article && article.title &&
              <Col lgOffset={1} lg={8} >
                <Row>
                  <Article article={article} articles={articles} />
                </Row>
                <Row>
                  <Divider>Материалы</Divider>
                </Row>
                <Row center='lg'>
                  <div>This place needs to contain 'materials' (film tags?)</div>
                </Row>
                <Row>
                  <Divider />
                </Row>
                <Row>
                  <ShareButton media={['vk', 'facebook', 'twitter', 'ok']} />
                </Row>
                <Row>
                  <Divider>Ещё</Divider>
                </Row>
                <Row>
                  {moreArticles.length > 0 && <CardList to={'/news'} size='md' cards={moreArticles} more />}
                </Row>
                <Row>
                  {moreArticles.length > 0 && <CardMinList cards={moreArticles} more />}
                </Row>
                <Row>
                  {moreArticles.length > 0 && <CardList to={'/news'} size='md' cards={moreArticles} more />}
                </Row>
                <Row>
                  {moreArticles.length > 0 && <CardMinList cards={moreArticles} more />}
                </Row>
              </Col>
            }
            {!article &&
              <Col lgOffset={1} lg={8}>
                <Row center='lg'>
                  <div>Your article is not here!</div>
                </Row>
              </Col>
            }
            <Col lgOffset={article ? 1 : 10} lg={2} >
              <PopularList popularArticles={popularArticles} />
            </Col>
          </Row>
        </Grid>
          
      </PageWrapper>
    )
  }
}

export default ArticlePage;
