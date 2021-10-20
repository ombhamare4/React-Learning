// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/NavBar/Navbar'
import GoalForm from './components/GoalForm/GoalForm';
import GoalList from './components/GoalList/GoalList';

let dummy_task = [
  // {
  //   id: '1',
  //   name: 'Introduction to react',


  // },
  // {
  //   id: '2',
  //   name: 'Creating First Component',

  // },
  // {
  //   id: '3',
  //   name: 'What is Props',
  // },
];

function App() {
  const [task, setTask] = useState(dummy_task);
  const taskHandler = (taskName) => {
    setTask(prevTask => {
      const updatedTask = [...prevTask];
      updatedTask.unshift({ id: Math.random().toString(), name: taskName })
      return updatedTask;
    });

  };
  return (
    <div>
      <Navbar />
      <GoalForm onTaskSend={taskHandler} />
      <GoalList task={task} />
    </div>
  );
}

export default App;
