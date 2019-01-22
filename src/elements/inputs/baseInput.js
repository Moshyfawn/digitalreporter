import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class BaseInput extends PureComponent {
  render() {
    return (
      <Input {...this.props} />
    );
  };
};

BaseInput.defaultProps = {
  value: ''
}


BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const Input = styled.input`
  border: none;
  font-size: 20px;
  font-weight: 300;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  width: 100%;

  &::placeholder {
    color: #bfbfbf;
    font-weight: 300;
  }
`;

export default BaseInput;