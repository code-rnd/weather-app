export interface ICurrentCityReducer {
  data: {
    coordinates: {
      latitude: number | null;
      longitude: number | null;
    };
    name: string;
    weather: number | string;
  };
}
