import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PickContext } from '../context/PickContext';
import { ScoreContext } from '../context/ScoreContext';

import Rock from './hands/Rock';
// import Empty from './hands/Empty';
import Paper from './hands/Paper';
import Scissors from './hands/Scissors';
import Lizard from './hands/Lizard';
import Spock from './hands/Spock';

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
		} else if (value === 'scissors') {
			setPlayer('scissors');
		} else if (value === 'lizard') {
			setPlayer('lizard');
		} else {
			setPlayer('spock');
		}

		// Set house hand(random)
		// Setting a Winner
		// Updating score
		const randomHand = Math.floor(Math.random() * 5) + 1;
		if (randomHand === 1) {
			setHouse('rock');
			if (value === 'rock') {
				setResult('Draw');
			} else if (value === 'paper') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else if (value === 'scissors') {
				setResult('You Lose');
			} else if (value === 'lizard') {
				setResult('You Lose');
			} else {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			}
		} else if (randomHand === 2) {
			setHouse('paper');
			if (value === 'paper') {
				setResult('Draw');
			} else if (value === 'rock') {
				setResult('You Lose');
			} else if (value === 'scissors') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else if (value === 'lizard') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else {
				setResult('You Lose');
			}
		} else if (randomHand === 3) {
			setHouse('scissors');
			if (value === 'scissors') {
				setResult('Draw');
			} else if (value === 'paper') {
				setResult('You Lose');
			} else if (value === 'rock') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else if (value === 'lizard') {
				setResult('You Lose');
			} else {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			}
		} else if (randomHand === 4) {
			setHouse('lizard');
			if (value === 'lizard') {
				setResult('Draw');
			} else if (value === 'rock') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else if (value === 'paper') {
				setResult('You Lose');
			} else if (value === 'scissors') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else {
				setResult('You Lose');
			}
		} else {
			setHouse('spock');
			if (value === 'spock') {
				setResult('Draw');
			} else if (value === 'rock') {
				setResult('You Lose');
			} else if (value === 'paper') {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
			} else if (value === 'scissors') {
				setResult('You Lose');
			} else {
				setResult('You Win');
				setScore(score + 1);
				localStorage.setItem('score', JSON.stringify(score + 1));
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
						return <Rock highlight={result === 'You Win' && true} />;
					} else if (player === 'paper') {
						return <Paper highlight={result === 'You Win' && true} />;
					} else if (player === 'scissors') {
						return <Scissors highlight={result === 'You Win' && true} />;
					} else if (player === 'lizard') {
						return <Lizard highlight={result === 'You Win' && true} />;
					} else {
						return <Spock highlight={result === 'You Win' && true} />;
					}
				})()}
			</Wrapper>
			<WinLose>
				<p>{result}</p>
				<button type='button' onClick={() => setHandPick({ hand: null })}>
					Play Again
				</button>
				<span>or</span>
				<button
					type='button'
					className='reset'
					onClick={() => {
						setHandPick({ hand: null });
						setScore(0);
					}}
				>
					Reset score
				</button>
			</WinLose>
			<Wrapper>
				<h2>The house picked</h2>
				{(() => {
					if (house === 'rock') {
						return <Rock highlight={result === 'You Lose' && true} />;
					} else if (house === 'paper') {
						return <Paper highlight={result === 'You Lose' && true} />;
					} else if (house === 'scissors') {
						return <Scissors highlight={result === 'You Lose' && true} />;
					} else if (house === 'lizard') {
						return <Lizard highlight={result === 'You Lose' && true} />;
					} else {
						return <Spock highlight={result === 'You Lose' && true} />;
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

	@media (max-width: 525px) {
		height: auto;

		& > div:nth-of-type(1) {
			bottom: 0;
		}

		&:nth-of-type(1) {
			order: 0;
		}

		&:nth-of-type(3) {
			order: 1;
		}
	}

	h2 {
		margin-bottom: 65px;
		z-index: 2;

		@media (max-width: 525px) {
			order: 1;
			font-size: 0.875rem;
			text-align: center;
			margin-bottom: 0;
			margin-top: 20px;
		}

		@media (max-width: 340px) {
			font-size: 0.7rem;
		}
	}

	.h-wrapper {
		transform: scale(1.5);
		cursor: auto;
		pointer-events: none;

		&:hover {
			transform: scale(1.5);

			&:after {
				box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3);
			}
		}

		@media (max-width: 768px) {
			transform: scale(1.2);
			&:hover {
				transform: scale(1.2);
			}
		}

		@media (max-width: 525px) {
			transform: scale(0.8);
			&:hover {
				transform: scale(0.8);
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
	z-index: 2;
	position: relative;
	bottom: -60px;

	p {
		font-size: 3.4rem;
		font-weight: 700;
		margin-bottom: 20px;
	}

	span {
		margin-bottom: 20px;
	}

	button {
		color: #e22851;
		background: white;
		border: 0;
		margin-bottom: 20px;
		padding: 0;
		padding: 15px 60px;

		&.reset {
			color: white;
			background: transparent;
			padding: 0;
			margin: 0;
			text-decoration: underline;
			font-size: 12px;
			letter-spacing: 2px;
			opacity: 0.5;

			&:hover {
				opacity: 1;
			}
		}
	}

	@media (max-width: 525px) {
		order: 2;
		top: 60px;

		p {
			font-size: 2.5rem;
			margin-bottom: 10px;
		}

		button {
			padding: 10px 30px;
			margin-bottom: 10px;
		}

		span {
			margin-bottom: 10px;
		}
	}

	@media (max-width: 340px) {
		top: 20px;
	}
`;

export default Compare;
