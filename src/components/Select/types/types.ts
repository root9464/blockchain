/* eslint-disable no-unused-vars */
export type SelectComponentProps = {
  setJson: (json: {adress: string; platform: string}) => void;
  onClick: () => void;
  data: {
    json: {adress: string; platform: string};
  }
};

