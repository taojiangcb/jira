
import React, { EventHandler, MouseEvent, FormEvent, MouseEventHandler } from 'react';
import api from '../api';
import { useAuth } from '../contex/auth-context';

interface LoginProps {
}

interface LoginParam {
  username: string;
  password: string;
}

function RegisterScreen(props: LoginProps) {

  const { user, register } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password })
  }


  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="usename">用户名</label>
      <input type="text" id={'username'} />
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id={'password'} />
    </div>
    <button type={"submit"}>注册</button>
  </form>
}

export default RegisterScreen;