<script>
    let expenses = [
        { date: '2025-07-21', category: 'Food', amount: 120 },
        { date: '2025-07-20', category: 'Transport', amount: 40 },
    ];
    let date = "";
    let category = "";
    let amount = "";

    function addExpense() {
        if (date && category && amount) {
            expenses = [
                ...expenses,
                { date, category, amount: +amount }
            ];
            date = "";
            category = "";
            amount = "";
        }
    }
</script>

<style>
    .expenses-section {
        max-width: 550px;
        margin: 38px auto 0 auto;
        background: rgba(255,255,255,0.19);
        border-radius: 1.3rem;
        box-shadow: 0 8px 26px rgba(34,82,160,0.14);
        padding: 2.2rem 2rem;
        backdrop-filter: blur(13px);
        border: 1.5px solid rgba(255,255,255,0.13);
        animation: fadeIn 0.7s;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(32px);}
        to { opacity: 1; transform: none;}
    }
    .expenses-section h1 {
        margin-bottom: 14px;
        background: linear-gradient(90deg, #00c896, #27c8fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2.2rem;
    }
    ul {
        list-style: none;
        margin: 0 0 18px 0;
        padding: 0;
    }
    li {
        margin: 0 0 7px 0;
        padding: 12px 18px;
        border-radius: 0.8rem;
        background: linear-gradient(90deg, #dff6fe 0%, #cee8fa 100%);
        color: #235089;
        box-shadow: 0 2px 6px rgba(60,180,255,0.07);
        font-size: 1.09rem;
    }
    form {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-top: 6px;
    }
    input {
        padding: 8px 12px;
        border-radius: 10px;
        border: 1px solid #99e6fa;
        font-size: 1rem;
        background: rgba(255,255,255,0.77);
        transition: border 0.15s;
    }
    input:focus { border: 1.5px solid #00c896; }
    button {
        background: linear-gradient(90deg, #00c896 0%, #27c8fa 100%);
        color: #fff;
        border: none;
        border-radius: 10px;
        font-size: 1.06rem;
        padding: 8px 20px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 2px 7px rgba(27,200,250,0.10);
        transition: background 0.18s;
    }
    button:hover {
        background: linear-gradient(90deg, #27c8fa 0%, #00c896 100%);
    }
</style>

<div class="expenses-section">
    <h1>Expenses</h1>

    <ul>
        {#each expenses as e}
            <li>{e.date} | {e.category} | ₹{e.amount}</li>
        {/each}
    </ul>

    <h3>Add Expense</h3>
    <form on:submit|preventDefault={addExpense}>
        <input type="date" bind:value={date} required />
        <input type="text" placeholder="Category" bind:value={category} required />
        <input type="number" placeholder="Amount" min="1" bind:value={amount} required />
        <button type="submit">Add</button>
    </form>
</div>
