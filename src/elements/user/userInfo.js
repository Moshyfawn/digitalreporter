import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

class UserInfo extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Row between="lg" start='lg'>
          <Col lg={2} >
            {this.props.name &&
              <InfoName>
                {this.props.name}:
              </InfoName>
            }
          </Col>
          <Col lg={8}>
            <Info>
              {this.props.info}    
            </Info>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const InfoName = styled.div`
  font-weight: 500;
`;

const Info = styled.div`
  font-weight: 300;
`;
export default UserInfo;
