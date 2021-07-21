import ExpenseForm from './ExpenseForm';
import './Expense.css';

function Expense(props) {
  const onSubmitHandler = (expenseData) => {
    const data = { ...expenseData, id: Math.random() };
    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm dataTransferred={onSubmitHandler} />
    </div>
  );
}

export default Expense;
