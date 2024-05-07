
import {getStatusText} from './func/functions';
import style from './statusTable.module.sass';
import {IsRenounced} from './types/types';

export const StatusTable = ({json}: {json: IsRenounced[]}) => (
	<div className={style.container}>
		{json.map(item => (
			<div className={style.ctp} key={item.name.ru}>
				{item.value !== null && (
					<>
						<div className={style.info}>
							<h2>{item.name.ru}</h2>
							<p>{item.description.text.en || item.description.text.ru}</p>
						</div>
						<p>
							{getStatusText({status: item.status, value: item.value}) ? (
								<>{getStatusText({status: item.status, value: item.value})}</>
							) : (
								<>{item.value}</>
							)}
						</p>
					</>
				)}
			</div>
		))}
	</div>
);
