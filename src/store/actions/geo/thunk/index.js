import { setGeo } from "..";
import { getAddress } from "../../opencagedata/async";
import { setDataCurrnetCity } from "../../currentCity";

export function getGeo() {
  return dispatch => {
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(setGeo({ latitude, longitude }));
      dispatch(getAddress(latitude, longitude));

      dispatch(setDataCurrnetCity({ coordinates: { latitude, longitude } }));
    };

    const error = () => {
      dispatch(setGeo({ error: "Unable to retrieve your location" }));
    };

    if (!navigator.geolocation) {
      dispatch(setGeo({ error: "geo not found" }));
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
}
