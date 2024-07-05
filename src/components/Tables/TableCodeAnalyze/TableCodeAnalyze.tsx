import style from './tableCodeAnalyze.module.sass';
import {PropsInTableCodeAnalyze} from './types/types';
export const TableCodeAnalyze = ({json}: {json: PropsInTableCodeAnalyze[]}) => (
	<div className={style.table}>
		<div className={style.tableHeader}>
			<h3>Платформа</h3>
			<h3>Количество</h3>
			<h3>Уровень критичности</h3>
			<h3>Возможность реализации</h3>
		</div>
		<div className={style.tableBody}>
			{json.map(item => (
				item.enriched_erros_data_output.map(itemData => (
					<div className={style.tableItem} key={itemData.url}>
						<p>{itemData.name}</p>
						<p>{itemData.cases}</p>
						<p>{itemData.severity}</p>
						<p>{itemData.confidence}</p>
					</div>
				))
			))}
		</div>
	</div>
);
