import { SET_IS_TOGGLE_LOADING } from "../../actions/appConfig";

export const initialState = {
  isToggleLoading: false
};

export function appConfigReducers(state = initialState, action) {
  let isToggleLoading = null;

  switch (action.type) {
    case SET_IS_TOGGLE_LOADING:
      isToggleLoading = action.data;

      return {
        ...state,
        ...{
          isToggleLoading: isToggleLoading
        }
      };

    default:
      return state;
  }
}
