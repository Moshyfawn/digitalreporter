import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import MainLayout from 'src/layouts/MainLayout'
import AuthedLayout from 'src/layouts/AuthedLayout'

import MainPageContainer from 'src/pages/main/MainPageContainer';
import NewsPageContainer from 'src/pages/news/NewsPageContainer';
import RegistrationPageContainer from './pages/registration/RegistrationPageContainer';
import LoginPageContainer from './pages/login/LoginPageContainer';
import ProfilePage from './pages/profile/ProfilePage';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => {
    console.log('props', props, ...rest)

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
        <AppRoute exact path='/profile' layout={AuthedLayout} component={ProfilePage} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
