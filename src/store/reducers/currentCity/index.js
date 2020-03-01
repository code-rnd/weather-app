import { SET_DATA_CURRENT_CITY } from "../../actions/currentCity";

export const initialState = {
  data: {
    coordinates: {
      latitude: null,
      longitude: null
    },
    name: null,
    weather: null
  }
};

export function currentCityReducers(state = initialState, action) {
  const data = state.data;
  let newData = null;

  switch (action.type) {
    case SET_DATA_CURRENT_CITY:
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
