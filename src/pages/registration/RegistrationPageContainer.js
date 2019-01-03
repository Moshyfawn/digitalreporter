import { connect } from 'react-redux'
import RegistrationPage from './RegistrationPage'
import { createUser } from '../../store/user/userReducer';

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  error: state.userReducer.error,
  isLoading: state.userReducer.isLoading,
  isAuthenticated: state.userReducer.isAuthenticated
})

const mapDispatchToProps = {
  createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
