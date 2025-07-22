<script>
  export let active = '';
  const nav = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Transactions', href: '/transactions' },
    { label: 'Budgets', href: '/budgets' },
    { label: 'Analytics', href: '/analytics' }
  ];
</script>
<aside class="bg-blue-900 text-white w-56 flex flex-col">
  <div class="text-2xl font-bold p-6 border-b border-blue-700">FinTrackr</div>
  <nav class="flex-1 py-6 flex flex-col gap-1">
    {#each nav as item}
      <a href={item.href}
        class="px-6 py-3 rounded transition hover:bg-blue-700 {active === item.href ? 'bg-blue-700' : ''}">
        {item.label}
      </a>
    {/each}
  </nav>
</aside>
