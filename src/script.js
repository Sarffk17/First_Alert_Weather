function updateWeatherData(response) {
    let tempElement = document.querySelector("#temp");
    let temp = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let weatherDescriptionElement = document.querySelector("#weatherDescription");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#windSpeed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
    
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    weatherDescriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}m/h`;
    tempElement.innerHTML = Math.round(temp);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class=".weather-app-current-temp-icon" />`;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
  }

function searchCity(city) {
    let apiKey = "4tao58d1a814447011bb9de5e3623b3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateWeatherData);
}

function searchNewCityData(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#searchFormInput");

    searchCity(searchInput.value);
} 

function searchForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="weather-app-forecast-weekDays">
        <div class="weekDay">${day}</div>
          <div class="weekDayIcon">☀️</div>
          <div class="weekDayTemps">
          <div class="weekDayTemp">
            <strong>77°</strong> 
          </div>
          <div class="weekDayTemp">89°</div>
        </div>
      </div>
      `;
    });

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", searchNewCityData);

searchCity("Orlando");
searchForecast();


