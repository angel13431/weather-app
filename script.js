// //Date & Time
// function dateAndTime(time) {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day = days[time.getDay()];
//   let hour = time.getHours();
//   let minute = time.getMinutes();
//   if (minute < 10) {
//     minute = `0${minute}`;
//   }
//   let now = `${day} ${hour}:${minute}`;

//   let date = document.querySelector("#date");
//   date.innerHTML = now;
// }
// let rightNow = new Date();
// dateAndTime(rightNow);

//Search Engine
function cptlFrstWrd(word) {
  let firstLetter = word.charAt(0).toUpperCase();
  let remainingLetters = word.substring(1);
  let capitalWord = firstLetter + remainingLetters;
  return capitalWord;
}
function showTemp(response) {
  console.log(response);
  let resTemp = Math.round(response.data.temperature.current);
  let icon = response.data.condition.icon_url;
  let con = response.data.condition.description;
  let wind = response.data.wind.speed;

  let todayElement = document.querySelector("#today");
  let conElement = document.querySelector("#cond");
  let iconElement = document.querySelector("#icon");
  let windElement = document.querySelector("#wind");

  todayElement.innerHTML = resTemp;
  conElement.innerHTML = con;
  iconElement.src = icon;
  windElement.innerHTML = wind;
}

function search(event) {
  event.preventDefault();

  let city = document.querySelector(".search-city");
  let cityTitle = cptlFrstWrd(city.value);

  let apiKey = "t59d1foebd7d6a037ffd3299548b5a20";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityTitle}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);

  let currCity = document.querySelector("#currCity");

  currCity.innerHTML = cityTitle;
  city.value = null;
}

let form = document.querySelector(".form-js");
form.addEventListener("submit", search);

//Celsius / Fahrenheit

function convertToF(event, temp) {
  if (unit === "celsius") {
    let todayElement = document.querySelector("#today");
    let today = todayElement.innerHTML;
    let fahrenheit = Math.round(today * 1.8 + 32);
    todayElement.innerHTML = fahrenheit;
    unit = "fahrenheit";
  }
}

function convertToC(event, temp) {
  if (unit === "fahrenheit") {
    let todayElement = document.querySelector("#today");
    let today = todayElement.innerHTML;
    let celsius = Math.round((today - 32) * (5 / 9));
    todayElement.innerHTML = celsius;
    unit = "celsius";
  }
}
let unit = "celsius";
let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");

celsius.addEventListener("click", convertToC);
fahrenheit.addEventListener("click", convertToF);

// default

let city = "lisbon";

function defaultCity(city) {
  let apiKey = "t59d1foebd7d6a037ffd3299548b5a20";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);

  let currCity = document.querySelector("#currCity");

  currCity.innerHTML = cptlFrstWrd(city);
}
defaultCity(city);
