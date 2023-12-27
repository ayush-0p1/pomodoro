import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import { useState } from 'react';



function App() {
  
  const [bgColor, setBgColor] = useState('#ba4949');

  return (
      <div className="App">
      <Navbar title = "Pomodoro"/>
      <div className='container' style={{paddingTop :'80px' ,height: '400px',width : '550px' ,border:'1px solid #FFFFFF' ,borderRadius :'10px'}}>
        <Timer/>
      </div>
      </div>
  
  );
}

export default App;
