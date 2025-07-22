<script>
  let desc = '', amt = '', cat = '', type = 'expense', date = '';
  function save() {
    // Call your API to save
    // then go back
    alert('Saved!');
    window.location.href = '/transactions';
  }
</script>

<div class="flex">
  <Sidebar active="/transactions" />
  <main class="flex-1 p-8 bg-gray-50 min-h-screen">
    <h1 class="text-2xl font-bold mb-6">Add Transaction</h1>
    <form class="max-w-md card" on:submit|preventDefault={save}>
      <label>Description<input class="input-field" bind:value={desc} /></label>
      <label>Amount<input class="input-field" type="number" step="0.01" bind:value={amt} /></label>
      <label>Category<input class="input-field" bind:value={cat} /></label>
      <label>Date<input class="input-field" type="date" bind:value={date} /></label>
      <label>Type
        <select class="input-field" bind:value={type}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </label>
      <button class="btn-primary mt-2" type="submit">Save</button>
    </form>
  </main>
</div>
