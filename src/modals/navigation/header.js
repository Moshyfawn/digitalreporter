import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../../store/user/userReducer';

import logo from '../../assets/logo.png'
import InputSearch from '../../elements/inputs/inputSearch';
import LoginButton from '../../elements/buttons/LoginButton';
import NavButton from 'src/elements/buttons/navButton';

class Header extends PureComponent {

  handleClick = (e) => {
    if (this.props.isAuthenticated) {
      this.props.logout();
    } else 
      window.location.href = '/login';
  }

  render () {
    const { isAuthenticated } = this.props;
    return (
      <Container>
        <Logo src={logo} alt="Logo Type" />
        <Section>
            <InputSearch />
          <NavMenu>
            <NavButton text='Новости' to={'/news'} color='black' />
            <NavButton text='Рецензии' to={'/reviews'} color='black' />
            <NavButton text='Мнение' to={'/meaning'} color='black' />
            <NavButton text='Лайфхак' to={'/lifehack'} color='black' />
            <LoginButton text={isAuthenticated ? 'Выйти' : 'Войти'} onClick={this.handleClick} />
          </NavMenu>
        </Section>
      </Container>
    )
  }
}

Header.propTypes = {
}

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  padding: 31px 63px;
`;

const Section = styled.div`
  flex-basis: 100%;
`;

const Logo = styled.img`
  width: 103px;
  margin-right: 70px;
`; 

const NavMenu = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  & > :not(:last-child) {
    margin-right: 23px;
  }
  & > :last-child {
    margin-left: auto;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    isAuthenticated: state.userReducer.isAuthenticated
  };
};

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);