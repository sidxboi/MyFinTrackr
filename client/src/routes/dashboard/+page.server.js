export async function load({ cookies, fetch }) {
    const cookieHeader = cookies.get('fintrackr_user');

    const res = await fetch('http://localhost:5000/api/transactions', {
        headers: {
            cookie: `fintrackr_user=${cookieHeader}`
        }
    });

    if (!res.ok) {
        return {
            status: res.status,
            error: {
                message: 'Failed to fetch transactions'
            }
        };
    }

    const data = await res.json();
    return { data };
}
