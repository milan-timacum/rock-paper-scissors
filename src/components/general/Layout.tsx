import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

interface Props {
	children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<main className='container'>
				<div className='row'>{children}</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

const GlobalStyle = createGlobalStyle`

	html,body {
		margin: 0;
		color: white;
		font-family: 'Barlow Semi Condensed', sans-serif;
		font-size: 100%;
		text-transform: uppercase;
		letter-spacing: 3px;
		background-image: radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
		overflow: hidden;
	}

	#root {
		padding: 60px 0;
		height: calc(100vh - 120px);
		display: flex;
		flex-direction: column;

		@media (max-width: 1366px) {
			padding: 20px 0;
			height: calc(100vh - 40px);
		}
	}

	.container {
			width: 100%;
			max-width: 1200px;
			margin: 0 auto;
			flex: 1;
	}

	.row {
		display: flex;
		justify-content: center;
	}

	p {
		margin: 0;
	}

	button {
		font-family: inherit;
		font-size: 1.0625rem;
		text-transform: uppercase;
		letter-spacing: 3px;
		background-color: transparent;
		box-shadow: none;
		border: 3px solid #858aa7;
		border-radius: 7px;
		color: white;
		padding: 10px 40px;
		cursor: pointer;
		transition: opacity .25s;

		&:hover {
			opacity: .5;
		}

		&:focus{
			outline: none;
		}
	}

	.ReactModalPortal > * {
		opacity: 0;
	}

	.overlay {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0, .6);
		z-index: 999;
		cursor: pointer;
		transition: opacity 200ms ease-in-out;

		&.ReactModal__Overlay--after-open {
				opacity: 1;
		}

		&.ReactModal__Overlay--before-close {
				opacity: 0;
		}
	}

`;
export default Layout;
