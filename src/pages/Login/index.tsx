import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

import { loginRequest } from '../../redux/auth/actions';

import {
    StyledButtonWrapper,
    StyledLoginWrapper,
    StyledInput,
    StyledTitle,
    StyledForm
} from './styled'

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onFinish = (data: any) => {
    dispatch(loginRequest({ data, history }));
  };

  return (
    <StyledLoginWrapper>
      <StyledForm
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <StyledTitle>Login</StyledTitle>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <StyledInput prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <StyledInput
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <StyledButtonWrapper>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/registration">register now!</a>
        </StyledButtonWrapper>
      </StyledForm>
    </StyledLoginWrapper>
  );
}

export default Login