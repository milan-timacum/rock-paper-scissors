import React from 'react';

import Circle from '../ui/Circle';
import IconScissors from '../../assets/images/icon-scissors.svg';

interface Props {
	highlight?: boolean;
}

const gradient = {
	first: '39, 89%, 49%',
	second: '40, 84%, 53%',
};

const Scissors: React.FC<Props> = ({ highlight }) => {
	return (
		<Circle
			handIcon={IconScissors}
			bg={gradient}
			name={'scissors'}
			highlightClass={highlight}
		/>
	);
};

export default Scissors;
