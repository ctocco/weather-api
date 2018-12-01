class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.current = document.getElementById("w-current");
    this.humidity = document.getElementById("w-location");
    this.uv = document.getElementById("w-uv");
    this.cloudiness = document.getElementById("w-cloudiness");
  }
  paint(weather) {
    this.location.textContent = `
    ${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.innerHTML = `<i class="fas fa-temperature-high"></i> ${
      weather.main.temp_max
    }° / <i class="fas fa-temperature-low"></i> ${weather.main.temp_min}°C `;
  }
}
