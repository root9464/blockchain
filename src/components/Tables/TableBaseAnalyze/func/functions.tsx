import GrayCheck from '../../../../assets/img/GCheck.svg';
import GrennCheck from '../../../../assets/img/GrCheck.svg';
import RedCheck from '../../../../assets/img/RCheck.svg';
import YellowCheck from '../../../../assets/img/YCheck.svg';

import GrayCross from '../../../../assets/img/GCross.svg';
import GreenCross from '../../../../assets/img/GrCross.svg';
import RedCross from '../../../../assets/img/RCross.svg';
import YellowCross from '../../../../assets/img/YCross.svg';

import GrayDash from '../../../../assets/img/GDash.svg';
import GreenDash from '../../../../assets/img/GrDash.svg';
import RedDash from '../../../../assets/img/RDash.svg';
import YellowDash from '../../../../assets/img/YDash.svg';
import {ImageMap, StatusEnum, ValueType} from '../types/types';

export const getStatusText = ({status, value}: { status: StatusEnum, value: ValueType }) => {
	const imageMap: ImageMap = {
		gray: {
			none: GrayDash,
			true: GrayCheck,
			false: GrayCross,
		},
		red: {
			none: RedDash,
			true: RedCheck,
			false: RedCross,
		},
		green: {
			none: GreenDash,
			true: GrennCheck,
			false: GreenCross,
		},
		unknown: {
			none: YellowDash,
			true: YellowCheck,
			false: YellowCross,
		},
	};

	return (
		<img
			src={imageMap[status][value === 'none' ? 'none' : value.toString()]}
			alt=''
		/>
	);
};
