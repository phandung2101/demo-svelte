import api from './api';

export function getUserGroups() {
    return api.get('/groups');
}

