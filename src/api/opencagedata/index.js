import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.opencagedata.com/geocode/v1/"
});

export const opencagedata = {
  key: "46c3cf317a3e408a88ccefa30701b1e5",

  getAddress(lat, lng) {
    return instance
      .get(`json?q=${lat}+${lng}&key=${this.key}`)
      .then(response => {
        return response.data.results[0];
      });
  }
};
