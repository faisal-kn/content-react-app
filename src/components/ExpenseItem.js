import './ExpenseItem.css';

function ExpenseItem(props) {
  console.log(props);
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleString()}</div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
