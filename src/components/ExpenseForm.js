import React from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, titleChange] = React.useState('');
  const [amount, amountChange] = React.useState('');
  const [date, dateChange] = React.useState('');

  const onTitleChange = (event) => {
    titleChange(event.target.value);
  };

  const onAmountChange = (event) => {
    amountChange(event.target.value);
  };

  const onDateChange = (event) => {
    dateChange(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    //we add value property to input fields to better clear the fields
    titleChange('');
    amountChange('');
    dateChange('');
    //We need to send this expenseData object to to app.js so we need to pass data to paret component.The best way is to pass
    //a function as a prop.
    props.dataTransferred(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
