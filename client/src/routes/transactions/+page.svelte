<script>
  let transactions = [
    { id: 1, title: 'Grocery', type: 'Expense', amount: 1200, category: 'Food', date: '2025-07-18' },
    { id: 2, title: 'Salary', type: 'Income', amount: 15000, category: 'Salary', date: '2025-07-15' },
    { id: 3, title: 'Netflix', type: 'Expense', amount: 499, category: 'Entertainment', date: '2025-07-10' }
  ];

  let form = {
    title: '',
    type: 'Expense',
    amount: '',
    category: '',
    date: ''
  };

  function addTransaction() {
    const newTxn = {
      ...form,
      id: transactions.length + 1,
      amount: parseFloat(form.amount)
    };
    transactions = [newTxn, ...transactions];
    form = { title: '', type: 'Expense', amount: '', category: '', date: '' };
  }

  function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
  }
</script>

<h1 class="text-2xl font-bold mb-6">Manage Transactions</h1>

<div class="card mb-10">
  <h2 class="text-lg font-semibold mb-4">Add Transaction</h2>
  <form on:submit|preventDefault={addTransaction} class="grid md:grid-cols-2 gap-4">
    <input class="input-field" placeholder="Title" bind:value={form.title} required />
    <select class="input-field" bind:value={form.type}>
      <option>Expense</option>
      <option>Income</option>
    </select>
    <input class="input-field" type="number" placeholder="Amount" bind:value={form.amount} required />
    <input class="input-field" placeholder="Category" bind:value={form.category} required />
    <input class="input-field" type="date" bind:value={form.date} required />
    <button class="btn-primary col-span-full w-fit" type="submit">Add Transaction</button>
  </form>
</div>

<div class="card overflow-x-auto">
  <h2 class="text-lg font-semibold mb-4">Transaction History</h2>
  <table class="min-w-full text-sm text-left border">
    <thead class="bg-gray-100 border-b text-gray-600 uppercase text-xs">
      <tr>
        <th class="px-4 py-2">Title</th>
        <th class="px-4 py-2">Type</th>
        <th class="px-4 py-2">Amount</th>
        <th class="px-4 py-2">Category</th>
        <th class="px-4 py-2">Date</th>
        <th class="px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {#each transactions as txn}
        <tr class="border-b hover:bg-gray-50">
          <td class="px-4 py-2">{txn.title}</td>
          <td class="px-4 py-2">{txn.type}</td>
          <td class="px-4 py-2">₹{txn.amount}</td>
          <td class="px-4 py-2">{txn.category}</td>
          <td class="px-4 py-2">{txn.date}</td>
          <td class="px-4 py-2">
            <button class="text-red-500 hover:underline text-xs" on:click={() => deleteTransaction(txn.id)}>Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
