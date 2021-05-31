import React, { useEffect, useState } from "react"

export const SearchPanel = (props) => {
  const { param, setParam, users = [] } = props;
  return <from >
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
  </from>
}