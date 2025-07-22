import { writable } from 'svelte/store';

export const user = writable(null);

// Simulate local user database (IN-MEMORY!)
export let users = [];

export function register(email, password) {
    if (users.find(u => u.email === email)) {
        throw new Error('User already exists');
    }
    users.push({ email, password });
}

export function login(email, password) {
    const u = users.find(u => u.email === email && u.password === password);
    if (u) {
        user.set({ email });
        return true;
    } else {
        throw new Error('Invalid email or password');
    }
}

// For testing/demo: Log out
export function logout() {
    user.set(null);
}
