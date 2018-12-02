//Init Storage
const storage = new Storage();

// Get the stored location data
const weatherLocation = storage.getLocationData();
console.log(storage.getLocationData());

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init new UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//Change the location
document.querySelector("form").addEventListener("submit", e => {
  this.city = document.querySelector(".form-control").value;
  console.log(city);
  e.preventDefault();

  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();
});

// weather.changeLocation("Miami", "FL");

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => ui.errorD(err));
  // console.log(err);
}
