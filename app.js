// Init weather object
const weather = new Weather("Sydney");

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Init new UI
const ui = new UI();

// weather.changeLocation("Miami", "FL");

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
