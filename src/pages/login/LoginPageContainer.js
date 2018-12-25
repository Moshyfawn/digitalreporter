import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { getUser } from '../../store/user/userReducer';

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    error: state.userReducer.error,
    isLoading: state.userReducer.isLoading,
    isAuthenticated: state.userReducer.isAuthenticated
})

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
