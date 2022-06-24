import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Switch() {
	const { theme, toggleTheme } = useContext(AppContext);
	return (
		<button onClick={toggleTheme} className={`${theme}-theme`}>
			Switch Theme
		</button>
	);
}

export default Switch;
