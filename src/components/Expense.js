import React from 'react';
import ExpenseForm from './ExpenseForm';
import './Expense.css';

function Expense(props) {
  const [isEditing, setEditing] = React.useState(false);

  const onSubmitHandler = (expenseData) => {
    const data = { ...expenseData, id: Math.random() };
    props.onAddExpense(data);
    setEditing(false);
  };

  const isEditingHandler = () => {
    setEditing(true);
  };

  const cancelEditingHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          dataTransferred={onSubmitHandler}
          onCancelEditing={cancelEditingHandler}
        />
      )}
    </div>
  );
}

export default Expense;
