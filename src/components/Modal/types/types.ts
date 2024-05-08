import {createContext} from 'react';

export interface ModalContextValue {
  open: boolean;
  handleClick: () => void;
}

export const ModalContext = createContext<ModalContextValue>({
	open: false,
	handleClick() {},
});
