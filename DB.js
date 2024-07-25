// API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjVlNGQ0MGZkZWZhYmRlOTQzYjI1MmI3NDU2YjY4MiIsIm5iZiI6MTcyMTg5MzMyNi4zODUyODksInN1YiI6IjY2YTA5MmQzZTQ1NWI3ZThhZjE4YmRmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dWaEfmbG07M2vgVIdO4cJwa0wBu80H9ffZNzMMPOlss'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));





// 영화 정보 카드리스트 UI
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
<h2>${movie.title}</h2>
<p>${movie.overview}</p>
<span>Rating: ${movie.vote_average}</span>
`;
    card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card;
}

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));





// 영화 검색 UI
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




