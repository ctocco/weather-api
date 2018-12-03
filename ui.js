class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.current = document.getElementById("w-current");
    this.humidity = document.getElementById("w-humidity");
    this.wind = document.getElementById("w-wind");
    this.uv = document.getElementById("w-uv");
    this.cloudiness = document.getElementById("w-cloudiness");
    this.container = document.querySelector(".container");
    this.row = document.querySelector(".row");
    this.dateUI = document.querySelector(".w-date");
    this.timeUI = document.querySelector(".c-time");
    this.img = document.querySelector(".body");
    this.today = new Date().toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    this.time = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });

    // this.img = document.querySelector(".body");
  }
  paint(weather, uvIndex) {
    console.log(weather);
    console.log(uvIndex);
    this.imgValue = `${weather.weather[0].main}`;
    // console.log(this.imgValue);
    function testNum(img) {
      if (img == "Clouds") {
        return "img/clouds.jpg";
      }
      if (img == "Clear") {
        return "img/sun.jpg";
      }
      if (img == "Drizzle" || img == "Rain") {
        return "img/rain.jpg";
      }
      if (img == "Thunderstorms") {
        return "img/thunderstorm.jpg";
      }
      if (img == "Snow") {
        return "img/snow.jpg";
      }
      if (img == "Fog" || img == "Mist") {
        return "img/fog.jpg";
      } else {
        return "img/sun.jpg";
      }
    }
    this.pic = testNum(this.imgValue);
    this.img.style.backgroundImage = `url(${this.pic})`;
    this.uv.innerHTML = `<strong><i class="fas fa-sun"></i> Visibility:</strong> ${
      weather.visibility
    }`;

    this.location.textContent = `
    ${weather.name}, ${weather.sys.country}`;
    this.timeUI.innerHTML = `<i class="fas fa-clock"></i> ${this.time}`;
    this.dateUI.textContent = `${this.today}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.innerHTML = `<i class="fas fa-temperature-high"></i> ${Math.round(
      weather.main.temp_max
    )}° / <i class="fas fa-temperature-low"></i> ${Math.round(
      weather.main.temp_min
    )}°C `;
    this.current.innerHTML = `<strong>Current Temp:</strong> ${Math.round(
      weather.main.temp
    )}°C</li>`;
    this.humidity.innerHTML = `<strong><i class="fas fa-tint"></i> Humidity:</strong> ${
      weather.main.humidity
    }%`;
    this.cloudiness.innerHTML = `<strong><i class="fas fa-cloud"></i> Cloudiness:</strong> ${
      weather.clouds.all
    }%`;
    this.wind.innerHTML = `<strong><i class="fas fa-wind"></i> Wind:</strong> NW ${Math.round(
      weather.wind.speed
    )}km/h</li>`;
  }
  errorD(message) {
    const div = document.createElement("div");

    div.className = `alert alert-dismissible alert-warning alert-top`;
    div.innerHTML = `<button type="button" class="close" data-dismiss="alert">&times;</button>
    <h4 class="alert-heading">Oops!</h4>
    <p class="mb-0">City not found or no value was entered. Please try to enter a city again.</p>`;
    this.container.insertBefore(div, this.row);
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 5000);
  }
}
