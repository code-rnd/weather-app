import { SET_WEATHER, REQUEST_FAILED } from "../../actions/weather";

export const initialState = {
  data: null
};

export function weatherReducers(state = initialState, action) {
  let newData = null;
  let messageError = null;

  switch (action.type) {
    case SET_WEATHER:
      newData = action.data;

      return {
        ...state,
        ...{
          data: newData
        }
      };

    case REQUEST_FAILED:
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
