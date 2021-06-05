import { List } from "./list"
import { SearchPanel } from "./search-plane"
import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { cleanObject, useMount, useDebounce } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = (props) => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param,2000);

  useEffect(() => {
    const paramStr = qs.stringify(cleanObject(debounceParam));
    console.log(paramStr);
    fetch(`${apiUrl}/projects?${paramStr}`).then(async response => {
      if (response.ok) {
        setList(await response.json());
      }
    })
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        // console.log(await response.json());
        const data = await response.json();
        setUsers(data);
      }
    })
  })

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
    <List list={list} users={users}></List>
  </div>
}