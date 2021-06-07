import React from 'react';

import { Story, Meta } from '@storybook/react';

import Login from './login';

const meta: Meta = {
  title: "LOGIN",
  component: Login
}

const Template: Story<{}> = args => {
  return <Login {...args}></Login>
}

export const LoginIn = Template.bind({});

export default meta;

