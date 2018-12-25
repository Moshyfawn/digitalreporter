import React, { PureComponent } from 'react';
import PageWrapper from 'src/modals/pageWraper';
import LoginForm from '../../modals/auth/loginForm';


class LoginPage extends PureComponent {
    render() {
        return (
            <PageWrapper>
                <LoginForm />
            </PageWrapper>
        )
    }
}


export default LoginPage;