import React from 'react'

const UserList = (props) => {


    return (
        <div className="container mt-5">
            <ul className="list-group " >
                {props.users.map(user =>
                <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id}>
                    {user.name}
                    <span className="badge bg-primary rounded-pill">{user.age}</span>
                </li>
            )}
                {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                    A list item
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span className="badge bg-primary rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge bg-primary rounded-pill">1</span>
                </li> */}
            </ul>
        </div>

    );
};

export default UserList;