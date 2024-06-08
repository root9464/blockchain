
import React, {useContext, useState} from 'react';
import {IoClose} from 'react-icons/io5';
import {SelectComponent} from '../Select/select';
import style from './modal.module.sass';
import {ModalContext} from './types/types';

export const Modal = () => {
	const [json, setJson] = useState<{adress: string; platform: string}>({
		adress: '',
		platform: '',
	});
	console.log(json);

	const {open, handleClick} = useContext(ModalContext);
	return (
		<div className={style.container}>
			{
				open ? (
					<div className={style.blur}>
						<div className={style.content}>
							<SelectComponent setJson={setJson} />
							<IoClose onClick={handleClick} className={style.btn}/>
						</div>
					</div>
				) : (
					<>
						<button onClick={handleClick} className={style.button}>Анализ смарт контракта</button>
					</>
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
