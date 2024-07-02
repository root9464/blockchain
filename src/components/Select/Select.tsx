
/* eslint-disable react-hooks/exhaustive-deps */

import {useCallback, useContext, useState} from 'react';
import {ModalContext} from '../Modal/types/types';
import style from './select.module.sass';
import {SelectComponentProps} from './types/types';

export const SelectComponent = ({setJson, onClick}: SelectComponentProps) => {
	const [addressIndex, setAddressIndex] = useState<string>('');
	const [platformIndex, setPlatformIndex] = useState<string>('');
	const {handleClick} = useContext(ModalContext);
	const handleJsonUpdate = useCallback(() => {
		setJson({adress: addressIndex, platform: platformIndex});
		onClick();
		handleClick();
	}, [addressIndex, platformIndex]);

	return (
		<div className={style.container}>
			<h2>Введите адрес смарт-контракта</h2>
			<input type='text' placeholder='адрес смарт контракта' className={style.adress} value={addressIndex} onChange={e => setAddressIndex(e.target.value)}/>
			<select name='' id='' className={style.select} value={platformIndex} onChange={e => setPlatformIndex(e.target.value)}>
				<option value='1'>eth</option>
				<option value='2'>bsc</option>
				<option value='3'>trx</option>
				<option value='4'>sibr</option>
			</select>

			<button onClick={handleJsonUpdate} className={style.button}>Проанализировать контракт</button>

		</div>
	);
};

