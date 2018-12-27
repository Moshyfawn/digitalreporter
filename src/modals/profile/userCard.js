import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Avatar from 'src/elements/Icons/avatar';
import UserInfo from 'src/elements/user/userInfo';

// maybe use .map to go about not rendering missing info
class UserCard extends PureComponent {
    render() {
        return (
            <Container>
                <Avatar />
                <UserName>Константин Константинопольский</UserName>
                <Socials>https://vk.com/mymyu</Socials>
                <Idea>Я хочу заказать сериал: историю про двух друзей, которые идут по улицам Москвы и рассуждают о проблемах молодежи, 5 серий по 3 минуты</Idea>
                <Info>
                    <UserInfo name='Компания' info='НВО' />
                    <UserInfo name='Техника' info='Видеокамера Sony HXR-MC2500E' />
                    <UserInfo name='Жанр' info='Криминал, комедия' />
                    <UserInfo name='Бюджет' info='2 000 000 ₽' />
                    <UserInfo name='Работы' info='http://www.camilla-engstrom.com/works/' />
                    <UserInfo name='Контакты' info='8 (906) 182-52-23 n@bvz.name' />
                </Info>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 22%;
    line-height: 1.5;
`;

const Info = styled.div`
    width: 100%;
`;

const Idea = styled.div`
    text-align: center;
    font-weight: 300;
    width: 80%;
    margin: 40px 0;

    &::before {
        margin-bottom: 10px;
        display: block;
        content: '';
        border-top: 1px solid #979797;
        transform: scaleX(0.4);
    }

    &::after {
        margin-top: 20px;
        display: block;
        content: '';
        border-top: 1px solid #979797;
        transform: scaleX(0.4);
    }
`;

const UserName = styled.div`
    font-size: 32px;
    line-height: 1.19;
    font-weight: 300;
    text-align: center;
    padding: 10px 0;
`;

const Socials = styled.div`
    font-weight: 300;
`;

export default UserCard;