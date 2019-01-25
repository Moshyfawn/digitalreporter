import React, { PureComponent } from 'react';
import Yup from 'src/utils/yup';
import { ifProp } from 'styled-tools';
import styled from 'styled-components';

import { Button, BaseForm, InputGroup } from 'src/elements';


export default class RegistrationForm extends PureComponent {

  validationSchema = () => {
    return Yup.object().shape({
      // field: Yup.string().equalTo(Yup.ref('fieldToMatch'), 'errorMassage').required('error massage'),
      firstName: Yup.string()
        .min(2, 'Ошибка! Введите свое имя')
        .required('Ошибка! Не введено имя'),
      email: Yup.string()
        .email('Ошибка! Неверный адрес электронной почты')
        .required('Ошибка! Не введен адрес электронной почты'),
      emailAgain: Yup.string()
        .equalTo(Yup.ref('email'), 'Ошибка! Набранные почтовые адреса не совпадают'),
      password: Yup.string()
        .matches(/[a-zа-я]/, 'Ошибка! Пароль должен содержать минимум одну маленькую букву')
        .matches(/[A-ZА-Я]/, 'Ошибка! Пароль должен содержать минимум одну большую букву'),
      passwordAgain: Yup.string()
        .equalTo(Yup.ref('password'), 'Ошибка! Набранные пароли не совпадают')
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
            {/* {Object.keys(errors).map(key => errors[key].length > 0 && touched[key] ? <Error>{errors[key]}</Error> : '')} */}
          <Error>{formError}</Error>
        </Validation>
        <Group>
          <InputGroup name='firstName' value={values['firstName']} type="text" label='Имя' placeholder='Иван' onChange={handleChange} onBlur={handleBlur} />
          <InputGroup name='lastName' value={values['lastName']} type="text" label='Фамилия' placeholder='Иванов' onChange={handleChange} onBlur={handleBlur} />
        </Group>
        <Group>
          <InputGroup name='email' value={values['email']} type="text" label='Почта' placeholder='example@gmail.com' onChange={handleChange} onBlur={handleBlur} />
          <InputGroup name='emailAgain' value={values['emailAgain']} type="text" label='Повторите почту' placeholder='example@gmail.com' onChange={handleChange} onBlur={handleBlur} />
        </Group>
        <Group>
          <InputGroup name='password' value={values['password']} type="password" label='Пароль' placeholder='' onChange={handleChange} onBlur={handleBlur} />
          <InputGroup name='passwordAgain' value={values['passwordAgain']} type="password" label='Повторите пароль' placeholder='' onChange={handleChange} onBlur={handleBlur} />
        </Group>
          <Button name='Далее' disabled={isSubmitting} />
      </Form>
    );
  };


  render() {
    return (
      <BaseForm onSubmit={this.handleSubmit} render={this.renderForm} validationSchema={this.validationSchema} />
    );
  };
};

const Form = styled.form`
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
  min-height: 62px;
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

