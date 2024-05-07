/* eslint-disable react-hooks/exhaustive-deps */

import {useCallback, useState} from 'react';
import style from './select.module.sass';
import {SelectComponentProps} from './types/types';

export const SelectComponent = ({setJson}: SelectComponentProps) => {
	const [addressIndex, setAddressIndex] = useState<string>('');
	const [platformIndex, setPlatformIndex] = useState<string>('');

	const handleJsonUpdate = useCallback(() => {
		setJson({adress: addressIndex, platform: platformIndex});
	}, [addressIndex, platformIndex]);

	return (
		<div className={style.container}>
			<h2>Введите адрес смарт-контракта</h2>
			<input
				type='text'
				placeholder='адрес смарт контракта'
				className={style.adress}
				value={addressIndex}
				onChange={e => setAddressIndex(e.target.value)}
			/>
			<select
				name=''
				id=''
				className={style.select}
				value={platformIndex}
				onChange={e => setPlatformIndex(e.target.value)}
			>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>

			<button onClick={handleJsonUpdate} className={style.button}>Проанализировать контракт</button>
		</div>
	);
};

