import React, { PureComponent } from 'react';
import styled from 'styled-components'

class BaseTextarea extends PureComponent {
  render() {
    return (
      <Textarea name={this.props.name} value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} onBlur={this.props.onBlur} />
    );
  };
};

const Textarea =styled.textarea`
  background-color: #ffffff;
`;

export default BaseTextarea;