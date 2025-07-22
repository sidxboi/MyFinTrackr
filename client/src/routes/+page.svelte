<script>
  import { goto } from '$app/navigation';
</script>
<div class="min-h-screen flex flex-col items-center justify-center">
  <h1 class="text-4xl font-bold mb-6">FinTrackr</h1>
  <button class="bg-blue-600 text-white px-4 py-2 rounded" on:click={() => goto('/login')}>
    Login
  </button>
</div>
