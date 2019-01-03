import React, { PureComponent } from 'react';
import PageWrapper from 'src/modals/pageWraper';
import LoginForm from '../../modals/auth/loginForm';


class LoginPage extends PureComponent {

  componentDidUpdate = () => {
    if (this.props.isAuthenticated) {
      this.props.history.push('/profile')
    }
  }

  render() {
    return (
      <PageWrapper>
        <LoginForm onSend={this.props.getUser}/>
      </PageWrapper>
    )
  }
}


export default LoginPage;