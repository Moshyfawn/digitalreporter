import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { switchProp, prop } from 'styled-tools';
import { NavLink } from 'react-router-dom';

import NavElement from '../links/navElement';

class Card extends PureComponent {

  getPath = () => {
    switch (this.props.section) {
      case 'Новости':
        return '/news';
      case 'Рецензии':
        return '/reviews';
      case 'Мнение':
        return '/meaning';          
      case 'Лайфхак':
        return '/lifehack';
      default:
        return '/';
    }
  }

  render() {
    const { img, size, title, body, date, section, id, more } = this.props
    return ( 
      <Container exact to={`/articles/${id}`} img={img} size={size}>
        {size !== 'sm' && !more &&
            <NavElementStyled>
                <NavElement card to={this.getPath()} section={section} />
            </NavElementStyled>
        }
        <Article size={size} >
          {size === 'lg' 
          && <Title>{title}</Title>
          }
          {size !== 'sm' && !more && 
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
  img: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

const Container = styled(NavLink)`
  font-size: 40px;
  line-height: 1.1;
  background-color: #afafaf;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px 25px;
  margin: 10px 20px 10px 0;
  color: #ffffff;
  filter: grayscale(20%);
  box-shadow: none;
  transition: box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;

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
    filter: grayscale(0);
    box-shadow: ${prop('theme.shadows.cardShadow')};
    cursor: pointer;
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