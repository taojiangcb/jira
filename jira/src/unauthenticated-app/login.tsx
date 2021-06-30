
import React, { EventHandler, MouseEvent, FormEvent, MouseEventHandler } from 'react';
import api from '../api';
import { useAuth } from '../contex/auth-context';
import { Form, Input, Button } from 'antd';
import { LongButton } from '.';
interface LoginProps {
}

interface LoginParam {
  username: string;
  password: string;
}

function LoginScreen(props: LoginProps) {
  const { user, login, register } = useAuth();
  const handleSubmit = (values: { username: string, password: string }) => {
    login(values);
  }
  
  return <Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
      <Input placeholder={'用户名'} type="text" id={'username'} />
    </Form.Item>
    <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
      <Input placeholder={'密码'} type="password" id={'password'} />
    </Form.Item>
    <Form.Item>
      <LongButton htmlType={"submit"} type={"primary"}>登录</LongButton>
    </Form.Item>
  </Form>
}

export default LoginScreen;