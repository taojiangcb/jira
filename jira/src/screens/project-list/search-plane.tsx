import React, { useEffect, useState } from "react"


export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token:string;
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
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={evt => {
        console.log(evt.target.value);
        setParam({ ...param, personId: evt.target.value })
      }}>
        <option value={''}>负责人</option>
        {
          users && users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))
        }
      </select>
    </div>
  </form>
}