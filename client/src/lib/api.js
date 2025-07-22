const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function api(endpoint, method = 'GET', data = null, token = '') {
  const res = await fetch(`${BASE}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(data && { body: JSON.stringify(data) })
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || 'API Error');
  return json;
}
