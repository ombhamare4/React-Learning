import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
function Expenses(props) {


    const [filterYear, setFilterYear] = useState('2020');

    // const [filterItem,SetFilterItem] = useState(props.item);

    // console.log(props.items);

    const filterChangedHandler = selectedYear => {
        // setFilterYear(selectedYear);
        console.log(selectedYear);
        setFilterYear(selectedYear)
    }

    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

   


    return (
        <div>
            <ExpenseFilter selected={filterYear} onChangeFillter={filterChangedHandler} />
  
            <ExpenseList items={filterExpense}/>
            
        </div>


    )
};

export default Expenses;