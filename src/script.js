function performSearch(response) {
  let location = response.data.name;
  let fahrenheitTemp = Math.round(response.data.main.temp);
  let cityName1 = document.querySelector(".location");
  let cityName2 = document.querySelector("#location");
  let currentTemp = document.querySelector(".current-temp");
  cityName1.innerHTML = location;
  cityName2.innerHTML = location;
  currentTemp.innerHTML = `${fahrenheitTemp}°F`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "a62d66a2ac8a8c7c46404f7b23e7eb9c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  if (searchInput.value) {
    axios.get(apiUrl).then(performSearch);
  } else {
    alert("Please enter a city name.");
  }
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".current-temp");
}

function convertToCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".current-temp");
}

function showCurrentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "a62d66a2ac8a8c7c46404f7b23e7eb9c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(performSearch);
}

function runGeoLocation() {
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let button = document.querySelector("#button");
button.addEventListener("click", runGeoLocation);

let currentTime = new Date();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let date = currentTime.getDate();
let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let min = currentTime.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let year = currentTime.getFullYear();
let day = days[currentTime.getDay()];
let month = months[currentTime.getMonth()];

let timeSlot = document.querySelector("#current-time");
timeSlot.innerHTML = `${day}, ${month} ${date}, ${year} ${hour}:${min}`;

let searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", searchCity);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);
