import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { switchProp } from 'styled-tools';

import NavElement from '../links/navElement';

class Card extends PureComponent {
    render() {
        const { img, to, size, title, body, date, section } = this.props
        return ( 
            <Container img={img} size={size}>
                {size !== 'sm' &&
                    <NavElementStyled>
                        <NavElement card to={to} section={section} />
                    </NavElementStyled>
                }
               <Article size={size}>
                   {size === 'lg' &&
                        <Title>{title}</Title>
                    }
                    {size !== 'sm' &&
                        <Fragment>
                            <Body>{body}</Body> 
                            <Date>{date}</Date>
                        </Fragment>
                    }       
               </Article>              
            </Container>          
        );
    };
};

Card.propTypes = {
    img: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired
};

const Container = styled.div`
    font-size: 40px;
    line-height: 1.1;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 20px 25px;
    margin: 10px 20px 10px 0;
    color: #ffffff;

    ${switchProp("size", {
    lg:`
      height: 650px;
    `,
    md:`
      height: 480px;
    `,
    sm:`
      height: 310px;
    `
  })}

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

/* Use colored pics to view filters graphics effect */
    &:hover {
        filter: grayscale(70%);
        cursor: pointer; 
        box-shadow: 0 0 10px black;
        transition: all 0.1s ease-in-out;
    }
`;


const Title = styled.div`
    font-weight: 700;
    padding-right: 4px;
`;

const Body = styled.div`
    font-weight: 300;
`;

const Date = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-top: 14px;
`;

const NavElementStyled = styled.div`
    display: flex;
`;

const Article = styled.div`
    width: 70%;
`;

export default Card;