
import {StatusItem} from './StatusItems/statusItems';
import style from './statusTable.module.sass';
import {IsRenounced} from './types/types';

export const StatusTable = ({json}: {json: IsRenounced[]}) => (
	<div className={style.container}>
		{json.map(item => (
			<StatusItem key={item.name.ru} item={item} />
		))}
	</div>
);
