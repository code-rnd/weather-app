import axios from "axios";

export const instance = axios.create({
  baseURL: "http://api.weatherstack.com/"
});

export const weatherStackApi = {
  access_key: "private",

  getWeather(city) {
    return instance
      .get(`current?access_key=${this.access_key}&query=${city}`)
      .then(response => {
        return response.data;
      });
  }
};
