const root = document.getElementById("root");
const card = document.getElementById("card");
const inpDiv = document.getElementById("inpDiv");
const city = document.getElementById("city");
const getWeather = document.getElementById("getWeather");
const display = document.getElementById("display");

getWeather.addEventListener("click", function () {
  fetch(`http://api.weatherapi.com/v1/current.json?key=0692d8a9a25f433baae113547251807&q=${city.value}&aqi=no
`)
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((e) => console.error(e));
});

function displayData(data) {
  const p = document.createElement("p");
  p.textContent = data.current.temp_c;
  const p1 = document.createElement("img");
  p1.src = data.current.condition.icon;
  console.log(data.current.condition.text);
  console.log(data.location.name);
  console.log(data.current.humidity);
  console.log(data.current.temp_f);
  display.append(p, p1);
}
