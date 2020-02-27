import { SET_GEO } from "../../actions/geo";

export const initialState = {
  data: null
};

export function geoReducers(state = initialState, action) {
  let newData = null;

  switch (action.type) {
    case SET_GEO:
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
