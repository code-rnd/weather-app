import { setGeo } from "..";
import { getAddress } from "../../opencagedata/async";
import { setIsToggleLoading } from "../../appConfig";

export function getGeo() {
  return dispatch => {
    dispatch(setIsToggleLoading(true));

    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(setGeo({ latitude, longitude }));
      dispatch(getAddress(latitude, longitude));
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
