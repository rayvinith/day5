const initialMovies = [
    { name: "Inception", releaseDate: "2010-07-16", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.8 },
    { name: "The Dark Knight", releaseDate: "2008-07-18", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 9.0 },
    { name: "Interstellar", releaseDate: "2014-11-07", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.6 },
    { name: "Parasite", releaseDate: "2019-05-30", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.6 },
    { name: "Avengers: Endgame", releaseDate: "2019-04-26", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.4 },
    { name: "The Matrix", releaseDate: "1999-03-31", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.7 },
    { name: "Pulp Fiction", releaseDate: "1994-10-14", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.9 },
    { name: "Forrest Gump", releaseDate: "1994-07-06", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.8 },
    { name: "The Shawshank Redemption", releaseDate: "1994-09-22", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 9.3 }
  ];



document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const releaseDate = document.getElementById('releaseDate').value;
    const posterURL = document.getElementById('posterURL').value;
    const imdbRating = parseFloat(document.getElementById('imdbRating').value);
  
    const newMovie = { name, releaseDate, posterURL, imdbRating };
  
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(newMovie);
  
    localStorage.setItem('movies', JSON.stringify(movies));
  
    alert('Movie added successfully!');
    
    document.getElementById('movieForm').reset();
  
    renderMovies();
  });
  

  
  if (!localStorage.getItem('movies')) {
    localStorage.setItem('movies', JSON.stringify(initialMovies));
  }
  
  function renderMovies() {
    const moviesList = document.getElementById('moviesList');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
  
    // moviesList.innerHTML = '';
  
    movies.forEach((movie, index) => {
      const movieDiv = document.createElement('div');
      movieDiv.className = 'movie';
  
      const movieDetails = `
      
<div class="card">
      <img src="${movie.posterURL}"  class="card-img-top" alt="${movie.name} poster" >
<div class="card-body">
      <h5 class="card-title">${movie.name}</h5>
      <p class="card-text">Release Date: ${movie.releaseDate}</p>
</div>
    <div class="card-footer">
      <small class="text-muted">IMDb Rating: ${movie.imdbRating}</small>
    </div>
  </div>
  
      `;
  
      movieDiv.innerHTML = movieDetails;
      moviesList.appendChild(movieDiv);
    });
  }
  

  // Adding initial movies
 

  // Initial render of movies
  renderMovies();
  
