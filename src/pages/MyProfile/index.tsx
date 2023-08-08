import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Select,
  Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { editProfileRequest } from '../../redux/auth/actions';
import UploadWidget from '../../components/UploadWidget';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthSelector } from '../../redux/auth/selector';
import {
    StyledMyProfileWrapper,
    StyledForm,
    StyledButtonWrapper,
    StyledButton,
    StyledTitleWrapper,
    StyledTitle
} from './styled';

const { TextArea } = Input;

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

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

type Data = {
    username: string,
    email: string,
    password: string,
    gender: string,
    phone: string,
    prefix: string,
    description: string,
    id: string,
    icon: {
        uid: String,
        percent: Number,
        name: String,
        status: String,
        url: String
    }
};

const MyProfile = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useAppDispatch();

  const { currentUserData, isLoaded } = useAppSelector(AuthSelector);
  const [fileList, setFileList] = useState<any>([]);

  useEffect(() => {
    if (currentUserData && currentUserData.icon) {
        const { icon: {
            uid,
            percent,
            name,
            status,
            url
        } } = currentUserData
        setFileList([{
            uid,
            percent,
            name,
            status,
            thumbUrl: url
        }])
    }
  }, [currentUserData])

  const onFinish = ({
    username,
    email,
    password,
    gender,
    phone,
    prefix,
    description
}: any) => {
    const {
        uid,
        percent,
        name,
        status,
        thumbUrl
    } = fileList[0]

    const data: Data = {
        username,
        email,
        password,
        gender,
        phone,
        prefix,
        description,
        id: currentUserData._id,
        icon: {
            uid,
            percent,
            name,
            status,
            url: thumbUrl
        }
    }

    dispatch(editProfileRequest(data));
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="380">+380</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <StyledMyProfileWrapper>
        {isLoaded ?
            <StyledForm
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={currentUserData}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <StyledTitleWrapper>
                    <StyledTitle>
                        My profile
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
                    <Input disabled={true} value='kjlkjkljkljkljlkjkjl'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
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
                    name="description"
                    label="Info profile"
                >
                    <TextArea rows={4} maxLength={400} />
                </Form.Item>
                <Form.Item
                    name="UploadWidget"
                    label="Icon"
                    tooltip="Choose an icon"
                >
                    <UploadWidget
                        setFileList={setFileList}
                        fileList={fileList}
                    />
                </Form.Item>
                <StyledButtonWrapper>
                    <StyledButton type="primary" htmlType="submit">
                        Submit
                    </StyledButton>
                </StyledButtonWrapper>
            </StyledForm>
            : <Spin indicator={antIcon} />
        }
    </StyledMyProfileWrapper>
  )
}

export default MyProfile;
