const apiKey = "74cc3b1eda27b7f8fb1c67bc739c750b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon")
const weather = document.querySelector(".weather")
const cityName = document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

let map;

function checkWeather(city) {
    fetch(apiUrl + city + `&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.coord.lat)
            console.log(data.coord.lon)

            cityName.innerHTML = data.name;
            temp.innerHTML = `${Math.round(data.main.temp)}°C`
            humidity.innerHTML = `${data.main.humidity}%`
            wind.innerHTML = `${data.wind.speed} km/h`

            if (data.weather[0].main === "Clouds") {
                weatherImage.src = "images/clouds.png"
            } else if (data.weather[0].main === "Clear") {
                weatherImage.src = "images/clear.png"
            } else if (data.weather[0].main === "Drizzle") {
                weatherImage.src = "images/drizzle.png"
            } else if (data.weather[0].main === "Mist") {
                weatherImage.src = "images/mist.png"
            } else if (data.weather[0].main === "Rain") {
                weatherImage.src = "images/rain.png"
            } else if (data.weather[0].main === "Snow") {
                weatherImage.src = "images/snow.png"
            } else if (data.weather[0].main === "Wind") {
                weatherImage.src = "images/wind.png"
            }

            weather.style.display = "block"


            if (map) {
                map.remove();
            }
            map = L.map('map').setView([26.6717, 83.6680], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);

            L.marker([data.coord.lat, data.coord.lon]).addTo(map)
                .bindPopup(`This is ${data.name}`)
                .openPopup();



        }).catch((err) => {
            // window.location.reload()
            console.log(err);
            weather.style.display = "none"
            searchBox.value = "";
            searchBox.placeholder = "enter city name...";
            alert("Please enter a valid city name.");
        })
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
    searchBox.value = "";

})


searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value)
        searchBox.value = "";
    }
});















