import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


import React from 'react'
function ExpenseItem(props) {

    // const expenseDate = new Date(2022,3,22);
    // const expenseTitle = "PS5 with Call of duty War zone";
    // const expenseAmout = 300.56;

    // const [title,setTitle] = useState(props.title);

    // const [amout,setAmount] = useState(props.amout);

    // let initialTitle = props.title;

    // const clickHandele =() =>{
    //     // initialTitle ="Paper Toilet";
    //     setTitle("Updated Toilet Papaer");
    //     console.log("Button Working Click Handler");
    // }

    // console.log(props.title);

    return (
        <>
            
           
            <div className="expense-item text-center d-flex flex-wrap ">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2 className="text-white">{props.title}</h2>
                    <div className="bg-danger p-2 rounded">
                        <h2><span>$</span>{props.amount}</h2>
                    </div>
                    {/* <button onClick={clickHandele} className="btn btn-primary">Change Title</button> */}
                </div>
            </div>
        </>
    )
}

export default ExpenseItem;