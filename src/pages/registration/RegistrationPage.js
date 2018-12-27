import React, { PureComponent } from 'react';
import PageWrapper from 'src/modals/pageWraper';
import RegistrationForm from '../../modals/auth/registrationForm';


class RegistrationPage extends PureComponent {

    componentDidUpdate = () => {
        if (this.props.isAuthenticated) {
            this.props.history.push('/profile')
        }
    }
    
    render() {
        return (
            <PageWrapper>
                    <RegistrationForm onSend={this.props.createUser} />
            </PageWrapper>
        )
    }
}


export default RegistrationPage;