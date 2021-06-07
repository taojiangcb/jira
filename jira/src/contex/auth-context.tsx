import React, { useState, useContext, PropsWithChildren } from 'react';

import * as auth from '../auth-provider';
import { User } from '../screens/project-list/search-plane';

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<{
  user: User | null;
  login: (form: AuthForm) => Promise<User>;
  register: (form: AuthForm) => Promise<User>;
  loginOut: () => Promise<void>;
} | undefined>(undefined);
AuthContext.displayName = "AutoContext";

type AuthProviderProps = PropsWithChildren<{}>;

export const AuthProvider = function (props: AuthProviderProps) {

  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => {
    return auth.login(form).then(user => {
      setUser(user);
      return user;
    })
  }
  const register = function (form: AuthForm) {
    return auth.register(form).then(user => {
      setUser(user);
      return user;
    })
  }
  const loginOut = function () {
    return auth.loginOut().then(() => setUser(null));
  }

  return <AuthContext.Provider value={{ user, login, loginOut, register }}>
    {props.children}
  </AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 中使用')
  }
  return context;
}