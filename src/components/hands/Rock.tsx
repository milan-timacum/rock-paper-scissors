import React from 'react';

import IconRock from '../../assets/images/icon-rock.svg';
import Circle from '../ui/Circle';

const gradient = {
	first: '349, 71%, 52%',
	second: '349, 70%, 56%',
};

const Rock = () => {
	return <Circle handIcon={IconRock} bg={gradient} />;
};

export default Rock;
