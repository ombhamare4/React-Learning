import React, { useState } from 'react'
import Card from '../UI/Card'
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {

    const [enterUserName, setEnterUserName] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();//Prevent default form submission


        if (enterUserName.trim().length === 0 && enterAge.trim().length === 0) {
            setError({
                title: "Invalid Error",
                message: "Please Enter Valid Age and Name"
            });
            return;
        }
        if (+enterAge < 1) {
            return;
        }

        props.onAdduser(enterUserName, enterAge);

        console.log("Form Submitted");
        console.log(enterUserName, enterAge);
        setEnterUserName('');
        setEnterAge('');



        // if (enterUserName.trim().length > 0 && enterAge.trim().length > 0) {
        //     console.log("Form Submitted");
        //     console.log(enterUserName, enterAge);
        //     setEnterUserName('');
        //     setEnterAge('');

        // }else{
        //     console.log("Submision Failed");
        // }


    };

    const userNameChangeHandler = (event) => {
        setEnterUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnterAge(event.target.value);
    };

    return (
        <div >

            {error && <ErrorModel title={error.title} message={error.message} />}
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            value={enterUserName}
                            className="form-control"
                            id="username"
                            onChange={userNameChangeHandler}
                        />
                        <label htmlFor="age" className="form-label">Age</label>
                        <input
                            type="number"
                            value={enterAge}
                            className="form-control"
                            id="age"
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Card>

        </div>
    )
};

export default AddUser;