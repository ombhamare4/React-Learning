import React, {useState } from 'react'
import Button from '../Button/Button'
const GoalForm = (props) => {

    var quote = 'A goal without a plan is dream';
    const [taskName, setTaskName] = useState(' ');
    const [isValid, setisValid] = useState(true);
    const [errorText, setErrorText] = useState(quote)
    const taskHandler = (event) => {
        // console.log(event.target.value);
        setTaskName(event.target.value);
        if (taskName.length > 0) {
            setisValid(true);
            setErrorText('')
        }
    }
    const submitHandler = (event) => {
        event.preventDefault();

        if (taskName.trim().length === 0) {
            setisValid(false);
            setErrorText('Please Fill Form Properly');   
        } 
        props.onTaskSend(taskName);
        setTaskName('');
        // props.
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="container  w-50 mt-5 p-3 shadow bg-body rounded">
                <h3>Set Your Goal...</h3>
                <div className="mb-3">
                    <label className="form-label">Enter Task</label>
                    <textarea type="text" value={taskName} className={`form-control ${!isValid ? 'border-danger' : 'border-primary'}`} placeholder={errorText} onChange={taskHandler} />
                </div>
                {/* <div className="mb-3 d-flex flex-wrap">
                    <div className="me-2">
                        <label className="form-label">Start Date</label>
                        <input type="date" className="form-control "  ></input>
                    </div>
                    <div>
                        <label className="form-label">End Date</label>
                        <input type="date" className="form-control "  ></input>
                    </div>
                </div> */}
                <Button type="submit"><span>+</span> Add Task</Button>
                {/* <div className="text-end">
                    <button type="submit" className="btn btn-primary"><span>+</span> Add Task</button>
                </div> */}
            </div>
        </form>
    )
}
export default GoalForm;