export interface IRootState {
  appConfig: {
    isToggleLoading: boolean;
  };
  currentCity: {
    data: {
      coordinates: {
        latitude: number | null;
        longitude: number | null;
      };
      name: string;
      weather: number | string;
    };
  };
  weather: {
    data: any;
  };
  geo: {
    data: {
      latitude: number | null;
      longitude: number | null;
    };
  };
}
