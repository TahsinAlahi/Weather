let apiKey = "93c9f3c9b29a90c22d488af49f380544";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
  const response = await fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  if (data.cod == "404") {
    document.querySelector(".weather-container").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    weatherIcon.src = `./images/${data.weather[0].main}.png`;
    document.querySelector(".weather-container").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
