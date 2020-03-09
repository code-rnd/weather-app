import axios from "axios";
import { IWeatherbitApi } from "../../types/interfaces/api/weatherbit";

export const instance = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});

export const weatherbitApi: IWeatherbitApi = {
  access_key: "",

  getWeather(city) {
    return instance
      .get(`current?city=${city}&key=${this.access_key}`)
      .then(response => {
        return response.data.data[0];
      });
  }
};
