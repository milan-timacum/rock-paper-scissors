import React from 'react';

import Circle from '../ui/Circle';
import IconScissors from '../../assets/images/icon-scissors.svg';

const gradient = {
	first: '39, 89%, 49%',
	second: '40, 84%, 53%',
};

const Scissors = () => {
	return <Circle handIcon={IconScissors} bg={gradient} />;
};

export default Scissors;
