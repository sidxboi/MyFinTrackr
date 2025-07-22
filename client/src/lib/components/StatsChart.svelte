<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  export let labels = []; export let values = [];
  let canvas;
  onMount(() => {
    new Chart(canvas, {
      type: 'line',
      data: { labels, datasets: [{ label: 'Trend', data: values, borderColor: '#3b82f6', fill: false }] },
      options: { responsive: true }
    });
  });
</script>
<canvas bind:this={canvas} class="w-full h-40"></canvas>
