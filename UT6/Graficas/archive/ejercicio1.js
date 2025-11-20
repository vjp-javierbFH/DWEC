fetch("spotify.csv")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then(data => {
        // Procesar el CSV
        const rows = data.split('\n');
        const header = rows[0].split(',');
        const genreIndex = header.indexOf('artist_genres');
        const genreCount = {};

        for (let i = 1; i < rows.length; i++) {
            const cols = rows[i].split(',');
            let genres = cols[genreIndex];
            if (genres && genres !== "N/A") {
                // Quitar comillas y espacios extra
                genres = genres.replace(/"/g, '').trim();
                // Separar por coma y contar cada género individual
                genres.split(',').forEach(genre => {
                    genre = genre.trim();
                    if (genre) {
                        genreCount[genre] = (genreCount[genre] || 0) + 1;
                    }
                });
            }
        }

        // Ordenar géneros por popularidad
        const sortedGenres = Object.entries(genreCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10); // Top 10 géneros

        // Preparar datos para la gráfica
        const labels = sortedGenres.map(item => item[0]);
        const counts = sortedGenres.map(item => item[1]);

        // Crear la gráfica
        createBarChart(labels, counts);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });

function createBarChart(labels, data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Canciones por género',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
