import { SET_WEATHER } from "../../actions/weather";

export const initialState = {
  data: null
};

export function weatherReducers(state = initialState, action) {
  let newData = null;

  switch (action.type) {
    case SET_WEATHER:
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
