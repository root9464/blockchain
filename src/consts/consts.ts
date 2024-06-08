import {generateRandomIsRenounced} from '../app/func/functions';
import {IsRenounced} from '../components/StatusTable/types/types';
import {PlatformData} from '../components/Table/table';

export const jsondata: PlatformData[] = [
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

export const data: IsRenounced[] = Array.from({length: 8}, generateRandomIsRenounced);

/*
	Const [json, setJson] = useState<{adress: string; platform: string}>({
		adress: '',
		platform: '',
	});

	useEffect(() => {
		console.log(json);
	}, [json]);
*/
