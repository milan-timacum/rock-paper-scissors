import React from 'react';
import styled from 'styled-components';

const Circle = ({ handIcon, bg }) => {
	return (
		<Wrapper color={bg}>
			<Inner>
				<img src={handIcon} alt='hand-icon' />
			</Inner>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 205px;
	height: 205px;
	border: 25px solid transparent;
	box-sizing: border-box;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
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
		background: ${(props) =>
			props.color &&
			'radial-gradient(circle,hsl(' +
				props.color.first +
				'), hsl(' +
				props.color.second +
				'))'};
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
`;

export default Circle;