import axios from "axios";

// export const instance = axios.create({
//   baseURL: "http://api.weatherstack.com/"
// });

// export const weatherStackApi = {
//   access_key: "a1f5cfaba2e1ca627e17d4c65be60a87",

//   getWeather(city) {
//     return instance
//       .get(`current?access_key=${this.access_key}&query=${city}`)
//       .then(response => {
//         return response.data;
//       });
//   }
// };

export const instance = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});

export const weatherbitApi = {
  access_key: "338296f9e5f54de485e3967ebfeb7da2",

  getWeather(city) {
    return instance
      .get(`current?city=${city}&key=${this.access_key}`)
      .then(response => {
        return response.data.data[0];
      });
  }
};
