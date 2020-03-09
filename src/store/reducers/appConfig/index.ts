import { Constants } from "../../actions/appConfig";
import { IAppConfigReducer } from "../../../types/interfaces/reducers/appConfig";

export const initialState: IAppConfigReducer = {
  isToggleLoading: false
};

export function appConfigReducers(state = initialState, action: any) {
  let isToggleLoading = null;

  switch (action.type) {
    case Constants.SET_IS_TOGGLE_LOADING:
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
