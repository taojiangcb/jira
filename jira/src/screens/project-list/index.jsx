import { List } from "./list"
import { SearchPanel } from "./search-plane"
import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { cleanObject, useMount, useDebounce } from '../../utils';
import { useHttp } from '../../utils/http';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = (props) => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const debounceParam = useDebounce(param, 200);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const clinet = useHttp();

  useEffect(() => {
    // const paramStr = qs.stringify(cleanObject(debounceParam));
    // fetch(`${apiUrl}/projects?${paramStr}`).then(async response => {
    //   debugger;
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // })
    // debugger;
    clinet('projects', { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    // fetch(`${apiUrl}/users`).then(async response => {
    //   if (response.ok) {
    //     const data = await response.json();
    //     setUsers(data);
    //   }
    // });
    clinet('users').then(setUsers);
  })

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
    <List list={list} users={users}></List>
  </div>
}