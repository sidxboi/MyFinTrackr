<script>
  import Chart from 'chart.js/auto';
  import { onMount } from 'svelte';

  let chartRef1;
  let chartRef2;

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [400, 600, 750, 300, 450, 500]
  };

  const categoryData = {
    labels: ['Food', 'Travel', 'Rent', 'Entertainment', 'Shopping'],
    data: [300, 200, 500, 150, 100]
  };

  onMount(() => {
    const ctx1 = chartRef1.getContext('2d');
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: monthlyData.labels,
        datasets: [{
          label: 'Monthly Expenses',
          data: monthlyData.data,
          backgroundColor: 'rgba(79, 70, 229, 0.85)', // Indigo gradient base color
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#e0e7ff' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const ctx2 = chartRef2.getContext('2d');
    new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: categoryData.labels,
        datasets: [{
          label: 'Category Breakdown',
          data: categoryData.data,
          backgroundColor: [
            'rgba(79, 70, 229, 0.85)',
            'rgba(99, 102, 241, 0.8)',
            'rgba(165, 180, 252, 0.8)',
            'rgba(199, 210, 254, 0.7)',
            'rgba(224, 231, 255, 0.7)'
          ],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#4b5563',
              font: { weight: '600', size: 14 }
            }
          }
        }
      }
    });
  });
</script>

<style>
  canvas {
    height: 320px !important;
    width: 100% !important;
  }
</style>

<section class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14 px-4 max-w-7xl mx-auto">
  <!-- Stat Cards with Gradient Backgrounds -->
  <div class="rounded-2xl p-6 text-center bg-gradient-to-tr from-indigo-600 via-indigo-500 to-indigo-400 shadow-xl hover:shadow-indigo-600 transition-shadow cursor-default text-white">
    <div class="text-sm opacity-90 tracking-wide uppercase">Total Income</div>
    <div class="mt-3 text-4xl font-extrabold drop-shadow-lg">₹10,000</div>
  </div>

  <div class="rounded-2xl p-6 text-center bg-gradient-to-tr from-red-600 via-red-500 to-red-400 shadow-xl hover:shadow-red-600 transition-shadow cursor-default text-white">
    <div class="text-sm opacity-90 tracking-wide uppercase">Total Expenses</div>
    <div class="mt-3 text-4xl font-extrabold drop-shadow-lg">₹2,500</div>
  </div>

  <div class="rounded-2xl p-6 text-center bg-gradient-to-tr from-green-600 via-green-500 to-green-400 shadow-xl hover:shadow-green-600 transition-shadow cursor-default text-white">
    <div class="text-sm opacity-90 tracking-wide uppercase">Balance</div>
    <div class="mt-3 text-4xl font-extrabold drop-shadow-lg">₹7,500</div>
  </div>
</section>

<section class="grid md:grid-cols-2 gap-10 px-4 max-w-7xl mx-auto">
  <!-- Monthly Expenses Card -->
  <div class="rounded-3xl p-8 bg-gradient-to-br from-white/90 via-indigo-50 to-indigo-100 shadow-2xl hover:shadow-indigo-300 transition-shadow">
    <h2 class="text-2xl font-bold text-indigo-700 mb-6 tracking-wide">Monthly Expenses</h2>
    <canvas bind:this={chartRef1} aria-label="Bar chart showing monthly expenses" role="img"></canvas>
  </div>

  <!-- Expenses by Category Card -->
  <div class="rounded-3xl p-8 bg-gradient-to-br from-white/90 via-indigo-50 to-indigo-100 shadow-2xl hover:shadow-indigo-300 transition-shadow">
    <h2 class="text-2xl font-bold text-indigo-700 mb-6 tracking-wide">Expenses by Category</h2>
    <canvas bind:this={chartRef2} aria-label="Pie chart showing expenses by category" role="img"></canvas>
  </div>
</section>
