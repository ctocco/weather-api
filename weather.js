class Weather {
  constructor(city, metric, imperial) {
    this.weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=`;
    this.apiKey = "id=524901&APPID=f045561d2752bfdcfcc897bf281be2da";
    this.city = city;
    this.metric = metric;
    this.imperial = imperial;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `${this.weatherAPI}${this.city},${this.apiKey}&units=metric`
    );

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
