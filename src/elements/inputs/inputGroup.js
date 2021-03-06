import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { BaseTextarea, BaseInput } from 'src/elements';

// Give it a 'type' so it knows what to render: input/textarea
// Needs a new textarea component

class InputGroup extends PureComponent {
  render() {
    return (
    <Fieldset>
      <Legend>{this.props.label}</Legend>
      {this.props.type !== 'textarea' &&
        <BaseInput {...this.props} />
      }
      {this.props.type === 'textarea' &&
        <BaseTextarea {...this.props}/>
      }
    </Fieldset>
    );
  };
};

const Fieldset = styled.fieldset`
  border-color: #bfbfbf;
  border-style: solid;
  border-width: 1px;
`;

const Legend = styled.legend`
  font-size: 13px;
  font-weight: 300;
  color: #bfbfbf;
  margin-left: 12px;
  padding: 0 3px;
`;

export default InputGroup;