import {IsRenounced, StatusEnum} from '../../components/StatusTable/types/types';

export function generateRandomString(lang: 'en' | 'ru'): string {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	let randomString = '';
	for (let i = 0; i < 10; i++) {
		randomString += letters[Math.floor(Math.random() * letters.length)];
	}

	return lang === 'en' ? `Random string ${randomString}` : `Случайная строка ${randomString}`;
}

export function generateRandomIsRenounced(): IsRenounced {
	const randomStatus = Math.random() < 0.25
		? StatusEnum.Gray
		: Math.random() < 0.5
			? StatusEnum.Green
			: Math.random() < 0.75
				? StatusEnum.Red
				: StatusEnum.Unknown;

	const randomValue = Math.random() < 0.5
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
