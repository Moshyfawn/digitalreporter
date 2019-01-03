import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  VKShareButton,
  OKShareButton,
  TwitterShareButton
} from 'react-share';

import facebook from '../../assets/facebook.svg'
import vk from '../../assets/vk.svg'
import twitter from '../../assets/twitter.svg'
import ok from '../../assets/ok.svg'
import Icon from 'src/elements/Icons/icon';
import ShareButton from 'src/elements/buttons/ShareButton';

class ShareList extends PureComponent {
  render() {
    return (
      <Container>
        <ShareButton vk />
        <ShareButton facebook />
        <ShareButton twitter />
        <ShareButton ok />
      </Container>
    )
  }
}
// get things over with button expand on hover (check https://stackoverflow.com/questions/33931100/expand-div-on-click-with-smooth-animation)  

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ShareList;