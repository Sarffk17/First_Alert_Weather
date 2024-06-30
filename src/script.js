function searchNewCityData(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#searchFormInput");
    console.log(searchInput.value);
} 

let searchFormElement = document.searchFormElement("#searchForm");
searchFormElement.addEventListen("submit", searchNewCityData);