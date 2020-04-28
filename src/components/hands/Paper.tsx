import React from 'react';

import Circle from '../ui/Circle';
import IconPaper from '../../assets/images/icon-paper.svg';

const gradient = {
	first: '230, 89%, 62%',
	second: '230, 89%, 65%',
};

const Paper = () => {
	return <Circle handIcon={IconPaper} bg={gradient} name={'paper'} />;
};

export default Paper;
