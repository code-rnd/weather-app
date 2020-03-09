export enum Constants {
  SET_ADDRESS = "SET_ADDRESS"
}
export const setAddress = (address: string) => ({
  type: Constants.SET_ADDRESS,
  data: address
});
