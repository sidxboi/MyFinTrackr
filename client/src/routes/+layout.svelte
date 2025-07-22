<script>
    import { user, logout } from '$lib/stores';
    import { goto } from '$app/navigation';
    import '../app.css';

    $: currentUser = $user;

    function doLogout() {
        logout();
        goto('/login');
    }
</script>

<nav class="max-w-7xl mx-auto mt-4 px-4 py-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm">
    <div class="flex items-center space-x-6">
        <a href="/dashboard" class="text-gray-700 hover:text-indigo-600 font-medium">Dashboard</a>
        <a href="/expenses" class="text-gray-700 hover:text-indigo-600 font-medium">Expenses</a>
        <a href="/budget" class="text-gray-700 hover:text-indigo-600 font-medium">Budget</a>
    </div>

    {#if currentUser}
        <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-500">{currentUser.email}</span>
            <button
                class="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
                on:click={doLogout}>
                Logout
            </button>
        </div>
    {:else}
        <div class="flex items-center space-x-4">
            <a href="/login" class="text-indigo-600 font-medium hover:underline">Login</a>
            <a href="/register" class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm hover:bg-indigo-200 transition">Register</a>
        </div>
    {/if}
</nav>

<main class="max-w-5xl mx-auto px-4 py-8">
    <slot />
</main>
