export const SET_WEATHER = "SET_WEATHER";

export const setWeather = city => ({
  type: SET_WEATHER,
  data: city
});
