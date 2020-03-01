export const SET_WEATHER = "SET_WEATHER";
export const REQUEST_FAILED = "REQUEST_FAILED";

export const setWeather = city => ({
  type: SET_WEATHER,
  data: city
});

export const requestFailed = errorMessage => ({
  type: REQUEST_FAILED,
  data: errorMessage
});
