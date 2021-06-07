
import React, { EventHandler,MouseEvent, FormEvent, MouseEventHandler } from 'react';
import api from '../../api';
import { useAuth } from '../../contex/auth-context';

interface LoginProps {
}

interface LoginParam {
  username: string;
  password: string;
}

function LoginScreen(props: LoginProps) {
  // const login = (param: LoginParam) => {
  //   fetch(`${api.REACT_APP_API_URL}/login`, {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(param)
  //   }).then(async (response: Response) => {
  //     if (response.ok) {

  //     }
  //   })
  // }

  const {user,login,register} = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password })
  }

  const handleRegister = (event:MouseEvent<HTMLButtonElement>) => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    register({username,password}).then(res => {
      console.log(res);
    });
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
    <button type={"submit"}>登录</button>
    <button type={"button"} onClick={handleRegister}>注册</button>
  </form>
}

export default LoginScreen;