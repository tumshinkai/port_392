const ctx = document.getElementById('barchart');       
const barchart =new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['ปี1 เทอม 1', 'ปี1 เทอม 2', 'ปี2 เทอม 1'],
    datasets: [{
      label: 'เกรด',
      data: [3.14,3.5,3.08],
      backgroundColor: [
        'rgba(255, 99, 132,0.7)',
        'rgba(255, 159, 64,0.7)',
        'rgba(255, 205, 86,0.7)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132,0.7)',
        'rgba(255, 159, 64,0.7)',
        'rgba(255, 205, 86,0.7)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});