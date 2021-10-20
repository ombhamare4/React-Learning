import React, { useState } from 'react'

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterDate, setEnterDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enterTitle: " ",
    //     enetrAmount: " ",
    //     enetrDate: " ",
    // });

    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value,
        // });
    };
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value)
        // setUserInput({
        // ...userInput,
        // enterAmount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        console.log(event.target.value)
        setEnterDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();//Request is not sent so page will not reload.
        console.log('Form Submitted');
        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnterDate('');
        setEnterAmount('');
        setEnterTitle('');
        // console.log(expenseData);
    }
    return (


        <form className="p-5" onSubmit={submitHandler}>
            <div className="form-group d-flex flex-wrap  justify-content-evenly">
                <div>
                    <label>Title: </label>
                    <input className="form-control mt-2" value={enterTitle} type="text" name="title" onChange={titleChangeHandler} />
                </div>
                <div className="">
                    <label>Amount:</label>
                    <input className="form-control mt-2" value={enterAmount} type="number" min="0.01" step="0.01" name="title" onChange={amountChangeHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input className="form-control mt-2" value={enterDate} type="date" name="title" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>


            </div>
            <div className="text-end d-flex flex-wrap">
                <button type="button" onClick={props.onStop} className="btn btn-danger mt-3 me-5">Cancel</button>
                <button type="submit" className="btn btn-primary mt-3 ">Add Expense</button>
            </div>

        </form>


    )
};

export default ExpenseForm;