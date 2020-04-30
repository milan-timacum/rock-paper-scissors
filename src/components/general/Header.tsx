import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo-bonus.svg';
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
	margin: 60px auto 70px auto;

	@media (max-width: 1366px) {
		margin: 30px auto 0 auto;
	}

	@media (max-width: 768px) {
		padding: 0 30px;
		box-sizing: border-box;
	}
`;

const Row = styled.div`
	margin: 0 auto;
	border: 5px solid rgba(255, 255, 255, 0.2);
	padding: 20px 25px;
	border-radius: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1366px) {
		padding: 15px 20px;
	}

	@media (max-width: 525px) {
		border: 3px solid rgba(255, 255, 255, 0.2);
		padding: 10px;
	}
`;

const Image = styled.img`
	height: 100%;

	@media (max-width: 1366px) {
		width: 100px;
	}

	@media (max-width: 525px) {
		width: 60px;
	}
`;

export default Header;
