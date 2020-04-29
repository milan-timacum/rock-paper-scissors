import React from 'react';

import IconSpock from '../../assets/images/icon-spock.svg';
import Circle from '../ui/Circle';

interface Props {
	highlight?: boolean;
}

const gradient = {
	first: '189, 59%, 53%',
	second: '189, 58%, 57%',
};

const Spock: React.FC<Props> = ({ highlight }) => {
	return (
		<Circle
			handIcon={IconSpock}
			bg={gradient}
			name={'spock'}
			highlightClass={highlight}
		/>
	);
};

export default Spock;
