
import style from './table.module.sass';
type PlatformData = {
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

export const Table = () => {
	const json: PlatformData[] = [
		{
			name: 'pancakeswapv2',
			money: {
				first: 'bnb',
				second: 'bsc-usdt',
			},
			amount: {
				first: '0.04878654234',
				second: '0.04878654234',
			},
		},
		{
			name: 'pancakeswapv2',
			money: {
				first: 'bnb',
				second: 'bsc-usdt',
			},
			amount: {
				first: '0.04878654234',
				second: '0.04878654234',
			},
		},
		{
			name: 'pancakeswapv2',
			money: {
				first: 'bnb',
				second: 'bsc-usdt',
			},
			amount: {
				first: '0.04878654234',
				second: '0.04878654234',
			},
		},
	];

	return (
		<div className={style.table}>
			<table>
				<thead>
					<tr>
						<th><h1>Платформа</h1></th>
						<th><h1>Основная монета</h1></th>
						<th><h1>Колличество</h1></th>
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
};
