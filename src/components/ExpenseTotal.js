import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses, theme } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	return (
		<div className={`p-4 ${theme}-theme`}>
			<span>Expenses Total: ${totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;
