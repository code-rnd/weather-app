export interface IWidjetProps {
  getGeo: Function;
  getWeather: Function;
  temperature: number | string;
  city: string;
  isToggleLoading: boolean;
}
