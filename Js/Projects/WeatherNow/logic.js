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
      document.getElementById("weatherResult").classList.remove("hidden");
      document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    })
    .catch(error => {
      alert(error.message);
    });
}