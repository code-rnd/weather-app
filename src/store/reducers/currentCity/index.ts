import { Constants } from "../../actions/currentCity";
import { ICurrentCityReducer } from "../../../types/interfaces/reducers/currentCity";

export const initialState: ICurrentCityReducer = {
  data: {
    coordinates: {
      latitude: null,
      longitude: null
    },
    name: "",
    weather: ""
  }
};

export function currentCityReducers(state = initialState, action: any) {
  const data = state.data;
  let newData = null;

  switch (action.type) {
    case Constants.SET_DATA_CURRENT_CITY:
      newData = action.data;

      return {
        ...state,
        ...{
          data: { ...data, ...newData }
        }
      };

    default:
      return state;
  }
}
