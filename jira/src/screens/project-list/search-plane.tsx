import React, { useEffect, useState } from "react";
import { Select, Input, Form } from 'antd';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface ParamProps {
  name: string;
}

interface SerachPanelProps {
  param: { name: string; personId: string };
  setParam: (value: SerachPanelProps['param']) => void;
  users: User[];
}

export const SearchPanel = (props: SerachPanelProps) => {
  const { param, setParam, users = [] } = props;
  return <form >
    <div>
      <Input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <Select value={param.personId}
        onChange={value => {
          setParam({ ...param, personId: value })
        }}>
        <Select.Option value={''}>负责人</Select.Option>
        {
          users && users.map(user => (<Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>))
        }
      </Select>
    </div>
  </form>
}