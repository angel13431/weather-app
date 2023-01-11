//Date & Time
function dateAndTime(time) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[time.getDay()];
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let now = `${day} ${hour}:${minute}`;

  let date = document.querySelector("#date");
  date.innerHTML = now;
}
let rightNow = new Date();
dateAndTime(rightNow);

//Search Engine
function cptlFrstWrd(word) {
  let firstLetter = word.charAt(0).toUpperCase();
  let remainingLetters = word.substring(1);
  let capitalWord = firstLetter + remainingLetters;
  return capitalWord;
}
function showTemp(response) {
  console.log(response);
  let resTemp = Math.round(response.data.main.temp);
  let todayTempMin = Math.round(response.data.main.temp_min);
  let todayTempMax = Math.round(response.data.main.temp_max);
  let todayElement = document.querySelector("#today");
  let todayMin = document.querySelector("#today-min");
  let todayMax = document.querySelector("#today-max");

  todayMin.innerHTML = todayTempMin;
  todayMax.innerHTML = todayTempMax;
  todayElement.innerHTML = resTemp;
}

function search(event) {
  event.preventDefault();

  let city = document.querySelector(".search-city");
  let cityTitle = cptlFrstWrd(city.value);

  let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityTitle}&appid=${apiKey}&units=metric`;

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
