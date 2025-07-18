const card = document.getElementById("card");
const refresh = document.getElementById("refresh");

function getQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      displayToDom(data);
    });
}

refresh.addEventListener("click", () => {
  card.textContent = "";
  getQuote();
});

function displayToDom(data) {
  const p = document.createElement("p");
  p.classList.add("quote");
  const p1 = document.createElement("p");
  p1.classList.add("author");
  p.textContent = data.quote;
  p1.textContent = data.author;
  card.append(p, p1);
}
