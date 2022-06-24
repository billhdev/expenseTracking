import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	// const expenses = [
	// 	{ id: 123, name: 'House', cost: 50 },
	// 	{ id: 345, name: 'Pole', cost: 500 },
	// 	{ id: 133, name: 'Game', cost: 5 },
	// 	{ id: 223, name: 'Food', cost: 5 },
	// 	{ id: 143, name: 'Fuel', cost: 55 },
	// ];

	const expenseList = expenses.map((expense) => (
		<ExpenseItem
			key={expense.id}
			id={expense.id}
			name={expense.name}
			cost={expense.cost}
		/>
	));
	return (
		<ul className="list-group">
			{expenseList.length > 0 ? (
				expenseList
			) : (
				<h3 style={{ color: 'red', fontWeight: 'bold' }}>
					Please add expense item
				</h3>
			)}
		</ul>
	);
};

export default ExpenseList;
