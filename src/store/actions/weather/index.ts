export enum Constants {
  SET_WEATHER = "SET_WEATHER",
  REQUEST_FAILED = "REQUEST_FAILED"
}

export const setWeather = (city: string) => ({
  type: Constants.SET_WEATHER,
  data: city
});

export const requestFailed = (errorMessage: any) => ({
  type: Constants.REQUEST_FAILED,
  data: errorMessage
});
