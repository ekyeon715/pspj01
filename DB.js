function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
<h3>${movie.title}</h3>
<p>${movie.overview}</p>
<span>Rating: ${movie.vote_average}</span>
`;
    card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card;
}

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});