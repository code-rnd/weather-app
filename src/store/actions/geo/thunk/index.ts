import { setGeo } from "..";
import { getAddress } from "../../opencagedata/async";
import { setDataCurrnetCity } from "../../currentCity";
import { Dispatch } from "redux";

export function getGeo() {
  return (dispatch: Dispatch<any>) => {
    const success = (position: any) => {
      const latitude: number = position.coords.latitude;
      const longitude: number = position.coords.longitude;

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
