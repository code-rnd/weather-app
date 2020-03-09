export enum Constansts {
  SET_GEO = "SET_GEO"
}

export const setGeo = (geoData: any) => ({
  type: Constansts.SET_GEO,
  data: geoData
});
