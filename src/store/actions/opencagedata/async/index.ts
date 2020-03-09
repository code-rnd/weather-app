import { opencagedata } from "../../../../api/opencagedata";
import { getWeather } from "../../weather/async";
import { setIsToggleLoading } from "../../appConfig";

import { Dispatch } from "redux";

export const getAddress = (lat: number, lng: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(setIsToggleLoading(true));

    opencagedata
      .getAddress(lat, lng)
      .then(data => {
        dispatch(getWeather(data.components.city));

        dispatch(setIsToggleLoading(false));
      })
      .catch(error => {
        dispatch(setIsToggleLoading(false));
      });
  };
};
