import React from 'react';
import styled from 'styled-components';

import Rock from './hands/Rock';
import Paper from './hands/Paper';
import Scissors from './hands/Scissors';
import Lizard from './hands/Lizard';
import Spock from './hands/Spock';

import pentagon from '../assets/images/bg-pentagon.svg';

const Picker = () => {
	return (
		<Wrapper>
			<Scissors />
			<Spock />
			<Paper />
			<Lizard />
			<Rock />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 575px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	position: relative;

	&:after {
		position: absolute;
		content: '';
		background: url(${pentagon}) no-repeat;
		background-position: center;
		background-size: 75%;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1366px) {
		transform: scale(0.8);
		bottom: 30px;
	}

	@media (max-width: 525px) {
		top: -80px;

		&:after {
			background-size: 100%;
		}
	}

	@media (max-width: 340px) {
		transform: scale(0.7);
		top: -125px;
	}
`;

export default Picker;
