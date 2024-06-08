
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
		{json.map(item => (
			<div className={style.card} key={item.name}>
				<h2>{item.name}</h2>
				<div className={style.items}>
					<div className={style.item}>
						<p>{item.money.first}</p>
						<p>{item.money.second}</p>
					</div>
					<div className={style.item}>
						<p>{item.amount.first}</p>
						<p>{item.amount.second}</p>
					</div>
				</div>
			</div>
		))}
	</div>
);
