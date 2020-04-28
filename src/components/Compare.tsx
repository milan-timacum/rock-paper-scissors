import React, { useState } from 'react';
import styled from 'styled-components';
import Rock from './hands/Rock';
import Empty from './hands/Empty';
import Paper from './hands/Paper';
import Scissors from './hands/Scissors';

interface Props {
	value: string;
}

const Compare: React.FC<Props> = ({ value }) => {
	// const [compareHands, setCompare] = useState<{
	// 	player1: string | null;
	// 	player2: string | null;
	// }>({
	// 	player1: null,
	// 	player2: null,
	// });

	// //Check picked hand
	let checkHand;
	if (value === 'rock') {
		checkHand = <Rock />;
		// setCompare({ player1: 'rock', player2: null });
	} else if (value === 'paper') {
		checkHand = <Paper />;
		// setCompare({ player1: 'paper', player2: null });
	} else {
		checkHand = <Scissors />;
		// setCompare({ player1: 'scissors', player2: null });
	}

	// Ai random hand generator
	let compHand;
	let result;
	const randomHand = Math.floor(Math.random() * 3);

	if (randomHand === 1) {
		compHand = <Rock />;
		if (value === 'rock') {
			result = 'Draw';
		} else if (value === 'paper') {
			result = 'You Win';
		} else {
			result = 'You Lose';
		}
	} else if (randomHand === 2) {
		compHand = <Paper />;
		console.log(value);
		if (value === 'paper') {
			result = 'Draw';
		} else if (value === 'rock') {
			result = 'You Lose';
		} else {
			result = 'You Win';
		}
	} else {
		compHand = <Scissors />;
		if (value === 'scissors') {
			result = 'Draw';
		} else if (value === 'paper') {
			result = 'You Lose';
		} else {
			result = 'You Win';
		}
	}

	return (
		<React.Fragment>
			<Wrapper>
				<h2>You Picked</h2>
				{checkHand}
			</Wrapper>
			<WinLose>
				<p>{result}</p>
				<button type='button'>
					<a href='/'>Play Again</a>
				</button>
			</WinLose>
			<Wrapper>
				<h2>The house picked</h2>
				{compHand}
			</Wrapper>
		</React.Fragment>
	);
};

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 400px;

	h2 {
		margin-bottom: 65px;
	}

	.h-wrapper {
		transform: scale(1.4);
		cursor: auto;
		pointer-events: none;

		&:hover {
			transform: scale(1.4);

			&:after {
				box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3);
			}
		}
	}
`;

const WinLose = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	p {
		font-size: 3.4rem;
		font-weight: 700;
		margin-bottom: 20px;
	}

	button {
		color: #e22851;
		background: white;
		border: 0;
		margin-bottom: 40px;
		padding: 0;

		a {
			padding: 15px 60px;
			display: flex;
			text-decoration: none;
		}
	}
`;

export default Compare;
