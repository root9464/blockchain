
import React, {useContext, useState} from 'react';
import {SelectComponent} from '../Select/select';
import style from './modal.module.sass';
import {ModalContext} from './types/types';

export const Modal = () => {
	const [json, setJson] = useState<{adress: string; platform: string}>({
		adress: '',
		platform: '',
	});
	const {open, handleClick} = useContext(ModalContext);
	return (
		<div className={style.container}>
			{
				open ? (
					<div className={style.blur} onClick={handleClick}>
						<div className={style.content}>
							<SelectComponent setJson={setJson} />
						</div>
					</div>
				) : (
					<button onClick={handleClick} className={style.button}>Анализ передачи токенов</button>
				)
			}
		</div>
	);
};

export const Provider = ({children}: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(prev => !prev);

	return (
		<ModalContext.Provider value={{open, handleClick}}>
			{children}
		</ModalContext.Provider>
	);
};
