<script>
  let budgets = [
    { id: 1, category: 'Food', amount: 5000, spent: 4200 },
    { id: 2, category: 'Entertainment', amount: 2000, spent: 2400 },
    { id: 3, category: 'Rent', amount: 10000, spent: 10000 }
  ];

  let form = {
    category: '',
    amount: ''
  };

  function addBudget() {
    const newBudget = {
      id: budgets.length + 1,
      category: form.category,
      amount: parseFloat(form.amount),
      spent: 0
    };
    budgets = [newBudget, ...budgets];
    form = { category: '', amount: '' };
  }

  function getStatus(budget) {
    if (budget.spent >= budget.amount) return 'Over Budget';
    if (budget.spent >= 0.8 * budget.amount) return 'Near Limit';
    return 'On Track';
  }

  function getStatusColor(budget) {
    if (budget.spent >= budget.amount) return 'bg-red-100 text-red-700';
    if (budget.spent >= 0.8 * budget.amount) return 'bg-yellow-100 text-yellow-700';
    return 'bg-green-100 text-green-700';
  }

  function updateBudgetAmount(id, value) {
    budgets = budgets.map(b =>
      b.id === id ? { ...b, amount: parseFloat(value) || 0 } : b
    );
  }

  function updateSpentAmount(id, value) {
    budgets = budgets.map(b =>
      b.id === id ? { ...b, spent: parseFloat(value) || 0 } : b
    );
  }

  // Helper functions to calculate remaining and usage
  function getRemaining(budget) {
    return budget.amount - budget.spent;
  }

  function getUsagePercent(budget) {
    if (budget.amount === 0) return 0;
    return Math.min((budget.spent / budget.amount) * 100, 100);
  }
</script>

<style>
  /* Simple fade-in animation for progress bar */
  @keyframes fillBar {
    from { width: 0; }
    to { width: var(--w); }
  }
</style>

<h1 class="text-3xl font-extrabold mb-8 text-gray-800 tracking-wide">Category Budgets</h1>

<div class="bg-white rounded-3xl shadow-lg p-8 mb-12 max-w-3xl mx-auto">
  <h2 class="text-xl font-semibold mb-6 text-gray-700">Set New Budget</h2>
  <form on:submit|preventDefault={addBudget} class="grid sm:grid-cols-2 gap-6">
    <input
      class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      placeholder="Category"
      bind:value={form.category}
      required
    />
    <input
      type="number"
      class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      placeholder="Amount"
      bind:value={form.amount}
      min="0"
      required
    />
    <button
      type="submit"
      class="col-span-full justify-self-start bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:from-indigo-600 hover:to-indigo-800 transition"
    >
      Add Budget
    </button>
  </form>
</div>

<div class="bg-white rounded-3xl shadow-lg p-8 max-w-6xl mx-auto overflow-x-auto">
  <h2 class="text-xl font-semibold mb-6 text-gray-700">Current Budgets</h2>
  <table class="min-w-full text-left text-gray-700">
    <thead>
      <tr class="bg-indigo-100 text-indigo-700 uppercase text-sm font-semibold tracking-wide">
        <th class="px-6 py-3 rounded-tl-3xl">Category</th>
        <th class="px-6 py-3">Budgeted</th>
        <th class="px-6 py-3">Spent</th>
        <th class="px-6 py-3">Remaining</th>
        <th class="px-6 py-3">Usage</th>
        <th class="px-6 py-3 rounded-tr-3xl">Status</th>
      </tr>
    </thead>
    <tbody>
      {#each budgets as b, i}
        <tr class={`border-b ${i % 2 === 0 ? 'bg-indigo-50' : 'bg-white'} hover:bg-indigo-100 transition`}>
          <td class="px-6 py-4 font-semibold">{b.category}</td>

          <!-- Inline editable budgeted -->
          <td class="px-6 py-4">
            <input
              type="number"
              class="w-24 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              bind:value={b.amount}
              min="0"
              on:input={(e) => updateBudgetAmount(b.id, e.target.value)}
            />
          </td>

          <!-- Inline editable spent -->
          <td class="px-6 py-4">
            <input
              type="number"
              class="w-24 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              bind:value={b.spent}
              min="0"
              on:input={(e) => updateSpentAmount(b.id, e.target.value)}
            />
          </td>

          <td class="px-6 py-4">₹{getRemaining(b).toLocaleString()}</td>

          <!-- Progress bar with tooltip -->
          <td class="px-6 py-4 w-48">
            <div
              class="relative h-4 w-full rounded-full bg-indigo-200 overflow-hidden shadow-inner"
              title={`${getUsagePercent(b).toFixed(1)}% used`}
            >
              <div
                class="h-4 bg-indigo-600 rounded-full"
                style="width: {getUsagePercent(b)}%; animation: fillBar 1s ease forwards; --w: {getUsagePercent(b)}%;"
              ></div>
            </div>
          </td>

          <td class="px-6 py-4">
            <span class={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(b)}`}>
              {getStatus(b)}
            </span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
