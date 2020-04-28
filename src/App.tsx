import React, { useState } from 'react';

import Layout from './components/general/Layout';
import Picker from './components/Picker';
import Compare from './components/Compare';
import { PickContext } from './context/PickContext';

function App() {
	const [handPick, setHandPick] = useState<{ hand: string | null }>({
		hand: null,
	});

	return (
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
	);
}

export default App;
