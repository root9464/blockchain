
import {Footer} from '../components/Footer/Footer';
import {Header} from '../components/Header/Header';
import {Tables} from '../components/Tables/Tables';
import style from './app.module.sass';
import './global.sass';
export const App = () => (
	<div className={style.main}>
		<Header />
		<Tables />
		<Footer />
	</div>
);

