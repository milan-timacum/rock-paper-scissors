import React from 'react';
import styled from 'styled-components';

const Empty = () => {
	return <Wrapper />;
};

const Wrapper = styled.div`
	width: 205px;
	height: 205px;
	box-sizing: border-box;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.17);
	z-index: 1;
`;

export default Empty;
