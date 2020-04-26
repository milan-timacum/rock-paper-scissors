import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import Score from './Score';

const Header = () => {
	return (
		<Wrapper>
			<Row>
				<Image src={logo} alt='logo' />
				<Score />
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	width: 100%;
	max-width: 900px;
	margin: 0 auto 70px auto;
`;

const Row = styled.div`
	margin: 0 auto;
	border: 5px solid rgba(255, 255, 255, 0.2);
	padding: 20px 25px;
	border-radius: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Image = styled.img`
	height: 100%;
`;

export default Header;
