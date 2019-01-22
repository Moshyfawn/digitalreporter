import React, { PureComponent } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

class BaseTextarea extends PureComponent {
  render() {
    return (
      <Textarea {...this.props} />
    );
  };
};

const Textarea =styled.textarea`
  background-color: #ffffff;
`;

BaseTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default BaseTextarea;