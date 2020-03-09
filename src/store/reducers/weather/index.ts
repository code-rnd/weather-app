import { Constants } from "../../actions/weather";
import { IWeatherReducer } from "../../../types/interfaces/reducers/weather";

export const initialState: IWeatherReducer = {
  data: null
};

export function weatherReducers(state = initialState, action: any) {
  let newData = null;
  let messageError = null;

  switch (action.type) {
    case Constants.SET_WEATHER:
      newData = action.data;

      return {
        ...state,
        ...{
          data: newData
        }
      };

    case Constants.REQUEST_FAILED:
      messageError = action.data;

      return {
        ...state,
        ...{
          data: {
            ...messageError
          }
        }
      };

    default:
      return state;
  }
}
