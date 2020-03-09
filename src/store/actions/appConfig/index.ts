export enum Constants {
  SET_IS_TOGGLE_LOADING = "SET_IS_TOGGLE_LOADING"
}
export const setIsToggleLoading = (isToggle: boolean) => ({
  type: Constants.SET_IS_TOGGLE_LOADING,
  data: isToggle
});
