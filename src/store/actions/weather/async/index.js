import { setWeather } from "..";
import { weatherStackApi } from "../../../../api/weatherstack";
import { setIsToggleLoading } from "../../appConfig";

export const getWeather = city => {
  return dispatch => {
    dispatch(setIsToggleLoading(true));

    weatherStackApi
      .getWeather(city)
      .then(data => {
        dispatch(setIsToggleLoading(false));
        dispatch(setWeather(data.current));
      })
      .catch(data => {
        dispatch(setIsToggleLoading(false));
      });
  };
};
