// http://www.omdbapi.com/?i=tt3896198&apikey=38369f71
// key: 38369f71

const movieCardEl = document.querySelector(".movie__cards");
const movieCard = document.getElementById("card");
const Input = document.body.querySelector(".search__movie");
const searchResults = document.querySelector(".search");
let title;

function searchInput(event) {
  title = document.body.querySelector(".search__movie").value;
  if (event.which === 13) {
    searchBtn();
  }
}

function searchBtn() {
  movieCard.classList += " show__loading";
  movieCard.classList.remove("show__movies");

  const searchHTML = `<h2 class="search">Search Results for :<span class="color"> ${title}</span></h2>`;
  searchResults.innerHTML = searchHTML;
  movieSearch(title);

  setTimeout(() => {
    movieCard.classList += " show__movies";
    movieCard.classList.remove("show__loading");
  }, 2000);
}

async function movieSearch(title) {
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=38369f71&s=${title}`
  );
  moviesData = await movies.json();
  const moviesFilm = moviesData.Search.slice(0, 8);
  movieCardEl.innerHTML = moviesFilm.map((movie) => moviesHTML(movie)).join("");
}

function moviesHTML(movie) {
  return `<div class="movie__card">
  <figure class="poster__wrapper">
    <img
    class="poster__img"
    src="${movie.Poster}"
    alt=""
    />
    </figure>
<div class="movie__description">
<h3 class="movie__description--title">
${movie.Title}
</h3>
<h4 class="movie__description--year">Year Released: ${movie.Year}</h4>
</div>
</div>`;
}
