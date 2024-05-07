
import {StatusTable} from '../components/StatusTable/statusTable';
import {IsRenounced} from '../components/StatusTable/types/types';
import {generateRandomIsRenounced} from './func/functions';
import './global.sass';
export const App = () => {
	const data: IsRenounced[] = Array.from({length: 8}, generateRandomIsRenounced);
	return (
		<>
			<StatusTable json={data} />
		</>
	);
};

