import React from 'react';
import { ProjectListScreen } from './screens/project-list';
import { useAuth } from './contex/auth-context';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { Row } from './components/Row';

export const AuthenticatedApp = () => {
  const { loginOut } = useAuth();
  return <Content>
    <Row gap={0}>
      <Row gap={true}>
        <h3>logo</h3> <h3>项目</h3> <h3>用户</h3>
      </Row>
      <Row gap={0}>
        <Button onClick={loginOut}>登出</Button>
      </Row>
    </Row>
    <Main>
      <ProjectListScreen />
    </Main>
  </Content >
}

const Content = styled.div`
display: flex;
flex-direction:column;
`

const Main = styled.main`
grid-area:main;
`;
const Nav = styled.nav`
grid-area: nav;
`
const Aside = styled.aside`
grid-area: aside;
`
const Footer = styled.footer`
grid-area: footer;
`;