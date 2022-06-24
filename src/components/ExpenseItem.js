import React, { useContext } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ name, cost, id }) => {
	const { dispatch, theme } = useContext(AppContext);

	const handleDelete = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: id,
		});
	};

	return (
		<li
			className={`list-group-item d-flex justify-content-between align-items-center ${theme}-theme`}
		>
			{name}
			<div>
				<span className="badge alert-warning mr-3">${cost}</span>

				<BsTrashFill size="1.5em" onClick={handleDelete} />
			</div>
		</li>
	);
};

export default ExpenseItem;
