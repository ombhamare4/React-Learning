import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
    // let expenseContent = <p>No Expense Found</p>;

    if(props.items.length === 0) {
        return <h2>FOund No Expense</h2>;
    }

    return (
        <ul>
            {props.items.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    )
}

export default ExpenseList;