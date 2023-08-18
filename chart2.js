const ctx2 = document.getElementById('doughnut');        
const doughnut =new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['java', 'css', 'html'],
    datasets: [{
      label: 'ความถนัดในภาษา',
      data: [20,40,45],
      backgroundColor: [
        'rgb(300, 112, 119,0.7)',
        'rgb(400, 146, 62,0.7)',
        'rgb(95, 146, 62,0.7)',
      ],
      backgroundColor: [
        'rgb(300, 112, 119,0.7)',
        'rgb(400, 146, 62,0.7)',
        'rgb(95, 146, 62,0.7)',
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