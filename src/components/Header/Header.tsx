import {useState} from 'react';
import vid from '../../assets/video/document_5190701885429928661.mp4';
import {Modal, Provider} from '../Modal/modal';
import style from './header.module.sass';
export const Header = () => {
	// Показ элементов
	const [stateIsOpenModal, setStateIsOpenModal] = useState(false);
	const visibleAllElements = () => setStateIsOpenModal(true);
	console.log(stateIsOpenModal);

	return (
		<div className={style.header}>
			<div className={style.brand}>
				<video className={style.video} autoPlay={true} muted={true} loop={true} playsInline={true}>
					<source src={vid} type='video/mp4' />
				</video>
				<h1>Taiga.labs</h1>
			</div>
			<Provider>
				<Modal onClick={visibleAllElements}/>
			</Provider>
		</div>
	);
};
