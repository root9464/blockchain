
import React, {useContext, useState} from 'react';
import {SelectComponent} from './Select/Select';
import style from './modal.module.sass';
import {ModalContext} from './types/types';

export const Modal = ({onClick}: { onClick: () => void }) => {
	const [json, setJson] = useState<{adress: string; platform: string}>({
		adress: '',
		platform: '',
	});

	const {open, handleClick} = useContext(ModalContext);
	return (
		<div className={style.container}>
			{
				open ? (
					<div className={style.blur}>
						<div className={style.content}>
							<SelectComponent setJson={setJson} onClick={onClick} data={{json}}/>
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
