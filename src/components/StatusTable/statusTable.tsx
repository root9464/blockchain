
import {StatusItem} from './StatusItems/statusItems';
import style from './statusTable.module.sass';
import {IsRenounced} from './types/types';

export const StatusTable = ({items}: {items: IsRenounced[]}) => (
	<div className={style.container}>
		{items.map(item => (
			<StatusItem key={item.name.ru} item={item} />
		))}
	</div>
);
