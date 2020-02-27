import { combineReducers } from "redux";
import { appConfigReducers } from "./appConfig";
import { weatherReducers } from "./weather";
import { geoReducers } from "./geo";
import { opencagedataReducers } from "./opencagedata";

export const reducers = combineReducers({
  appConfig: appConfigReducers,
  weather: weatherReducers,
  geo: geoReducers,
  address: opencagedataReducers
});
