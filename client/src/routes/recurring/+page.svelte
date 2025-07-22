<script>
  import { format, addDays, addMonths } from 'date-fns';

  let recurringItems = [
    {
      id: 1,
      title: 'Netflix Subscription',
      amount: 499,
      category: 'Entertainment',
      frequency: 'Monthly',
      nextDue: '2025-08-10'
    },
    {
      id: 2,
      title: 'Gym Membership',
      amount: 800,
      category: 'Health',
      frequency: 'Monthly',
      nextDue: '2025-08-01'
    }
  ];

  let form = {
    title: '',
    amount: '',
    category: '',
    frequency: 'Monthly',
    startDate: ''
  };

  function addRecurring() {
    const baseDate = new Date(form.startDate);
    const nextDue =
      form.frequency === 'Weekly'
        ? format(addDays(baseDate, 7), 'yyyy-MM-dd')
        : format(addMonths(baseDate, 1), 'yyyy-MM-dd');

    const newItem = {
      id: recurringItems.length + 1,
      title: form.title,
      amount: parseFloat(form.amount),
      category: form.category,
      frequency: form.frequency,
      nextDue
    };

    recurringItems = [newItem, ...recurringItems];

    form = {
      title: '',
      amount: '',
      category: '',
      frequency: 'Monthly',
      startDate: ''
    };
  }
</script>

<h1 class="text-2xl font-bold mb-6">Recurring Bills</h1>

<div class="card mb-10">
  <h2 class="text-lg font-semibold mb-4">Add Recurring Bill</h2>
  <form on:submit|preventDefault={addRecurring} class="grid md:grid-cols-2 gap-4">
    <input class="input-field" placeholder="Title" bind:value={form.title} required />
    <input class="input-field" type="number" placeholder="Amount" bind:value={form.amount} required />
    <input class="input-field" placeholder="Category" bind:value={form.category} required />
    <select class="input-field" bind:value={form.frequency}>
      <option>Weekly</option>
      <option>Monthly</option>
    </select>
    <input class="input-field" type="date" bind:value={form.startDate} required />
    <button class="btn-primary col-span-full w-fit" type="submit">Add Recurring</button>
  </form>
</div>

<div class="card overflow-x-auto">
  <h2 class="text-lg font-semibold mb-4">Upcoming Recurring Bills</h2>
  <table class="min-w-full text-sm text-left border">
    <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
      <tr>
        <th class="px-4 py-2">Title</th>
        <th class="px-4 py-2">Amount</th>
        <th class="px-4 py-2">Category</th>
        <th class="px-4 py-2">Frequency</th>
        <th class="px-4 py-2">Next Due</th>
      </tr>
    </thead>
    <tbody>
      {#each recurringItems as item}
        <tr class="border-b hover:bg-gray-50">
          <td class="px-4 py-2">{item.title}</td>
          <td class="px-4 py-2">₹{item.amount}</td>
          <td class="px-4 py-2">{item.category}</td>
          <td class="px-4 py-2">{item.frequency}</td>
          <td class="px-4 py-2">{item.nextDue}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
