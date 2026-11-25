const pieCanvas = document.getElementById("pieChart");
const barCanvas = document.getElementById("barChart");

new Chart(pieCanvas, {
  type: "pie",
  data: {
    labels: dashboardData.categorias,
    datasets: [{ data: dashboardData.categoriasValores }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

new Chart(barCanvas, {
  type: "bar",
  data: {
    labels: dashboardData.situacoes,
    datasets: [{ label: "Produtos", data: dashboardData.situacoesValores }]
  },
  options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
});