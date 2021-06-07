import React from 'react';
import { ProjectListScreen } from './screens/project-list';
import { useAuth } from './contex/auth-context';

export const AuthenticatedApp = () => {
  const { loginOut } = useAuth();
  return <div>
    <button onClick={loginOut}>登出</button>
    <ProjectListScreen />
  </div>
}