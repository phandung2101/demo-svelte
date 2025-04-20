import api from './api';

export async function signin(username, password) {
    const res = await api.post('/auth/login', {username, password});
    if (res.status === 200)
        localStorage.setItem('token', res.data.token);
    return res;
}

export function signup(email, username, password) {
    return api.post('/auth/register', {email, username, password});
}
