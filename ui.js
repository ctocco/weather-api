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
    console.log(this.time);
  }
  paint(weather) {
    this.location.textContent = `
    ${weather.name}, ${weather.sys.country}`;
    this.timeUI.innerHTML = `<i class="fas fa-clock"></i> ${this.time}`;
    this.dateUI.textContent = `${this.today}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.innerHTML = `<i class="fas fa-temperature-high"></i> ${
      weather.main.temp_max
    }° / <i class="fas fa-temperature-low"></i> ${weather.main.temp_min}°C `;
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
