import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookIcon,
  TwitterIcon,
  VKIcon,
  OKIcon
} from 'react-share';
import styled from 'styled-components';

class IconLink extends PureComponent {
  renderSwitch = (item) => {
    // social media logo params
    const bgFill = {'fill' : '#374a6700'};
    const strokeFill = '#ffffff';
    const logoSize = 60;
    switch(item) {
      case 'facebook':
        return <FacebookIcon size={logoSize} round={true} iconBgStyle={bgFill} logoFillColor={strokeFill} />;
      case 'twitter':
        return <TwitterIcon size={logoSize} round={true} iconBgStyle={bgFill} logoFillColor={strokeFill} />;
      case 'vk':
        return <VKIcon size={logoSize} round={true} iconBgStyle={bgFill} logoFillColor={strokeFill} />;
      case 'ok':
        return <OKIcon size={logoSize} round={true} iconBgStyle={bgFill} logoFillColor={strokeFill} />;
      default:
        return null;
    }
  }
  render() {
    const { media } = this.props;
    return (
      <Container>
        {media.map(item => (
          <SocialLink key={item} href={`https://www.${item}.com/`}>
            {this.renderSwitch(item)}
          </SocialLink>
          ))
        }
      </Container>
    );
  };
};

const Container = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
  &:active > div > svg > g > path {
    fill: #b0d4ef; 
  }
`;


IconLink.propTypes = {
  media: PropTypes.array.isRequired,
  item: PropTypes.oneOf(['facebook', 'twitter', 'vk', 'ok'])
}

export default IconLink;