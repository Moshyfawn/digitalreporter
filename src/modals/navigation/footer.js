import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavElement from '../../elements/links/navElement';

import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.svg'
import vk from '../../assets/vk.svg'
import twitter from '../../assets/twitter.svg'
import ok from '../../assets/ok.svg'

import Icon from '../../elements/Icons/icon';



class Footer extends PureComponent {

  render () {
    return (
      <Container>
          <Grid fluid>
                <Row >
                    <Col lg={1}>
                        <Logo  src={logo} alt="Logo Type" width='103px'/>
                    </Col>
                    <Col lgOffset={1} lg={1}>
                        <Row>
                            <NavElement text='Новости' to={'/news'} footer/>
                        </Row>
                        <Row>
                            <NavElement text='Рецензии' to={'/reviews'} footer/>
                        </Row>
                        <Row>
                            <NavElement text='Мнение' to={'/meaning'} footer/>
                        </Row>
                        <Row>
                            <NavElement text='Лайфхак' to={'/lifehack'} footer/>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <Row>
                            <NavElement text='О нас' to={'/about'} footer/>
                        </Row>
                        <Row>
                            <NavElement text='Контакты' to={'/contacts'} footer/>
                        </Row>
                        <Row>
                            <NavElement text='Заказать рекламу' to={'/ad'} footer/>
                        </Row>
                    </Col>
                    <Col xlOffset={6} >
                        <Row start='lg'>
                            <Socials>Мы в соцсетях:</Socials>
                        </Row>
                        <Row start='lg'>
                            <Icons>
                                <Icon src={facebook} alt='Facebook' to={'/facebook'}/>
                                <Icon src={vk} alt='VKontakte' to={'/vkontakte'}/>
                                <Icon src={twitter} alt='Twitter' to={'/twitter'}/>
                                <Icon src={ok} alt='OK' to={'/ok'}/>
                           </Icons>
                        </Row>
                    </Col>
                </Row>
          </Grid>
      </Container>
    )
  }
}

Footer.propTypes = {
}

const Container = styled.div`
    padding: 31px 140px 76px 140px;
    margin: 2em 0 0 0;
    flex-shrink: 0;
    background-color: #272633;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 9px;
    width: 100%;
`;

const Logo = styled.img`
`;

const Socials = styled.p`
    font-size: 18px;
    color: #ffffff;
`;

export default Footer