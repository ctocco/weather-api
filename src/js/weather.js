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
    let responseArr = [];
    const response = await fetch(
      `${this.weatherAPI}${this.city},${this.apiKey}&units=metric`
    );

    const responseData = await response.json();
    responseArr.push(responseData);
    // console.log(responseData.coord.lon);

    // console.log(
    //   `https://api.openweathermap.org/data/2.5/uvi?lat=${
    //     responseData.coord.lat
    //   }&lon=${responseData.coord.lon}&app=${this.apiKey}`
    // );
    $.get(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${
        responseData.coord.lat
      }&lon=${responseData.coord.lon}&app=${this.apiKey}`
    )

      .then(responseUV => {
        console.log(String(responseUV.value));
        responseArr.push(responseUV.value);
      })
      .catch(err => console.log(err));

    console.log(responseArr);
    return responseArr;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
