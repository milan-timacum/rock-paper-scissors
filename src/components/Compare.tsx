import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PickContext } from '../context/PickContext';
import { ScoreContext } from '../context/ScoreContext';

import Rock from './hands/Rock';
// import Empty from './hands/Empty';
import Paper from './hands/Paper';
import Scissors from './hands/Scissors';

interface Props {
	value: string;
}

const Compare: React.FC<Props> = ({ value }) => {
	const [player, setPlayer] = useState<string | null>(null);
	const [house, setHouse] = useState<string | null>(null);
	const [result, setResult] = useState<string | null>(null);

	const { score, setScore } = useContext(ScoreContext);
	const { setHandPick } = useContext(PickContext);

	useEffect(() => {
		//Set player hand
		if (value === 'rock') {
			setPlayer('rock');
		} else if (value === 'paper') {
			setPlayer('paper');
		} else {
			setPlayer('scissorss');
		}

		// Set house hand(random)
		// Setting a Winner
		// Updating score
		const randomHand = Math.floor(Math.random() * 3);
		if (randomHand === 1) {
			setHouse('rock');
			if (value === 'rock') {
				setResult('Draw');
			} else if (value === 'paper') {
				setResult('You Win');
				setScore(score + 1);
			} else {
				setResult('You Lose');
			}
		} else if (randomHand === 2) {
			setHouse('paper');
			if (value === 'paper') {
				setResult('Draw');
			} else if (value === 'rock') {
				setResult('You Lose');
			} else {
				setResult('You Win');
				setScore(score + 1);
			}
		} else {
			setHouse('scissors');
			if (value === 'scissors') {
				setResult('Draw');
			} else if (value === 'paper') {
				setResult('You Lose');
			} else {
				setResult('You Win');
				setScore(score + 1);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<React.Fragment>
			<Wrapper>
				<h2>You Picked</h2>
				{(() => {
					if (player === 'rock') {
						return <Rock />;
					} else if (player === 'paper') {
						return <Paper />;
					} else {
						return <Scissors />;
					}
				})()}
			</Wrapper>
			<WinLose>
				<p>{result}</p>
				<button type='button' onClick={() => setHandPick({ hand: null })}>
					Play Again
				</button>
			</WinLose>
			<Wrapper>
				<h2>The house picked</h2>
				{(() => {
					if (house === 'rock') {
						return <Rock />;
					} else if (house === 'paper') {
						return <Paper />;
					} else {
						return <Scissors />;
					}
				})()}
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
		padding: 15px 60px;
	}
`;

export default Compare;
