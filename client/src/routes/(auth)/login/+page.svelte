<script>
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let error = '';
    let loading = false;

    async function handleLogin() {
        loading = true;
        error = "";
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            loading = false;
            if (!res.ok) {
                error = data?.error || 'Login failed.';
                return;
            }
            goto("/dashboard");
        } catch (e) {
            loading = false;
            error = 'Something went wrong. Please try again later.';
        }
    }
</script>


<style>
    .card {
        max-width: 400px;
        margin: 48px auto 0 auto;
        padding: 2rem 2.5rem;
        background: rgba(255,255,255,0.22);
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px rgba(34,34,34,0.18);
        backdrop-filter: blur(22px);
        border: 1.5px solid rgba(255,255,255,0.14);
        animation: fadeIn 0.6s;
    }
    @keyframes fadeIn {
        from {transform: translateY(32px); opacity:0;}
        to {transform: none; opacity:1;}
    }
    .card h2 {
        margin-bottom: 18px;
        font-size: 2rem;
        font-weight: 700;
        color: #0277bd;
    }
    input {
        width: 100%;
        padding: 10px 14px;
        font-size: 1rem;
        margin-bottom: 16px;
        border-radius: 12px;
        border: 1.5px solid #c9eccb;
        background: rgba(245,245,245,0.13);
        transition: border 0.15s;
        outline: none;
    }
    input:focus {
        border: 1.5px solid #00c6fb;
    }
    button {
        width: 100%;
        background: linear-gradient(90deg, #00c6fb 0%, #005bea 100%);
        border: none;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        font-size: 1.15rem;
        padding: 10px 0;
        cursor: pointer;
        transition: background 0.16s;
        margin-bottom: 10px;
        box-shadow: 0 2px 8px rgba(0, 198, 251, 0.15);
    }
    button:hover {
        background: linear-gradient(90deg, #005bea 0%, #00c6fb 100%);
        color: #e3f6fc;
    }
    .error {
        color: #ff1744;
        margin-top: 4px;
        text-align: center;
        font-size: 1rem;
    }
</style>

<div class="card">
    <h2>Login</h2>
    <form on:submit|preventDefault={handleLogin}>
        <input type="email" placeholder="Email" bind:value={email} required />
        <input type="password" placeholder="Password" bind:value={password} required />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        {#if error}
            <div class="error">{error}</div>
        {/if}
    </form>
</div>

