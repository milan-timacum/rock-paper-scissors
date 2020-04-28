import React from 'react';

import IconRock from '../../assets/images/icon-rock.svg';
import Circle from '../ui/Circle';

interface Props {
	highlight?: boolean;
}

const gradient = {
	first: '349, 71%, 52%',
	second: '349, 70%, 56%',
};

const Rock: React.FC<Props> = ({ highlight }) => {
	return (
		<Circle
			handIcon={IconRock}
			bg={gradient}
			name={'rock'}
			highlightClass={highlight}
		/>
	);
};

export default Rock;
