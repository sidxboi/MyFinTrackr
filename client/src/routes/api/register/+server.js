import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const body = await request.json();

	const response = await fetch('http://localhost:5000/api/auth/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const data = await response.json();

	if (!response.ok) {
		return json({ error: data.error || 'Registration failed' }, { status: response.status });
	}

	return json({ success: true });
}
