import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  FacebookShareButton, FacebookIcon, FacebookShareCount,
  VKShareButton, VKIcon, VKShareCount,
  OKShareButton, OKIcon, OKShareCount,
  TwitterShareButton, TwitterIcon,
} from 'react-share';

const bgFill = {'fill' : '#4560A100'};
const txt = 'Поделиться';

class ShareButton extends PureComponent {
  render() {
    const { vk, facebook, ok, twitter } = this.props;
    return (
      <Fragment>
        {facebook &&
          <FacebookShareButtonStyled url={window.location.href} >
            <Display facebook={facebook}>
              <FacebookIcon iconBgStyle={bgFill} />
              <Text>{txt}</Text>
            </Display>
            <FacebookShareCountStyled facebook={facebook} url={window.location.href}/>
          </FacebookShareButtonStyled>
        }
        {vk &&
          <VKShareButtonStyled url={window.location.href}>
            <Display vk={vk}>
              <VKIcon iconBgStyle={bgFill} />
              <Text>{txt}</Text>
            </Display>
            <VKShareCountStyled vk={vk} url={window.location.href}/>
          </VKShareButtonStyled>
        }
        {ok &&
          <OKShareButtonStyled url={window.location.href}>
            <Display ok={ok}>
              <OKIcon iconBgStyle={bgFill} />
              <Text>{txt}</Text>
            </Display>
            <OKShareCountStyled ok={ok} url={window.location.href}/>
          </OKShareButtonStyled>
        }
        {twitter &&
          <TwitterShareButtonStyled url={window.location.href}>
            <Display twitter={twitter}>
              <TwitterIcon iconBgStyle={bgFill} />
              <Text>{txt}</Text>
            </Display>
          </TwitterShareButtonStyled>
        }
        </Fragment>
    )
  }
}
// {
//   "width": "64",
//   "height": "64",
//   "fill": "#45668e",
//   "style": {}
// }
const Text = styled.div`
  font-size: 18px;
  color: #ffffff;
  display: contents;
`;

const Display = styled.div`
  background-color: ${ifProp(
                      { vk : true }, '#4460a0',
                        ifProp(
                          { facebook : true }, '#4c6c91',
                            ifProp(
                              { ok : true }, '#f68634',
                                '#55acee'
                              )
                        )
                      )
                    };
  display: flex;
  align-items: center;
  padding-right: 15px;
  width: 64px;
  /* transition: width 0.3s 0.2s ease-out, padding-right 0.3s 0.2s ease-out; */
  transition: width 0.3s 0.2s ease-out; 

  &:hover {
    width: 180px;
    /* transition: width 0.3s 0.2s ease-in, padding-right 0.3s 0.2s ease-in; */
    transition: width 0.3s 0.2s ease-in;
  }

  
`;

const VKShareCountStyled = styled(VKShareCount)`
  font-size: 18px;
  color: #ffffff;
  background-color: ${ifProp(
                    { vk : true }, '#4460a0',
                      ifProp(
                        { facebook : true }, '#4c6c91',
                          ifProp(
                            { ok : true }, '#f68634',
                              '#55acee'
                            )
                      )
                    )
                  };
  margin-left: 1px;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const VKShareButtonStyled = styled(VKShareButton)`
  display: flex;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;


const FacebookShareCountStyled = styled(FacebookShareCount)`
  font-size: 18px;
  color: #ffffff;
    background-color: ${ifProp(
                      { vk : true }, '#4460a0',
                        ifProp(
                          { facebook : true }, '#4c6c91',
                            ifProp(
                              { ok : true }, '#f68634',
                                '#55acee'
                              )
                        )
                      )
                    };
  margin-left: 1px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const FacebookShareButtonStyled = styled(FacebookShareButton)`
  display: flex;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const OKShareCountStyled = styled(OKShareCount)`
  font-size: 18px;
  color: #ffffff;
    background-color: ${ifProp(
                      { vk : true }, '#4460a0',
                        ifProp(
                          { facebook : true }, '#4c6c91',
                            ifProp(
                              { ok : true }, '#f68634',
                                '#55acee'
                              )
                        )
                      )
                    };
  margin-left: 1px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const OKShareButtonStyled = styled(OKShareButton)`
  display: flex;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const TwitterShareButtonStyled = styled(TwitterShareButton)`
  display: flex;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export default ShareButton;