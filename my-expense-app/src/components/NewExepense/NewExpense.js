import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const [showForm , setShowForm] = useState(false);

    const saveExpenseHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    const showFormHandler =() =>{
        setShowForm(true);
    }

    const stopEditingForm = () =>{
        setShowForm(false);
    }

    return (
        <>
            <div className="container bg-dark text-white">
                {!showForm && <button onClick={showFormHandler} type="submit" className="btn btn-primary">Add New Expense</button>}
                {showForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onStop={stopEditingForm} />}
            </div>
        </>
    );

};

export default NewExpense;