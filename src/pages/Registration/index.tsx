import React from 'react';
import {
  Checkbox,
  Form,
  Input,
  Select
} from 'antd';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { registerRequest } from '../../redux/auth/actions';
import {
    StyledRegistrationWrapper,
    StyledForm,
    StyledButtonWrapper,
    StyledButton,
    StyledTitleWrapper,
    StyledTitle
} from './styled';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    }
  }
};

type Data = {
    username: string,
    email: string,
    password: string,
    gender: string,
    phone: string,
    prefix: string
};

const Registration = (): JSX.Element => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onFinish = ({
    username,
    email,
    password,
    gender,
    phone,
    prefix
}: any) => {
    const data: Data = {
        username,
        email,
        password,
        gender,
        phone,
        prefix
    }

    dispatch(registerRequest({ data, history }));
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <StyledRegistrationWrapper>
        <StyledForm
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <StyledTitleWrapper>
                <StyledTitle>
                    Registration
                </StyledTitle>
            </StyledTitleWrapper>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="username"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: 'Please select gender!' }]}
            >
                <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                {
                    validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the agreement
                </Checkbox>
            </Form.Item>
            <StyledButtonWrapper>
                <StyledButton type="primary" htmlType="submit">
                    Register
                </StyledButton>
            </StyledButtonWrapper>
        </StyledForm>
    </StyledRegistrationWrapper>
  );
};

export default Registration;