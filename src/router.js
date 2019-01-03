import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import MainLayout from 'src/layouts/MainLayout'

// Works. Will connect after auth gets non-fake user API || mock connect 
import AuthedLayout from 'src/layouts/AuthedLayout'

import MainPageContainer from 'src/pages/main/MainPageContainer';
import NewsPageContainer from 'src/pages/news/NewsPageContainer';
import RegistrationPageContainer from './pages/registration/RegistrationPageContainer';
import LoginPageContainer from './pages/login/LoginPageContainer';
import ProfilePageContainer from './pages/profile/ProfilePageContainer';
import ArticlePageContainer from './pages/article/ArticlePageContainer';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }} />
)

export class Routes extends PureComponent {
  render () {
    return (
      <Switch>
        <AppRoute exact path='/' layout={MainLayout} component={MainPageContainer} />
        <AppRoute exact path='/news' layout={MainLayout} component={NewsPageContainer} />
        <AppRoute exact path='/registration' layout={MainLayout} component={RegistrationPageContainer} />
        <AppRoute exact path='/login' layout={MainLayout} component={LoginPageContainer} />
        <AppRoute exact path='/articles/' layout={MainLayout} component={ArticlePageContainer} />
        <AppRoute exact path='/articles/:id' layout={MainLayout} component={ArticlePageContainer} />
        <AppRoute exact path='/profile' layout={MainLayout} component={ProfilePageContainer} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
