import { json } from '@sveltejs/kit';

export async function POST({ cookies }) {
    cookies.set('fintrackr_user', '', {
        path: '/',
        maxAge: 0
    });
    return json({ success: true });
}
