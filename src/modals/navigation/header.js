import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { logout } from '../../store/user/userReducer';

import NavElement from '../../elements/links/navElement';
import logo from '../../assets/logo.png'
import InputSearch from '../../elements/inputs/inputSearch';
import ExitButton from '../../elements/buttons/exitButton';

class Header extends PureComponent {

    handleClick = (e) => {
        this.props.logout();
    }

  render () {
    return (
      <Container>
          <Grid fluid>
              <Row top="lg">
                <Col lg={1}>
                    <Logo  src={logo} alt="Logo Type" width='103px'/>
                </Col>
                <Col lg={11}>
                    <Row>
                        <InputSearch />
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <NavMenu>
                                <NavElement text='Новости' to={'/news'}/>
                                <NavElement text='Рецензии' to={'/reviews'}/>
                                <NavElement text='Мнение' to={'/meaning'}/>
                                <NavElement text='Лайфхак' to={'/lifehack'}/>
                            </NavMenu>
                        </Col>
                        <Col lgOffset={8} lg={1}>
                            <Login>
                                {this.props.isAuthenticated ?
                                <ExitButton text='Выйти' onClick={this.handleClick} /> :
                                <NavElement text='Войти' to='/login' danger />
                                }
                            </Login>
                        </Col>
                    </Row>
                </Col>
              </Row>
          </Grid>
      </Container>
    )
  }
}

Header.propTypes = {
}

const Container = styled.div`
    margin-bottom: 60px;
    flex-shrink: 0;
    padding: 31px 64px 0 64px;
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
`;

const Login = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 23px;
`;
// margin-left: auto;

const Logo = styled.img`
    
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