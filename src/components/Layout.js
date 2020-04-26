import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
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
	}

	#root {
		padding: 60px 0;
	}

	.container {
			max-width: 900px;
			margin: 0 auto;
	}

	.row {
		display: flex;
		justify-content: center;
	}

	p {
		margin: 0;
	}
	
`;
export default Layout;
