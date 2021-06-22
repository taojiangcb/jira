

/**
 * 用户登录签权处理 
 *  1. 本地存储 登录的 token
 * 
 *  login
 *  logout 
 */

import api from './api';
import { User } from './screens/project-list/search-plane';

const localStoragekey: string = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStoragekey);

export const handleUserResponse = (({ user }: { user: User }) => {
  window.localStorage.setItem(localStoragekey, user.token || "");
  return user;
})

export const login = (data: { username: string; password: string }) => {
  return fetch(`${api.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const register = function (data: { username: string; password: string }) {
  return fetch(`${api.REACT_APP_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then(async (response: Response) => {
    if (response.ok) {
      return handleUserResponse(await response.json())
    }
    else {
      return Promise.reject(data);
    }
  })
}

export const loginOut = async () => window.localStorage.removeItem(localStoragekey);