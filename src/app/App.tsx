import {PlatformData, Table} from '../components/Table/table';
import './global.sass';
function App() {
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
		<>
			<Table {...{json}} />
		</>
	);
}

export default App;
