import {PropsInTableBaseAnalyze, StatusEnum} from '../../components/Tables/TableBaseAnalyze/types/types';

export function generateRandomString(lang: 'en' | 'ru'): string {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	let randomString = '';
	for (let i = 0; i < 10; i++) {
		randomString += letters[Math.floor(Math.random() * letters.length)];
	}

	return lang === 'en' ? `Random string ${randomString}` : `Случайная строка ${randomString}`;
}

type RandomValue = boolean | 'none';

export function generateRandomPropsTableBaseAnalyze(): PropsInTableBaseAnalyze {
	const randomStatus: StatusEnum = Math.random() < 0.25
		? 'gray'
		: Math.random() < 0.5
			? 'green'
			: Math.random() < 0.75
				? 'red'
				: 'unknown';

	const randomValue: RandomValue = Math.random() < 0.5
		? true
		: 'none';

	return {
		name: {
			ru: generateRandomString('ru'),
			en: generateRandomString('en'),
		},
		value: randomValue,
		status: randomStatus,
		description: {
			text: {
				ru: generateRandomString('ru'),
				en: generateRandomString('en'),
			},
		},
	};
}

