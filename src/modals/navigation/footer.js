import React, { PureComponent } from 'react'
import styled from 'styled-components';
import NavButton from '../../elements/buttons/navButton';

import logo from '../../assets/logo.png'
import IconLink from 'src/elements/buttons/iconLink';



class Footer extends PureComponent {

  render () {
    return (
      <Container>
        <Logo  src={logo} alt="Logo Type" />
        <Section>
          <NavButton text='Новости' to={'/news'} color='white' />
          <NavButton text='Рецензии' to={'/reviews'} color='white' />
          <NavButton text='Мнение' to={'/meaning'} color='white' />
          <NavButton text='Лайфхак' to={'/lifehack'} color='white' />
        </Section>
        <Section>
          <NavButton text='О нас' to={'/about'} color='white' />
          <NavButton text='Контакты' to={'/contacts'} color='white' />
          <NavButton text='Заказать рекламу' to={'/ad'} color='white' />
        </Section>
        <Socials>
          <Text>Мы в соцсетях:</Text>
          <IconLink media={['facebook', 'ok', 'vk', 'twitter']} />
        </Socials>
      </Container>
    )
  }
}

Footer.propTypes = {
}

const Container = styled.div`
  padding: 31px 140px 76px 140px;
  margin: 2em 0 0 0;
  background-color: #272633;
  display: flex;
  flex-shrink: 0;
`;

const Section = styled.div`
  margin-right: 70px;
  & > * {
    padding-bottom: 15px;
  }
`;

const Socials = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  min-width: 148px;
  width: 148px;
  margin-right: 120px;
`;

const Text = styled.div`
  font-size: 18px;
  color: #ffffff;
`;

export default Footer