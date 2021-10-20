import React from 'react'

function ExpenseFilter(props) {

    const dropDownChangeHandler = (event) => {
        // console.log(event.target.value);
        props.onChangeFillter(event.target.value);
    }

    return (
        <div className="container my-5 mx-5">
            <select onChange={dropDownChangeHandler} className="form-select" aria-label="Default select example">
                <option value={props.selected}>Open this select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
};

export default ExpenseFilter;