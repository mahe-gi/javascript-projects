const Movieform = document.getElementById("Movieform");

const imageUrl = document.getElementById("imageUrl");
const movieName = document.getElementById("movieName");
const year = document.getElementById("year");
const addMovie = document.getElementById("addMovie");

let movieList = [];
Movieform.addEventListener("submit", (e) => {
  e.preventDefault();
  let Moiveobj = {
    imageUrl: imageUrl.value,
    movieName: movieName.value,
    year: year.value,
  };
  movieList.push(Moiveobj);
  displayMovies(movieList);
});

const root = document.getElementById("root");
function displayMovies(movieList) {
  root.textContent = "";

  movieList.forEach((e, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("div");
    img.classList.add("img");
    const MovieImageUrl = document.createElement("img");
    MovieImageUrl.classList.add("MovieImageUrl");
    MovieImageUrl.src = e.imageUrl;
    const text = document.createElement("div");
    text.classList.add("text");
    const p = document.createElement("p");
    p.classList.add("DisplaymovieName");
    p.textContent = e.movieName;
    const p1 = document.createElement("p");
    p1.classList.add("Displaymovieyear");
    p1.textContent = e.year;
    root.appendChild(card);
    card.append(img, text);
    img.appendChild(MovieImageUrl);
    text.append(p, p1);
  });
}
