
import {StatusItem} from './StatusItems/StatusItems';
import style from './tableBaseAnalyze.module.sass';
import {PropsInTableBaseAnalyze} from './types/types';

export const TableBaseAnalyze = ({json}: {json: PropsInTableBaseAnalyze[]}) => (
	<div className={style.container}>
		{json.map(item => (
			<StatusItem key={item.name.ru} item={item} />
		))}
	</div>
);
