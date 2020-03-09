export interface IOpencagedata {
  key: string;
  getAddress: (x: number, y: number) => Promise<any>;
}
