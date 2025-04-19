import api from './api';

export function signin(username, password) {
  return api.post('/auth/login', { username, password });
}

export function signup(email, username, password) {
  return api.post('/auth/register', {email, username, password });
}
