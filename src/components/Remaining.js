import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
	const { budget, expenses, theme } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	return (
		<div className={`p-4 ${theme}-theme`}>
			<span>Balance: ${budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;
