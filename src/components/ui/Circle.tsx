import React, { useContext } from 'react';
import styled from 'styled-components';
import { PickContext } from '../../context/PickContext';

interface Gradient {
	first: string;
	second: string;
}

interface Props {
	handIcon: string;
	bg: Gradient;
	name: string;
	highlightClass?: boolean;
}

interface ColorProps {
	color: any;
}

const Circle: React.FC<Props> = React.memo(
	({ handIcon, bg, name, highlightClass }) => {
		const { setHandPick } = useContext(PickContext);

		return (
			<BtnWrap>
				<Wrapper color={bg} onClick={() => setHandPick({ hand: name })}>
					<Inner>
						<img src={handIcon} alt='hand-icon' />
					</Inner>
					<span
						className={'hide ' + (highlightClass ? 'highlight' : '')}
					></span>
					<span
						className={'hide ' + (highlightClass ? 'highlight' : '')}
					></span>
					<span
						className={'hide ' + (highlightClass ? 'highlight' : '')}
					></span>
				</Wrapper>
			</BtnWrap>
		);
	}
);

const BtnWrap = styled.div`
	display: flex;
	justify-content: center;
	position: relative;

	&:nth-of-type(1) {
		width: 100%;
		margin: 0;
	}

	&:nth-of-type(2),
	&:nth-of-type(3),
	&:nth-of-type(4),
	&:nth-of-type(5) {
		max-width: 50%;
		flex-basis: 50%;
	}

	&:nth-of-type(2) {
		top: -40px;
		left: -50px;
	}

	&:nth-of-type(3) {
		top: -40px;
		right: -50px;
	}

	&:nth-of-type(4) {
		left: 10px;
	}

	&:nth-of-type(5) {
		right: 10px;
	}
`;

const Wrapper = styled.button.attrs({ className: 'h-wrapper' })`
	width: 123px;
	padding: 0;
	border: 5px solid transparent;
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
		margin: -20px;
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
		margin: -20px;
		border-radius: inherit;
		background: ${(props: ColorProps) =>
			props.color &&
			'radial-gradient(circle,hsl(' + props.color.first + '), #212121)'};
		box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3);
		transition: box-shadow 0.25s;
	}

	&:hover {
		transform: scale(1.05);
		opacity: 1;

		&:after {
			box-shadow: 0 1px 35px rgba(0, 0, 0, 0.3);
		}
	}

	.hide {
		display: none;

		&.highlight {
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			transform: scale(2);
			background: #2c3e61;
			opacity: 0.1;
			border-radius: 50%;
			top: 4px;

			&:nth-of-type(2) {
				transform: scale(2.7);
			}

			&:nth-of-type(3) {
				transform: scale(3.35);
			}
		}
	}
`;

const Inner = styled.div`
	width: 115px;
	height: 109px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	box-shadow: 0 -9px #cdcfe0;
	position: relative;
	bottom: -5px;
	z-index: 1;
	border: 0;
`;

export default Circle;
