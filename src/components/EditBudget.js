import React, { useState } from 'react';

const EditBudget = ({ budget, handleSaveClick }) => {
	const [value, setValue] = useState(budget);
	return (
		<>
			<input
				required="required"
				type="number"
				className="form-control mr-3"
				id="name"
				value={value}
				onChange={(expenses) => setValue(expenses.target.value)}
			/>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;
