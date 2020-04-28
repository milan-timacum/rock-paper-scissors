import React from 'react';
import styled from 'styled-components';

interface Gradient {
	first: string;
	second: string;
}

interface Props {
	handIcon: string;
	bg: Gradient;
}

interface ColorProps {
	color: any;
}

const Circle: React.FC<Props> = ({ handIcon, bg }) => {
	return (
		<Wrapper color={bg}>
			<Inner>
				<img src={handIcon} alt='hand-icon' />
			</Inner>
		</Wrapper>
	);
};

const Wrapper = styled.div.attrs({ className: 'h-wrapper' })`
	width: 205px;
	height: 205px;
	border: 25px solid transparent;
	box-sizing: border-box;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;
	transition: transform 0.25s;
	z-index: 1;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: -25px;
		border-radius: inherit;
		background: ${(props: ColorProps) =>
			props.color &&
			'radial-gradient(circle,hsl(' +
				props.color.first +
				'), hsl(' +
				props.color.second +
				'))'};
		z-index: 1;
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: -8px;
		left: 0;
		margin: -25px;
		border-radius: inherit;
		background: ${(props: ColorProps) =>
			props.color &&
			'radial-gradient(circle,hsl(' + props.color.first + '), #212121)'};
		box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3);
		transition: box-shadow 0.25s;
	}

	&:hover {
		transform: scale(1.05);

		&:after {
			box-shadow: 0 1px 35px rgba(0, 0, 0, 0.3);
		}
	}
`;

const Inner = styled.div`
	width: 155px;
	height: 149px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	box-shadow: 0 -9px #cdcfe0;
	position: relative;
	bottom: -5px;
	z-index: 1;
`;

export default Circle;
