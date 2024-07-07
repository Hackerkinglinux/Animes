<script>
    function search() {
        var input = document.getElementById("searchInput").value.toLowerCase();
        var resultsContainer = document.getElementById("results");
        var resultsHTML = "";

        // Ejemplo de datos de animes (puedes ajustar según tus necesidades)
        var animes = [
            { title: "One Piece", description: "La legendaria aventura de Monkey D. Luffy y su tripulación." },
            { title: "Kimi no Nawa", description: "Una historia de amor entre dos personas conectadas por el destino." },
            { title: "Jujutsu Kaisen", description: "Estudiantes que luchan contra maldiciones en una academia de hechicería." },
            { title: "Suzume", description: "Una chica con el poder de comunicarse con los pájaros." }
            // Agrega más datos de animes según sea necesario
        ];

        // Filtrar resultados
        var filteredAnimes = animes.filter(function(anime) {
            return anime.title.toLowerCase().includes(input) || anime.description.toLowerCase().includes(input);
        });

        // Construir HTML de resultados
        if (filteredAnimes.length > 0) {
            filteredAnimes.forEach(function(anime) {
                resultsHTML += `<div class="result">
                                    <h3>${anime.title}</h3>
                                    <p>${anime.description}</p>
                                </div>`;
            });
        } else {
            resultsHTML = "<p>No se encontraron resultados.</p>";
        }

        // Mostrar resultados en el contenedor
        resultsContainer.innerHTML = resultsHTML;
    }
</script>
