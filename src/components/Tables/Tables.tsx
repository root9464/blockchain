import {data, jsondata, Table3, Table4} from '../../consts/consts';
import {StatusTable} from './StatusTable/statusTable';
import {TableAiAnalyze} from './TableAiAnalyze/TableAiAnalyze';
import {TableCodeAnalyze} from './TableCodeAnalyze/TableCodeAnalyze';
import {TableLiquidityPool} from './TableLiquidityPool/TableLiquidityPool';
import style from './tables.module.sass';
export const Tables = () => (
	<div className={style.blockTables}>
		<div>
			<h2>Базовый анализ</h2>
			<StatusTable json={data}/>
		</div>

		<div>
			<h2>AI анализ</h2>
			<TableAiAnalyze json={Table4} />
		</div>

		<div>
			<div>
				<h2>Таблица анализа ликвидности</h2>
				<TableLiquidityPool json={jsondata} />
			</div>

			<div>
				<h2>Отчет об ошибках компиляции</h2>
				<TableCodeAnalyze json={Table3}/>
			</div>
		</div>
	</div>
);

