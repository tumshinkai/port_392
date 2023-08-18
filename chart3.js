const ctx3 = document.getElementById('line');        
const line =new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['รร.บ้านสันกำแพง', 'รร.สันกำแพง', 'มหาวิทยาลัยแม่โจ้'],
    datasets: [{
      label: 'ประวัติการศึกษา',
      data: [20,40,50],
      borderColor: 'rgb(80, 192, 192)',
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