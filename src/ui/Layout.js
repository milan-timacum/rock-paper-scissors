import React from 'react';
import { createGlobalStyle } from 'styled-components';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<main>{children}</main>
		</React.Fragment>
	);
};

const GlobalStyle = createGlobalStyle`

	html,body {
		margin: 0;
		color: white;
		font-family: 'Barlow Semi Condensed', sans-serif;
		font-size: 100%;
	}

	main {
		background-image: radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
		height: 100vh;
	}
	
`;
export default Layout;
