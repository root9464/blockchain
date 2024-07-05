/* eslint-disable camelcase */
import {generateRandomIsRenounced} from '../app/func/functions';
import {IsRenounced} from '../components/Tables/StatusTable/types/types';
import {PropsInTableAiAnalyze} from '../components/Tables/TableAiAnalyze/types/types';
import {PropsInTableCodeAnalyze} from '../components/Tables/TableCodeAnalyze/types/types';
import {PlatformData} from '../components/Tables/TableLiquidityPool/TableLiquidityPool';

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
		name: 'pancakeswapv3',
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
		name: 'pancakeswapv4',
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

export const Table3: PropsInTableCodeAnalyze[] = [
	{
		has_error: true,
		enriched_erros_data_output: [
			{
				url: 'https://example.com/error1',
				name: 'Error 1',
				cases: 5,
				severity: 'High',
				confidence: 'Medium',
			},
			{
				url: 'https://example.com/error2',
				name: 'Error 2',
				cases: 2,
				severity: 'Medium',
				confidence: 'High',
			},
			{
				url: 'https://example.com/error3',
				name: 'Error 3',
				cases: 10,
				severity: 'Low',
				confidence: 'Medium',
			},
		],
	},
];

export const Table4: PropsInTableAiAnalyze[] = [
	{
		is_fraud: false,
		ai_data: 0.42076458163306557,
	},
	{
		is_fraud: false,
		ai_data: 0.42076458163306557,
	},
	{
		is_fraud: false,
		ai_data: 0.42076458163306557,
	},
	{
		is_fraud: false,
		ai_data: 0.42076458163306557,
	},
	{
		is_fraud: false,
		ai_data: 0.42076458163306557,
	},

];
