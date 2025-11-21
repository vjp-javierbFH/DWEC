function crearLineaChart(labels, data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Salario 1',
                data: data,
                borderColor: 'rgba(0, 255, 255, 1)',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Salario del trabajador'
                }
            }
        }
    });
}

// Datos de ejemplo
const labels = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];
const data = [];
// Cada año gana un 3% más que el año anterior
for (let i = 0; i < labels.length; i++) {
    data.push(Math.round(30000 * Math.pow(1.03, i)));
}

// Llamada para mostrar la gráfica
crearLineaChart(labels, data);