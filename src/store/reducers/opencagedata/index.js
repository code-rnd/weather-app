import { SET_ADDRESS } from "../../actions/opencagedata";

export const initialState = {
  data: null
};

export function opencagedataReducers(state = initialState, action) {
  let newData = null;

  switch (action.type) {
    case SET_ADDRESS:
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
