
import style from './tableLiquidityPool.module.sass';
export type PlatformData = {
  name: string;
  money: {
    first: string;
    second: string;
  };
  amount: {
    first: string;
    second: string;
  };
};

export const TableLiquidityPool = ({json}: {json: PlatformData[]}) => (
	<div className={style.table}>
		<div className={style.tableHeader}>
			<h3>Платформа</h3>
			<h3>Основная монета</h3>
			<h3>Количество</h3>
		</div>
		<div className={style.tableBody}>
			{json.map(item => (
				<div className={style.tableItem} key={item.name}>
					<p>{item.name}</p>

					<div>
						<p>{item.money.first}</p>
						<p>{item.money.second}</p>
					</div>

					<div>
						<p>{item.amount.first}</p>
						<p>{item.amount.second}</p>
					</div>
				</div>
			))}
		</div>
	</div>
);
