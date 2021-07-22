import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './NewExpenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function NewExpenses(props) {
  const [sendYear, setYear] = React.useState('2021');
  const filterYearHandler = (year) => {
    setYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === +sendYear;
  });
  let renderedElement;
  if (filteredExpenses.length === 0) {
    renderedElement = (
      <p className="expenses-list__fallback">No Expenses found</p>
    );
  } else {
    renderedElement = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter currentYear={sendYear} onNewYear={filterYearHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        {renderedElement}
      </Card>
    </div>
  );
}

export default NewExpenses;
