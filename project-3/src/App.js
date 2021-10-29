import React, {useState} from 'react';
import './index.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {


  const [enterUserData, setEnterUserData] = useState([]);

  const addUserHandler =(uName,uAge) =>{
    setEnterUserData((prevUserData)=>{
      return [...prevUserData,{id:Math.random().toString() ,name:uName,age:uAge}];
    });
  };

  return (
    <div>
      <AddUser onAdduser={addUserHandler}/>
      <UserList users={enterUserData}/>
    </div>
  );
}

export default App;
