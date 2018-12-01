class onLoad {
  constructor(long, lat) {
    this.long = long;
    this.lat = lat;
  }
}

class Weather {
  constructor(city, metric, imperial) {
    this.apiKey = "f045561d2752bfdcfcc897bf281be2da";
    this.city = city;
    this.metric = metric;
    this.imperial = imperial;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.city
      },id=524901&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}

// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }

// console.log(x);
