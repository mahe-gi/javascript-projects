const Movieform = document.getElementById("Movieform");

const imageUrl = document.getElementById("imageUrl");
const movieName = document.getElementById("movieName");
const year = document.getElementById("year");
const addMovie = document.getElementById("addMovie");
const errorBox = document.getElementById("error");

let movieList = [];
Movieform.addEventListener("submit", (e) => {
  e.preventDefault();
  errorBox.textContent = "";

  const imagePattern = /\.(jpeg|jpg|png|gif|webp)(\?.*)?$/i;
  const currentYear = new Date().getFullYear();

  if (!imagePattern.test(imageUrl.value.trim())) {
    errorBox.textContent =
      " This might not be a valid image URL, please wait ..";
    errorBox.style.fontSize = "13px";
  }

  if (movieName.value.trim().length < 2) {
    errorBox.textContent = " Movie name should be at least 2 characters long.";
    return;
  }

  if (isNaN(year.value) || +year.value < 2021 || +year.value > currentYear) {
    errorBox.textContent = ` Year must be between 2021 and ${currentYear}.`;

    return;
  }

  let movieObj = {
    imageUrl: imageUrl.value,
    movieName: movieName.value,
    year: year.value,
  };

  movieList.push(movieObj);
  displayMovies(movieList);
  // Movieform.reset();
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

document.getElementById("selectYear").addEventListener("change", function () {
  const cat = document.getElementById("selectYear");
  let movieLists = movieList.filter((ele, ind) => {
    console.log(ele);
    return ele.year == cat.value;
  });
  console.log(movieLists);
  displayMovies(movieLists);
});
