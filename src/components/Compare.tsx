import React from 'react';
import styled from 'styled-components';
import Rock from './hands/Rock';
import Empty from './hands/Empty';

const Compare = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<h2>You Picked</h2>
				<Rock />
			</Wrapper>
			<WinLose>
				<p>You Win</p>
				<button type='button'> Play Again</button>
			</WinLose>
			<Wrapper>
				<h2>The house picked</h2>
				<Empty />
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
		padding: 15px 60px;
		margin-bottom: 40px;
	}
`;

export default Compare;
