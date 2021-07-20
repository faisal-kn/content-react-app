import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = React.useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
