import {Table1, Table2, Table3, Table4} from '../../consts/consts';
import {TableAiAnalyze} from './TableAiAnalyze/TableAiAnalyze';
import {TableBaseAnalyze} from './TableBaseAnalyze/TableBaseAnalyze';
import {TableCodeAnalyze} from './TableCodeAnalyze/TableCodeAnalyze';
import {TableLiquidityPool} from './TableLiquidityPool/TableLiquidityPool';
import style from './tables.module.sass';
export const Tables = () => (
	<div className={style.blockTables}>
		<div>
			<h2>Базовый анализ</h2>
			<TableBaseAnalyze json={Table2}/>
		</div>

		<div>
			<h2>AI анализ</h2>
			<TableAiAnalyze json={Table4} />
		</div>

		<div>
			<div>
				<h2>Таблица анализа ликвидности</h2>
				<TableLiquidityPool json={Table1} />
			</div>

			<div>
				<h2>Отчет об ошибках компиляции</h2>
				<TableCodeAnalyze json={Table3}/>
			</div>
		</div>
	</div>
);

