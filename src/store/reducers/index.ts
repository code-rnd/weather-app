import { combineReducers } from "redux";
import { appConfigReducers } from "./appConfig";
import { currentCityReducers } from "./currentCity";
import { weatherReducers } from "./weather";
import { geoReducers } from "./geo";

export const reducers = combineReducers({
  appConfig: appConfigReducers,
  currentCity: currentCityReducers,
  weather: weatherReducers,
  geo: geoReducers
});
