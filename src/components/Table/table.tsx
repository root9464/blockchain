
import style from './table.module.sass';
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

export const Table = ({json}: {json: PlatformData[]}) => (
	<div className={style.table}>
		<table>
			<thead>
				<tr>
					<th><h2>Платформа</h2></th>
					<th><h2>Основная монета</h2></th>
					<th><h2>Колличество</h2></th>
				</tr>
			</thead>

			<tbody>
				{
					json.map((item: PlatformData) => (
						<div className={style.table}>

							<tr>
								<td>
									<p>{item.name}</p>
								</td>
							</tr>

							<tr className={style.containertr}>
								<tr>
									<td><p>{item.money.first}</p></td>
									<td><p>{item.money.second}</p></td>
								</tr>

								<tr>
									<td><p>{item.amount.first}</p></td>
									<td><p>{item.amount.second}</p></td>
								</tr>
							</tr>

						</div>
					))
				}
			</tbody>

		</table>
	</div>
);
