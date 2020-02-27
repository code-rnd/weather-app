import { setAddress } from "..";
import { opencagedata } from "../../../../api/opencagedata";
import { getWeather } from "../../weather/async";

export const getAddress = (lat, lng) => {
  return dispatch => {
    // dispatch(toggleIsFetching(true));

    opencagedata
      .getAddress(lat, lng)
      .then(data => {
        // dispatch(toggleIsFetching(false));
        dispatch(setAddress(data));
        dispatch(getWeather(data.components.city));
      })
      .catch(data => {
        // dispatch(toggleIsFetching(false));
      });
  };
};
