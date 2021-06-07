import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from './screens/project-list';
import { useAuth } from './contex/auth-context';
import { UnauthenticatedApp } from './unauthenticated-app';
import { AuthenticatedApp } from './authenticated-app';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
