import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const body = await request.json();

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
        return json({ error: data.error || 'Login failed' }, { status: response.status });
    }

    // Set session cookie (optional — server should ideally handle it)
    cookies.set('fintrackr_user', data.email, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return json({ success: true, email: data.email });
}
