import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookIcon,
  TwitterIcon,
  VKIcon,
  OKIcon,
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  OKShareButton
} from 'react-share';
import styled from 'styled-components';

class IconLink extends PureComponent {
  renderSwitch = (item) => {
    // social media logo params
    const bgFill = {'fill' : '#374a6700'};
    const strokeFill = '#ffffff';
    const logoSize = 60;
    const shareUrl = window.location.href;
    switch(item) {
      case 'facebook':
        return (
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={logoSize} iconBgStyle={bgFill} logoFillColor={strokeFill} />
          </FacebookShareButton>
        );
      case 'twitter':
        return (
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={logoSize} iconBgStyle={bgFill} logoFillColor={strokeFill} />
          </TwitterShareButton>
        );
      case 'vk':
        return  (
          <VKShareButton url={shareUrl}>
            <VKIcon size={logoSize} iconBgStyle={bgFill} logoFillColor={strokeFill} />
          </VKShareButton>
        );
      case 'ok':
        return (
          <OKShareButton url={shareUrl}>
            <OKIcon size={logoSize} iconBgStyle={bgFill} logoFillColor={strokeFill} />
          </OKShareButton>
        );
      default:
        return null;
    }
  }
  render() {
    const { media } = this.props;
    const shareText = 'Поделиться'
    return (
      <Container>
        {media.map(item => (
          <SocialLink key={item}>
            {this.renderSwitch(item)}
            <Text>{shareText}</Text>
          </SocialLink>
          ))
        }
      </Container>
    );
  };
};
// href={`https://www.${item}.com/`}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 60px;
  min-width: 60px;
  max-width: 185px;
  flex: 0;
  transition: flex 2s ease-in-out;
  &:hover {
    flex: 1;
  }
  background-color: blue;
`;

const Text = styled.div`
  color: white;
`;

IconLink.propTypes = {
  item: PropTypes.oneOf(['facebook', 'twitter', 'telegram', 'pinterest', 'vk', 'reddit', 'tumbler', 'mail'])
}

export default IconLink;