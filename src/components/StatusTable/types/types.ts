/* eslint-disable no-unused-vars */
export enum StatusEnum {
  Gray = 0,
  Green = 1,
  Red = 2,
  Unknown = 3,
}

export type IsRenounced = {
  name: { en?: string; ru: string };
  value: boolean | 'none' | number | null;
  status: StatusEnum;
  description: { text: { en?: string; ru: string } };
}
