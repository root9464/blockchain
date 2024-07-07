
export type StatusEnum = 'gray' | 'red' | 'green' | 'unknown';
export type ValueType = boolean | 'none' | number;

export type PropsInTableBaseAnalyze = {
  name: { en?: string; ru: string };
  value: boolean | 'none' | number | null;
  status: StatusEnum;
  description: { text: { en?: string; ru: string } };
}

export interface ImageMap {
  [key: string]: {
    [key: string]: string;
  };
}
