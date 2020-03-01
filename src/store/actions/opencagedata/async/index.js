import { opencagedata } from "../../../../api/opencagedata";
import { getWeather } from "../../weather/async";
import { setIsToggleLoading } from "../../appConfig";

export const getAddress = (lat, lng) => {
  return dispatch => {
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
