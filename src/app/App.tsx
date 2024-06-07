
import {Modal, Provider} from '../components/Modal/modal';
import {ProgressBar} from '../components/Progress/progressBar';
import {StatusTable} from '../components/StatusTable/statusTable';
import {Table} from '../components/Table/Table';
import {data, jsondata} from '../consts/consts';
import style from './app.module.sass';
import './global.sass';
export const App = () => (
	<div className={style.main}>
		<div className={style.containers}>
			<div className={style.mainContainer}>

				<div className={style.tablesContainer}>
					<div className={style.sideContainer}>
						<h2>Название таблицы</h2>
						<StatusTable items={data}/>
					</div>

					<div className={style.table}>
						<div className={style.buttons}>
							<Provider>
								<Modal />
							</Provider>
							<button className={style.button}>Анализ передачи токенов</button>
						</div>
						<h2>Аналитика ликвидности</h2>
						<Table json={jsondata}/>
					</div>
				</div>
			</div>
		</div>

		<div className={style.footerContainer}>
			<div className={style.raiting}>
				<h2>Рейтинг</h2>
				<p>Рыночный рейтинг привлекательности</p>
			</div>
			<div className={style.progress}>
				<div>
					<ProgressBar targetValue={80} />
					<p>Рыночный рейтинг</p>
				</div>
				<div>
					<ProgressBar targetValue={50} />
					<p>Рыночный рейтинг</p>
				</div>
			</div>
		</div>
	</div>
);

