import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 19th 2021</div>
      <h2 className="expense-item__description">Car Insurance</h2>
      <div className="expense-item__price">345$</div>
    </div>
  );
}

export default ExpenseItem;
