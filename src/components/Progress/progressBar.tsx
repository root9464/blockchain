/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import {useEffect, useState} from 'react';
import style from './progressBar.module.sass';
export const ProgressBar = ({targetValue}: {targetValue: number}) => {
	const ANIMATION_SPEED = 20; // Ms
	const STROKE_WIDTH = '15px';
	const ROTATION_DEGREES = -90;
	const [percentage, setPercentage] = useState(0);
	const maxValue = 100;
	const radius = 85;
	const circleWidth = 200;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * percentage) / maxValue;

	const getStrokeColor = (percentage: number) => {
		if (percentage <= 30) {
			return 'red';
		}

		if (percentage <= 50) {
			return 'yellow';
		}

		return 'green';
	};

	const animatePercentage = () => {
		let currentPercentage = 0;
		const intervalId = setInterval(() => {
			currentPercentage += 1;
			setPercentage(currentPercentage);
			if (currentPercentage >= targetValue) {
				clearInterval(intervalId);
			}
		}, ANIMATION_SPEED);
	};

	useEffect(() => {
		animatePercentage();
	}, [targetValue]);

	return (
		<div className={style.container}>
			<svg
				width={circleWidth}
				height={circleWidth}
				viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
				<circle
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth={STROKE_WIDTH}
					r={radius}
					className={style.circleBackground}
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
						stroke: getStrokeColor(percentage),
					}}
					transform={`rotate(${ROTATION_DEGREES} ${circleWidth / 2} ${
						circleWidth / 2
					})`}
				/>
				<text x='50%' y='50%' dy='0.3em' textAnchor='middle' fill='#858585'>
					{percentage}%
				</text>
			</svg>
		</div>
	);
};
