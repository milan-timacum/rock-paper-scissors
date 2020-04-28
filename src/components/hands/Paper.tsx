import React from 'react';

import Circle from '../ui/Circle';
import IconPaper from '../../assets/images/icon-paper.svg';

interface Props {
	highlight?: boolean;
}

const gradient = {
	first: '230, 89%, 62%',
	second: '230, 89%, 65%',
};

const Paper: React.FC<Props> = ({ highlight }) => {
	return (
		<Circle
			handIcon={IconPaper}
			bg={gradient}
			name={'paper'}
			highlightClass={highlight}
		/>
	);
};

export default Paper;
