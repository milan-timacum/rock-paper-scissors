import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import rulesImg from '../../assets/images/image-rules-bonus.svg';
import close from '../../assets/images/icon-close.svg';

Modal.setAppElement('#root');

const Footer = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<Wrapper>
			<button type='button' onClick={openModal}>
				Rules
			</button>
			<RulesModal
				as={Modal}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Example Modal'
				overlayClassName='overlay'
			>
				<MHeader>
					<h2>RULES</h2>
					<button onClick={closeModal}>
						<img src={close} alt='close' />
					</button>
				</MHeader>
				<RulesImg src={rulesImg} alt='rules' />
			</RulesModal>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	box-sizing: border-box;
	width: 100%;
	max-width: 1366px;
	margin: 0 auto 30px auto;
	padding: 0 20px;
	display: flex;
	justify-content: flex-end;
	position: relative;

	@media (max-width: 1366px) {
		justify-content: center;
	}
`;

const RulesModal = styled.footer`
	background-color: white;
	z-index: 999;
	padding: 30px 35px 40px 35px;
	border-radius: 10px;
	cursor: auto;

	h2 {
		font-size: 1.7rem;
		color: #3c4161;
		margin: 0;
	}

	&:focus {
		outline: none;
	}

	@media (max-width: 525px) {
		transform: scale(0.8);
	}

	@media (max-width: 340px) {
		transform: scale(0.7);
	}
`;

const RulesImg = styled.img`
	margin: 0 15px 30px 15px;
`;

const MHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;

	button {
		border: 0;
		padding: 10px;
		position: relative;
		right: -10px;
	}
`;

export default Footer;
