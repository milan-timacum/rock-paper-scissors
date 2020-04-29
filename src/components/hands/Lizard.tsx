import React from 'react';

import IconLizard from '../../assets/images/icon-lizard.svg';
import Circle from '../ui/Circle';

interface Props {
	highlight?: boolean;
}

const gradient = {
	first: '261, 73%, 60%',
	second: '261, 72%, 63%',
};

const Lizard: React.FC<Props> = ({ highlight }) => {
	return (
		<Circle
			handIcon={IconLizard}
			bg={gradient}
			name={'lizard'}
			highlightClass={highlight}
		/>
	);
};

export default Lizard;
