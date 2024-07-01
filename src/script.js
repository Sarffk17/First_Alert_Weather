function updateWeatherData(response) {
    console.log(response.data);
}

function searchCity(city) {
    let apiKey = "4tao58d1a814447011bb9de5e3623b3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateWeatherData);
}

function searchNewCityData(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#searchFormInput");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
} 

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", searchNewCityData);