import React, { PureComponent } from 'react';
import Yup from 'src/utils/yup';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import BaseForm from 'src/elements/forms/BaseForm';
import InputGroup from 'src/elements/inputs/inputGroup';
import Button from '../../elements/buttons/button';

export default class LoginForm extends PureComponent {

  validationSchema = () => {
    return Yup.object().shape({
      // field: Yup.string().equalTo(Yup.ref('fieldToMatch'), 'errorMassage').required('error massage'),
      email: Yup.string()
        .email('Ошибка! Неверный адрес электронной почты')
        .required('Ошибка! Не введен адрес электронной почты'),
      password: Yup.string()
        .required('Ошибка! Не введен пароль'),
    });
  };
    
  handleSubmit = (values) => {
    this.props.onSend(values);
  };

  renderForm = (props) => {
    const {
      values, 
      touched,
      errors,
      isSubmitting,
      handleChange,
      // setFieldValue,
      handleBlur,
      handleSubmit,
    } = props;

    const keysWithErrors = Object.keys(errors).filter(key => errors[key].length > 0 && touched[key]);
    let formError = '';
    if(keysWithErrors.length > 0){
      formError = errors[keysWithErrors[keysWithErrors.length - 1]]
    };

      return (
        <Form onSubmit={handleSubmit}>
          <Validation isHidden={formError.length > 0 ? false : true}>
            <Error>{formError}</Error>
          </Validation>   
          <Group>
            <InputGroup name='email' value={values['email']} type="text" label='Почта' placeholder='example@gmail.com' onChange={handleChange} onBlur={handleBlur} />
            <InputGroup name='password' value={values['password']} type="password" label='Пароль' placeholder='' onChange={handleChange} onBlur={handleBlur} />  
          </Group>
          <Button name='Войти' disabled={isSubmitting} />
          <Forget>Забыли пароль?</Forget>
        </Form>
      );
    };


  render() {
    return (
      <BaseForm onSubmit={this.handleSubmit} render={this.renderForm} validationSchema={this.validationSchema} />
    );
  };
};

const Form = styled.div`
  width: 30%;
  margin-bottom: 110px;

  & > :nth-child(2) {
      margin-top: 30px;
  }
`;

const Group = styled.div`
  margin-bottom: 50px;
`;

const Error = styled.div`
  background-color: #ffffff;
  color: #d0011b;;
  border: 1px solid #d0011b;
  width: 100%;
  min-height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
`;

const Validation = styled.div`
  visibility: ${ifProp({ isHidden : true }, 'hidden', 'visible' )};

  & > :first-child {
    margin-top: 0;
  }
`;

const Forget = styled.p`
  padding: 11px;
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 300;
  color: ${prop('theme.colors.primaryGrey')};
`;