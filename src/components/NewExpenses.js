import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './NewExpenses.css';
import ExpenseFilter from './ExpenseFilter';

function NewExpenses(props) {
  const [sendYear, setYear] = React.useState('2020');
  const filterYearHandler = (year) => {
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter currentYear={sendYear} onNewYear={filterYearHandler} />
        {props.items
          .filter((expense) => {
            return expense.date.getFullYear() === +sendYear;
          })
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default NewExpenses;
