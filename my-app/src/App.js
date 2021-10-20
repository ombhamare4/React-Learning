// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Information from './Components/Information';


export default class App extends React.Component {
  render(){

    var user = {
      Username:"Om",
      hobbies:['E-sports','Music','Twitch']
    }

    return (
      <>
    
      <Navbar title="Om Rubiks" />
      {/* <Navbar/> */}
      <TextForm heading="React First App" />
      <Information name={"Omer"} user={user}/>

    </> 
    )
  }
}

// function App() {
  
//   return (
//     <>
    
//       <Navbar title="Om Rubiks" />
//       {/* <Navbar/> */}
//       <TextForm heading="React First App" />
//       <Information name={this.user.name} />

//     </>
//   );
// }

// export default App;
