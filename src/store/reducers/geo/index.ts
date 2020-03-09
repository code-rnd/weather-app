import { Constansts } from "../../actions/geo";
import { IGeoReducer } from "../../../types/interfaces/reducers/geo";

export const initialState: IGeoReducer = {
  data: {
    latitude: null,
    longitude: null
  }
};

export function geoReducers(state = initialState, action: any) {
  let newData = null;

  switch (action.type) {
    case Constansts.SET_GEO:
      newData = action.data;

      return {
        ...state,
        ...{
          data: newData
        }
      };

    default:
      return state;
  }
}
