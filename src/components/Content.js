import React from 'react';
import styled from 'styled-components';

import Rock from './hands/Rock';
import Paper from './hands/Paper';
import Scissors from './hands/Scissors';
import triangle from '../assets/images/bg-triangle.svg';

const Content = () => {
	return (
		<Wrapper>
			<Rock />
			<Scissors />
			<Paper />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 480px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	position: relative;

	& > div:nth-of-type(3) {
		margin: 25px auto 0 auto;
	}

	&:after {
		position: absolute;
		content: '';
		background: url(${triangle}) no-repeat;
		background-position: center;
		width: 100%;
		height: 100%;
	}
`;

export default Content;
