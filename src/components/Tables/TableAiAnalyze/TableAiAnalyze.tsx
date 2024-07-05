import style from './tableAiAnalyze.module.sass';
import {PropsInTableAiAnalyze} from './types/types';
export const TableAiAnalyze = ({json}: {json: PropsInTableAiAnalyze[]}) => (
	<div className={style.table}>
		{
			json.map(item => (
				<div className={style.tableItem} key={item.ai_data}>
					<p>{(item.is_fraud).toString()}</p>
					<p>{item.ai_data}</p>
				</div>
			))
		}
	</div>
);
