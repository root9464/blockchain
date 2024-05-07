
import {IsRenounced, StatusTable} from '../components/StatusTable/statusTable';
import {generateRandomIsRenounced} from './func/functions';
import './global.sass';
function App() {
	const data: IsRenounced[] = Array.from({length: 3}, generateRandomIsRenounced);
	return (
		<>
			<StatusTable json={data} />
		</>
	);
}

export default App;
