import React, { useState } from 'react';

import Layout from './components/general/Layout';
import Picker from './components/Picker';
import Compare from './components/Compare';
import { PickContext } from './context/PickContext';
import { ScoreContext } from './context/ScoreContext';

function App() {
	const get: any = window.localStorage.getItem('score');
	const storageScore = JSON.parse(get);

	const [score, setScore] = useState<number>(storageScore ? storageScore : 0);
	const [handPick, setHandPick] = useState<{ hand: string | null }>({
		hand: null,
	});

	return (
		<ScoreContext.Provider
			value={{
				score,
				setScore,
			}}
		>
			<Layout>
				<PickContext.Provider
					value={{
						handPick,
						setHandPick,
					}}
				>
					{handPick.hand === null ? (
						<Picker />
					) : (
						<Compare value={handPick.hand} />
					)}
				</PickContext.Provider>
			</Layout>
		</ScoreContext.Provider>
	);
}

export default App;
