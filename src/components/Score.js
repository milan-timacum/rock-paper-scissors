import React from 'react';
import styled from 'styled-components';

const Score = () => {
	return (
		<Wrapper>
			<Title>Score</Title>
			<Counter>12</Counter>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 50px;
	background-color: white;
	border-radius: 10px;
`;

const Title = styled.p`
	color: #3843ad;
`;

const Counter = styled.p`
	color: #545067;
	font-size: 4rem;
	font-weight: 700;
`;

export default Score;
