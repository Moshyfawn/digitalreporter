import React, { PureComponent } from 'react';
import PageWrapper from 'src/modals/pageWraper';
import UserCard from 'src/modals/profile/userCard';

class ProfilePage extends PureComponent {
    render() {
        return (
            <PageWrapper>
                <UserCard />
            </PageWrapper>
        )
    }
}



export default ProfilePage;