import { setWeather, requestFailed } from "..";
import { weatherbitApi } from "../../../../api/weatherbit";
import { setIsToggleLoading } from "../../appConfig";
import { setDataCurrnetCity } from "../../currentCity";
import { Dispatch } from "redux";

export const getWeather = (city: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(setIsToggleLoading(true));

    weatherbitApi
      .getWeather(city)
      .then(data => {
        dispatch(setIsToggleLoading(false));
        dispatch(setWeather(data));

        dispatch(
          setDataCurrnetCity({
            weather: data.temp,
            name: city
          })
        );
      })
      .catch(error => {
        dispatch(requestFailed({ temperature: null }));
        dispatch(
          setDataCurrnetCity({
            weather: null,
            name: city
          })
        );
        dispatch(setIsToggleLoading(false));
      });
  };
};
