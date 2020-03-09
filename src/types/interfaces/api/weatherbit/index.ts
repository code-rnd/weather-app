export interface IWeatherbitApi {
  access_key: string;
  getWeather: (x: string) => Promise<any>;
}
