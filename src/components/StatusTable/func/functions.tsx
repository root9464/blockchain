import GrayCheck from '../../../assets/img/GCheck.svg';
import GrennCheck from '../../../assets/img/GrCheck.svg';
import RedCheck from '../../../assets/img/RCheck.svg';
import YellowCheck from '../../../assets/img/YCheck.svg';

import GrayCross from '../../../assets/img/GCross.svg';
import GreenCross from '../../../assets/img/GrCross.svg';
import RedCross from '../../../assets/img/RCross.svg';
import YellowCross from '../../../assets/img/YCross.svg';

import GrayDash from '../../../assets/img/GDash.svg';
import GreenDash from '../../../assets/img/GrDash.svg';
import RedDash from '../../../assets/img/RDash.svg';
import YellowDash from '../../../assets/img/YDash.svg';
import {StatusEnum} from '../statusTable';

export const getStatusText = ({status, value}: { status: StatusEnum, value: boolean | 'none' | number }) => {
	const images = {
		[StatusEnum.Gray]: {
			none: GrayDash,
			true: GrayCheck,
			false: GrayCross,
		},
		[StatusEnum.Red]: {
			none: RedDash,
			true: RedCheck,
			false: RedCross,
		},
		[StatusEnum.Green]: {
			none: GreenDash,
			true: GrennCheck,
			false: GreenCross,
		},
		[StatusEnum.Unknown]: {
			none: YellowDash,
			true: YellowCheck,
			false: YellowCross,
		},
	};

	return (
		<img
			src={(images[status] as { [key: string]: string })[value === 'none' ? 'none' : value.toString()]}
			alt=''
		/>
	);
};
