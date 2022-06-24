import React, { createContext, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// A
export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload,
				),
			};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

// B
const initialState = {
	budget: 3000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
	],
};

// D
export const AppContext = createContext();
// C E
export const AppProvider = ({ children }) => {
	// Reducer
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Theme and Content Color
	const [theme, setTheme] = useState('dark');

	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}
	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
				theme,
				toggleTheme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
