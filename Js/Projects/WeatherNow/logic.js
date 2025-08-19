const apiKey = "3045dd712ffe6e702e3245525ac7fa38";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

function getWeather() {
  const city = cityInput.value;
  if (city === "") {    
    alert("Please enter a city name!");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("weatherResult").style.display = "block";
      document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temperature").textContent = `${data.main.temp}°C`;
      document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure}`;
      document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed}`;
      document.getElementById("windDeg").textContent = `Wind Deg: ${data.wind.deg}`;
      document.getElementById("windGust").textContent = `Wind Gust: ${data.wind.gust}`;
    })
    .catch(error => {
      alert(error.message);
    });
}