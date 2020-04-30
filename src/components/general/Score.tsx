import React, { useContext } from 'react';
import styled from 'styled-components';
import { ScoreContext } from '../../context/ScoreContext';

const Score = () => {
	const { score } = useContext(ScoreContext);

	return (
		<Wrapper>
			<Title>Score</Title>
			<Counter>{score}</Counter>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 30px;
	background-color: white;
	border-radius: 10px;

	@media (max-width: 525px) {
		padding: 5px 10px;
		border-radius: 5px;
	}
`;

const Title = styled.p`
	color: #3843ad;

	@media (max-width: 525px) {
		font-size: 10px;
	}
`;

const Counter = styled.p`
	color: #545067;
	font-size: 4rem;
	font-weight: 700;

	@media (max-width: 525px) {
		font-size: 2.5rem;
		line-height: 37px;
	}
`;

export default Score;
