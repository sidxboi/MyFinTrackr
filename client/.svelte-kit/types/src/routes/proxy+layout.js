// @ts-nocheck
// Redirect users to /login if not authenticated when visiting protected routes
import { user } from '$lib/stores';

/** @param {Parameters<import('@sveltejs/kit').Load>[0]} event */
export async function load({ url }) {
    const protectedRoutes = ['/dashboard', '/expenses', '/budget'];
    // For this in-memory demo, user store won't work here—so a real implementation uses cookies/sessions!
    // For now, just for demonstration, we'll allow all, but you can add logic to redirect
    return {};
}
