import axios from 'axios';
import style from './table.module.sass';

export const Table = () => {
	// Const {data} = useQuery({
	// 	queryKey: ['data'],
	// 	queryFn: () => axios.get('https://jsonplaceholder.typicode.com/comments'),
	// });
	const data = axios.get('https://jsonplaceholder.typicode.com/comments');
	console.log(data);

	return (
		<table className={style.table}>
			<div>
				<thead>
					<tr>
						<th><h1>Платформа</h1></th>
						<th><h1>Основная монета</h1></th>
						<th><h1>Колличество</h1></th>
					</tr>
				</thead>

				<tbody>
					<div className={style.table}>
						<tr>
							<td><p>pancakeswapv2</p></td>
						</tr>
						<tr>
							<td><p>bnb</p></td>
							<td><p>bsc-usdt</p></td>
						</tr>
						<tr>
							<td><p>0.04878654234</p></td>
							<td><p>0.04878654234</p></td>
						</tr>
					</div>
					<div className={style.table}>
						<tr>
							<td><p>pancakeswapv2</p></td>
						</tr>
						<tr>
							<td><p>bnb</p></td>
							<td><p>bsc-usdt</p></td>
						</tr>
						<tr>
							<td><p>0.04878654234</p></td>
							<td><p>0.04878654234</p></td>
						</tr>
					</div>
				</tbody>

			</div>
		</table>
	);
};
