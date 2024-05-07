import {getStatusText} from '../func/functions';
import {IsRenounced} from '../types/types';
import style from './item.module.sass';
export const StatusItem = ({item}: {item: IsRenounced}) => (
	<div className={style.ctp} key={item.name.ru}>
		{item.value !== null && (
			<>
				<div className={style.info}>
					<h2>{item.name.ru}</h2>
					<p>{item.description.text.en ?? item.description.text.ru}</p>
				</div>
				<p>{getStatusText({status: item.status, value: item.value}) ?? item.value}</p>
			</>
		)}
	</div>
);
