document.getElementById('updateAnimeBtn').addEventListener('click', function() {
    fetch('/update-anime', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              alert('Animes actualizados correctamente');
              loadAnimeList();
          }
      });
});

function loadAnimeList() {
    fetch('/get-anime')
        .then(response => response.json())
        .then(data => {
            const animeList = document.getElementById('animeList');
            animeList.innerHTML = '';
            data.forEach(anime => {
                const div = document.createElement('div');
                div.textContent = `${anime.name}: ${anime.link}`;
                animeList.appendChild(div);
            });
        });
}

window.onload = loadAnimeList;
