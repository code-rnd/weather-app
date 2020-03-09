export enum Constants {
  SET_DATA_CURRENT_CITY = "SET_DATA_CURRENT_CITY"
}
export const setDataCurrnetCity = (data: object) => ({
  type: Constants.SET_DATA_CURRENT_CITY,
  data: data
});
