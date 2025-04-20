// src/routes/+page.js
import {redirect} from '@sveltejs/kit';

export function load() {
    if (localStorage.getItem('token') != null)
        throw redirect(302, '/dashboard');
    else
        throw redirect(302, '/sign-in');

}
