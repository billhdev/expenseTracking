import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Switch from './components/Switch';
import './App.css';

const App = () => {
	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-between">
				<h1 className="mt-3">Daily Budget Planner</h1>
				<Switch />
			</div>
			<div className="row mt-5">
				<div className="col-sm my-2">
					<Budget />
				</div>
				<div className="col-sm my-2">
					<ExpenseTotal />
				</div>
				<div className="col-sm my-2">
					<Remaining />
				</div>
			</div>

			<h1 className="mt-3">Expenses</h1>
			<div className="row mt-3">
				<div className="col-sm">
					<ExpenseList />
				</div>
			</div>

			<div className="mt-3">
				<h1>Add Expenses</h1>
				<div className="mt-3">
					<div className="col-sm">
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
